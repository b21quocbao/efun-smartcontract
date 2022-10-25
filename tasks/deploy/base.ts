import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";
import web3 from "web3";

import {
  ComPool__factory,
  ELPToken__factory,
  ERC20Token,
  ERC20Token__factory,
  ERC721Token,
  ERC721Token__factory,
} from "../../src/types";
import type { Event__factory } from "../../src/types/factories/contracts/Event.sol/Event__factory";
import { Prediction__factory } from "../../src/types/factories/contracts/Prediction__factory";

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
  .addParam("efunAddress", "Efun contract address")
  .addParam("feeCollector", "Fee collector")
  .addParam("predictionAddress", "Prediction address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const [deployer] = await ethers.getSigners();

    // Deploy ERC721
    const erc721Factory: ERC721Token__factory = <ERC721Token__factory>await ethers.getContractFactory("ERC721Token");
    const erc721Contract: ERC721Token = <ERC721Token>(
      await erc721Factory
        .connect(deployer)
        .deploy(
          "EFUN NFT",
          "EFT",
          "0x0000000000000000000000000000000000000000",
          "0x0000000000000000000000000000000000000000",
        )
    );
    console.log("ERC721Token deployed to: ", erc721Contract.address);

    // Deploy ComPool
    const ComPoolFactory: ComPool__factory = <ComPool__factory>await ethers.getContractFactory("ComPool");
    const comPoolFactory = await upgrades.deployProxy(ComPoolFactory, [
      10000,
      taskArguments.efunAddress, // Testnet: 0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d, Mainnet: 0x6746E37A756DA9E34f0BBF1C0495784Ba33b79B4
    ]);
    console.log("ComPool deployed to: ", comPoolFactory.address);
    const comPoolContract = ComPool__factory.connect(comPoolFactory.address, deployer);

    // Deploy ELP
    const ELPTokenFactory: ELPToken__factory = <ELPToken__factory>await ethers.getContractFactory("ELPToken");
    const elpTokenFactory = await upgrades.deployProxy(ELPTokenFactory, [
      "EFUN Liquidity Pool Token",
      "ELP",
      comPoolContract.address,
      taskArguments.efunAddress, // Testnet: 0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d, Mainnet: 0x6746E37A756DA9E34f0BBF1C0495784Ba33b79B4
      deployer.address,
      taskArguments.feeCollector, // Testnet: 0x826bb7fA8155F31E8f7ad9c5B78947C85C45Ee30, Mainnet: 0x9AFfAA4c1c3Eb3fDdAfEd379C25E50a68A323044
      toWei("100"), // 10**3
      10000,
      erc721Contract.address,
    ]);
    console.log("ELPToken deployed to: ", elpTokenFactory.address);
    const elpContract = ELPToken__factory.connect(elpTokenFactory.address, deployer);

    const erc20Token = ERC20Token__factory.connect(taskArguments.efunAddress, deployer);
    const predictionContract = Prediction__factory.connect(taskArguments.predictionAddress, deployer);

    await erc721Contract.setElpTokenAddress(elpTokenFactory.address);
    // await erc721Contract.setExchangeContractAddress(exchangeContractAddress); // TODO
    await comPoolContract.approve(elpTokenFactory.address);
    await comPoolContract.approve(taskArguments.predictionAddress);
    console.log(await (await erc20Token.approve(comPoolFactory.address, toWei("100000"))).wait());
    console.log(await erc20Token.allowance(deployer.address, comPoolFactory.address), "Line #81 base.ts");

    await comPoolContract.deposit(toWei("100000"));

    await predictionContract.setLiquidityPoolAddress(erc20Token.address, comPoolFactory.address);
  });

task("deposit:Pool")
  .addParam("poolAddress", "Efun contract address")
  .addParam("predictionAddress", "Prediction address")
  .addParam("efunAddress", "Efun address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const [deployer] = await ethers.getSigners();
    const comPoolContract = ComPool__factory.connect(taskArguments.poolAddress, deployer);
    const predictionContract = Prediction__factory.connect(taskArguments.predictionAddress, deployer);
    await comPoolContract.deposit(toWei("100000"));

    await predictionContract.setLiquidityPoolAddress(taskArguments.efunAddress, comPoolContract.address);
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

task("deploy:ERC721")
  .addParam("elpAddress", "ELP Address")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const [deployer] = await ethers.getSigners();

    // Deploy ERC721
    const erc721Factory: ERC721Token__factory = <ERC721Token__factory>await ethers.getContractFactory("ERC721Token");
    const erc721Contract: ERC721Token = <ERC721Token>(
      await erc721Factory
        .connect(deployer)
        .deploy(
          "EFUN NFT",
          "EFT",
          "0x0000000000000000000000000000000000000000",
          "0x0000000000000000000000000000000000000000",
        )
    );
    console.log("ERC721Token deployed to: ", erc721Contract.address);
    const elpContract = ELPToken__factory.connect(taskArguments.elpAddress, deployer);
    await erc721Contract.setElpTokenAddress(elpContract.address);
    await elpContract.setErc721Token(erc721Contract.address);
    await elpContract.setCounts([0, 0, 0, 0, 0]);
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
