import { task } from "hardhat/config";
import web3 from "web3";

import { Event__factory } from "../../src/types/factories/contracts/Event__factory";
import { Prediction__factory } from "../../src/types/factories/contracts/Prediction__factory";

const { toWei } = web3.utils;

task("create:Event")
  .addParam("eventId", "EventId")
  .setAction(async function (_taskArgs, hre) {
    const { ethers } = hre;
    const [deployer] = await ethers.getSigners();

    const event = await Event__factory.connect("0x9BBfAC96A5220a030fDDbD2702B8F5A225Dbe645", deployer);

    const { timestamp } = await ethers.provider.getBlock("latest");

    const tx = await event.createSingleEvent(
      Number(_taskArgs.eventId),
      timestamp + 60,
      timestamp + 7 * 24 * 3600,
      timestamp + 10 * 24 * 3600,
      "0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e",
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

    const event = await Event__factory.connect("0x9BBfAC96A5220a030fDDbD2702B8F5A225Dbe645", deployer);

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
    const caller = new ethers.Wallet(
      "8dc49be4fc73bc613cf35cc17104531f129411fbfb73236d037a3733bed1a803",
      ethers.provider,
    );

    const prediction = await Prediction__factory.connect("0x522608829526221417EDC35194A9060De79428C4", caller);

    const tx = await prediction
      .connect(caller)
      .predict(
        Number(_taskArgs.eventId),
        ["Liverpool"],
        ["0x0000000000000000000000000000000000000000"],
        [toWei("0.01")],
        {
          value: toWei("0.01"),
        },
      );
    console.log("\x1b[36m%s\x1b[0m", "tx", tx);
  });

task("update:event:data").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  const prediction = await Prediction__factory.connect("0x522608829526221417EDC35194A9060De79428C4", deployer);

  const tx = await prediction.connect(deployer).setEventData("0x9BBfAC96A5220a030fDDbD2702B8F5A225Dbe645");
  console.log("\x1b[36m%s\x1b[0m", "tx", tx);
});
