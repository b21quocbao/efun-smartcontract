import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Event__factory } from "../../src/types/factories/contracts/Event__factory";
import type { Prediction__factory } from "../../src/types/factories/contracts/Prediction__factory";

task("deploy:Prediction").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const PredictionFactory: Prediction__factory = <Prediction__factory>await ethers.getContractFactory("Prediction");
  const predictionFactory = await upgrades.deployProxy(PredictionFactory, [100, 10000]);
  console.log("Prediction deployed to: ", predictionFactory.address);
});

task("deploy:Event").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const EventFactory: Event__factory = <Event__factory>await ethers.getContractFactory("Event");
  const eventFactory = await upgrades.deployProxy(EventFactory, []);
  console.log("Event deployed to: ", eventFactory.address);
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
