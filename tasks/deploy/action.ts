import { BigNumber, Signer } from "ethers";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";
import web3 from "web3";

import { Event__factory } from "../../src/types/factories/contracts/Event__factory";
import { Prediction__factory } from "../../src/types/factories/contracts/Prediction__factory";

const { toWei, fromWei } = web3.utils;

task("create:Event")
  .addParam("eventId", "EventId")
  .setAction(async function (_taskArgs, hre) {
    const { ethers } = hre;
    const [deployer] = await ethers.getSigners();

    const event = await Event__factory.connect("0xD51ED95e4f82bd4377B916b5D642f8F0e6B814DA", deployer);

    const { timestamp } = await ethers.provider.getBlock("latest");

    const tx = await event.createSingleEvent(
      Number(_taskArgs.eventId),
      timestamp + 60,
      timestamp + 7 * 24 * 3600,
      timestamp + 10 * 24 * 3600,
      "0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e",
      "0x0000000000000000000000000000000000000000",
      0,
      {
        data: ["Liverpool", "Manchester City"],
        odds: [45000, 67000],
      },
    );
    console.log("\x1b[36m%s\x1b[0m", "tx", tx);
  });

task("update:event:result")
  .addParam("eventId", "EventId")
  .addParam("result", "Result")
  .setAction(async function (_taskArgs, hre) {
    const { ethers } = hre;
    const [deployer] = await ethers.getSigners();

    const event = await Event__factory.connect("0xD51ED95e4f82bd4377B916b5D642f8F0e6B814DA", deployer);

    console.log(Number(_taskArgs.eventId), _taskArgs.result, "Line #46 action.ts");

    const tx = await event.updateEventResult(Number(_taskArgs.eventId), _taskArgs.result);
    console.log("\x1b[36m%s\x1b[0m", "tx", tx);
  });

task("create:Prediction")
  .addParam("eventId", "EventId")
  .setAction(async function (_taskArgs, hre) {
    console.log(_taskArgs, "Line #39 create-event.ts");

    const { ethers } = hre;
    const [deployer] = await ethers.getSigners();

    const prediction = await Prediction__factory.connect("0x43624c41450D76A8711c257969a67Fa7E6EdB6EB", deployer);

    const tx = await prediction
      .connect(deployer)
      .predict(Number(_taskArgs.eventId), "Liverpool", "0x0000000000000000000000000000000000000000", 0, {
        value: toWei("0.01"),
      });
    console.log("\x1b[36m%s\x1b[0m", "tx", tx);
  });
