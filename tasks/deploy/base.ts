import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";
import web3 from "web3";

import { ERC20Token, ERC20Token__factory } from "../../src/types";
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
