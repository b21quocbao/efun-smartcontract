import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";
import web3 from "web3";

import { ComPool__factory, ELPToken__factory, ERC20Token, ERC20Token__factory } from "../../src/types";
import type { Event__factory } from "../../src/types/factories/contracts/Event.sol/Event__factory";
import type { Prediction__factory } from "../../src/types/factories/contracts/Prediction__factory";

const { toWei } = web3.utils;

task("deploy:Prediction").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const PredictionFactory: Prediction__factory = <Prediction__factory>await ethers.getContractFactory("Prediction");
  const predictionFactory = await upgrades.deployProxy(PredictionFactory, [100, 10000, toWei("2000")]);
  console.log("Prediction deployed to: ", predictionFactory.address);
});

task("deploy:Event").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const EventFactory: Event__factory = <Event__factory>await ethers.getContractFactory("Event");
  const eventFactory = await upgrades.deployProxy(EventFactory, []);
  console.log("Event deployed to: ", eventFactory.address);
});

task("deploy:ELPToken")
  .addParam("poolAddress", "Pool contract address")
  .addParam("efunAddress", "Efun contract address")
  .addParam("feeCollector", "Fee collector")
  .addParam("elpAmount", "ELP amount")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const [deployer] = await ethers.getSigners();
    const comPool = await ComPool__factory.connect(taskArguments.poolAddress, deployer);
    const ELPTokenFactory: ELPToken__factory = <ELPToken__factory>await ethers.getContractFactory("ELPToken");
    const elpTokenFactory = await upgrades.deployProxy(ELPTokenFactory, [
      "EFUN Liquidity Pool Token",
      "ELP",
      taskArguments.poolAddress, // Testnet: 0x465b5d723eD174D5A10d16a7b86D3de925ab4f91
      taskArguments.efunAddress, // Testnet: 0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d, Mainnet: 0x6746E37A756DA9E34f0BBF1C0495784Ba33b79B4
      deployer.address,
      taskArguments.feeCollector, // Testnet: 0x826bb7fA8155F31E8f7ad9c5B78947C85C45Ee30, Mainnet: 0x9AFfAA4c1c3Eb3fDdAfEd379C25E50a68A323044
      taskArguments.elpAmount, // 10**3
    ]);
    await comPool.approve(elpTokenFactory.address);
    console.log("ELPToken deployed to: ", elpTokenFactory.address);
  });

task("deploy:ComPool")
  .addParam("efunAddress", "Efun contract address")
  .addParam("efunAmount", "Efun amount")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const [deployer] = await ethers.getSigners();

    const ComPoolFactory: ComPool__factory = <ComPool__factory>await ethers.getContractFactory("ComPool");
    const comPoolFactory = await upgrades.deployProxy(ComPoolFactory, [
      10000,
      taskArguments.efunAddress, // Testnet: 0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d, Mainnet: 0x6746E37A756DA9E34f0BBF1C0495784Ba33b79B4
    ]);

    const erc20Token = ERC20Token__factory.connect(taskArguments.efunAddress, deployer);
    await erc20Token.approve(comPoolFactory.address, taskArguments.efunAmount);
    const comPool = ComPool__factory.connect(comPoolFactory.address, deployer);
    await comPool.deposit(taskArguments.efunAmount);

    console.log("ComPool deployed to: ", comPoolFactory.address);
  });

task("deploy:ERC20")
  .addParam("symbol", "Contract symbol")
  .addParam("name", "Contract name")
  .addParam("supply", "Token supply")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const signers: SignerWithAddress[] = await ethers.getSigners();

    const erc20Factory: ERC20Token__factory = <ERC20Token__factory>await ethers.getContractFactory("ERC20Token");
    const erc20: ERC20Token = <ERC20Token>(
      await erc20Factory
        .connect(signers[0])
        .deploy(taskArguments.name, taskArguments.symbol, taskArguments.supply + "000000000000000000")
    );
    await erc20.deployed();
    console.log("ERC20 deployed to: ", erc20.address);
  });

task("upgrade:Prediction")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const PredictionFactory: Prediction__factory = <Prediction__factory>await ethers.getContractFactory("Prediction");
    await upgrades.upgradeProxy(taskArguments.address, PredictionFactory);
  });

task("upgrade:Event")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const EventFactory: Event__factory = <Event__factory>await ethers.getContractFactory("Event");
    await upgrades.upgradeProxy(taskArguments.address, EventFactory);
  });

task("upgrade:ELPToken")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const ELPTokenFactory: ELPToken__factory = <ELPToken__factory>await ethers.getContractFactory("ELPToken");
    await upgrades.upgradeProxy(taskArguments.address, ELPTokenFactory);
  });

task("upgrade:ComPool")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const ComPoolFactory: ComPool__factory = <ComPool__factory>await ethers.getContractFactory("ComPool");
    await upgrades.upgradeProxy(taskArguments.address, ComPoolFactory);
  });
