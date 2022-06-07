import { task } from "hardhat/config";
import web3 from "web3";

import { Event__factory } from "../../src/types/factories/contracts/Event__factory";
import { Prediction__factory } from "../../src/types/factories/contracts/Prediction__factory";

const { toWei } = web3.utils;

task("create:Event").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  const event = await Event__factory.connect("0x9BBfAC96A5220a030fDDbD2702B8F5A225Dbe645", deployer);

  const { timestamp } = await ethers.provider.getBlock("latest");

  const tx = await event.createSingleEvent(
    1654588275,
    1654595424,
    1654681824,
    "0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208",
    {
      data: ["1", "2"],
      odds: [10000, 10000],
    },
    [
      "Duc tesst t",
      "https://ipfs.infura.io/ipfs/QmcsoGEKj5cBnN991qh3k3jfYkihfnjbMk6q6tFYNkKhaq",
      "",
      "9",
      "8",
      "12",
      "Group Predict",
      "Multiple choices",
      "adad",
      '{"eventType":"user vs user","tokens":["0x0000000000000000000000000000000000000000"]}',
      "d",
      "",
    ],
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

task("deposit:LP")
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
      .depositLP(
        Number(_taskArgs.eventId),
        ["0x0000000000000000000000000000000000000000", "0x8E2A402b5debc184EB4C3f659CCc29A3b5d8f24d"],
        [toWei("0.0001"), toWei("100")],
        {
          value: toWei("0.0001"),
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
