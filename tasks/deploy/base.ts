import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Event__factory } from "../../src/types/factories/contracts/Event__factory";
import type { Prediction__factory } from "../../src/types/factories/contracts/Prediction__factory";

task("deploy:Prediction").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const PredictionFactory: Prediction__factory = <Prediction__factory>await ethers.getContractFactory("Prediction");
  const predictionFactory = await upgrades.deployProxy(PredictionFactory, [100, 10000]);
  const currentImplAddress = await getImplementationAddress(ethers.provider, predictionFactory.address);
  console.log("Prediction deployed to: ", predictionFactory.address);
  console.log("Implementation address: ", currentImplAddress);
});

task("deploy:Event").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const EventFactory: Event__factory = <Event__factory>await ethers.getContractFactory("Event");
  const eventFactory = await upgrades.deployProxy(EventFactory, []);
  const currentImplAddress = await getImplementationAddress(ethers.provider, eventFactory.address);
  console.log("Event deployed to: ", eventFactory.address);
  console.log("Implementation address: ", currentImplAddress);
});

task("upgrade:Prediction")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const PredictionFactory: Prediction__factory = <Prediction__factory>await ethers.getContractFactory("Prediction");
    const predictionFactory = await upgrades.upgradeProxy(taskArguments.address, PredictionFactory);
    const currentImplAddress = await getImplementationAddress(ethers.provider, predictionFactory.address); // 0x43624c41450D76A8711c257969a67Fa7E6EdB6EB
    console.log("Prediction upgraded to: ", predictionFactory.address);
    console.log("Implementation address: ", currentImplAddress);
  });

task("upgrade:Event")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const EventFactory: Event__factory = <Event__factory>await ethers.getContractFactory("Event");
    const eventFactory = await upgrades.upgradeProxy(taskArguments.address, EventFactory);
    const currentImplAddress = await getImplementationAddress(ethers.provider, eventFactory.address); // 0xc6CAd1caEF5a39292Bff943f265f3f6EF2a3260D
    console.log("Event upgraded to: ", eventFactory.address);
    console.log("Implementation address: ", currentImplAddress);
  });
