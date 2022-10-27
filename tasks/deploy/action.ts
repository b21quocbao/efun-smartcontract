import { task } from "hardhat/config";
import web3 from "web3";

import { ComPool__factory, ERC20Token__factory, ERC721Token__factory, GroupPredict__factory } from "../../src/types";
import { ELPToken__factory } from "../../src/types/factories/contracts/ELPToken__factory";
import { Event__factory } from "../../src/types/factories/contracts/Event.sol/Event__factory";
import { Prediction__factory } from "../../src/types/factories/contracts/Prediction__factory";

const { toWei } = web3.utils;

task("create:Event").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  const prediction = await Prediction__factory.connect("0x737Df0F21b8C98E1F2CB2D652428f337191Bd929", deployer);

  const { timestamp } = await ethers.provider.getBlock("latest");

  const tx = await prediction.createSingleEvent(
    [timestamp + 60, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 0, 0],
    [
      "0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208",
      "0x0000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000",
    ],
    [10000, 10000],
    "",
    ["0x0000000000000000000000000000000000000000"],
    [toWei("0.0001")],
    false,
    0,
    {
      value: toWei("0.0001"),
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

    const event = await Event__factory.connect("0x54d760D06e229a3100a915514CB93216B0444799", deployer);

    console.log(Number(_taskArgs.eventId), _taskArgs.result, "Line #46 action.ts");

    const tx = await event.updateEventResult(Number(_taskArgs.eventId), _taskArgs.result);
    console.log("\x1b[36m%s\x1b[0m", "tx", tx);
  });

task("create:Prediction")
  .addParam("eventId", "EventId")
  .setAction(async function (_taskArgs, hre) {
    console.log(_taskArgs, "Line #39 create-event.ts");

    const { ethers } = hre;
    const caller = new ethers.Wallet(
      "f1da5c509a164c5bf1194e1013ec7576c357c17811ea7a2583041f27cd364482",
      ethers.provider,
    );

    const prediction = await Prediction__factory.connect("0x737Df0F21b8C98E1F2CB2D652428f337191Bd929", caller);

    const tx1 = await prediction.connect(caller).setEventData("0x54d760D06e229a3100a915514CB93216B0444799");
    await tx1.wait();

    const tx = await prediction
      .connect(caller)
      .predict(Number(_taskArgs.eventId), ["0"], ["0x0000000000000000000000000000000000000000"], [toWei("0.00001")], {
        value: toWei("0.00001"),
      });
    console.log((await tx.wait()).gasUsed, "Line #81 action.ts");
  });

task("set:Prediction:detail").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const caller = new ethers.Wallet("f1da5c509a164c5bf1194e1013ec7576c357c17811ea7a2583041f27cd364482", ethers.provider);
  const prediction = await Prediction__factory.connect("0x737Df0F21b8C98E1F2CB2D652428f337191Bd929", caller);

  const tx1 = await prediction.connect(caller).setEventData("0x54d760D06e229a3100a915514CB93216B0444799");
  await tx1.wait();
  const tx2 = await prediction.connect(caller).setEfunToken("0x8E2A402b5debc184EB4C3f659CCc29A3b5d8f24d");
  await tx2.wait();

  const tx = await prediction.connect(caller).setFeeCollector("0xAe87fe29D3abEFD335cE9F6aB0797E7a59D22cC9");
  await tx.wait();
});

task("deposit:LP")
  .addParam("eventId", "EventId")
  .setAction(async function (_taskArgs, hre) {
    console.log(_taskArgs, "Line #39 create-event.ts");

    const { ethers } = hre;
    const caller = new ethers.Wallet(
      "8dc49be4fc73bc613cf35cc17104531f129411fbfb73236d037a3733bed1a803",
      ethers.provider,
    );

    const prediction = await Prediction__factory.connect("0x737Df0F21b8C98E1F2CB2D652428f337191Bd929", caller);

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

  const prediction = await Prediction__factory.connect("0x737Df0F21b8C98E1F2CB2D652428f337191Bd929", deployer);

  const tx = await prediction.connect(deployer).setEventData("0x54d760D06e229a3100a915514CB93216B0444799");
  console.log("\x1b[36m%s\x1b[0m", "tx", tx);
});

task("calculate:potential:reward").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  const prediction = await Prediction__factory.connect("0x737Df0F21b8C98E1F2CB2D652428f337191Bd929", deployer);

  console.log(
    await prediction.getMaxPayoutBatch(
      [172, 172],
      ["0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d", "0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d"],
      [0, 1],
    ),
  );
});

task("calculate:potential:multiple").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  const contract = await GroupPredict__factory.connect("0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208", deployer);

  console.log(
    await contract.calculateRewardSponsor(
      "0x54d760d06e229a3100a915514cb93216b0444799",
      66,
      "4000000000000000000000",
      [0, "2000000000000000000000", 0, 0, 0],
      {
        predictionAmount: "2000000000000000000000",
        predictOptions: 2,
        claimed: false,
      },
      10000,
      "1000000000000000000000",
    ),
    "potential 1",
  );
});

task("approve:token").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  const contract = await ERC20Token__factory.connect("0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d", deployer);

  console.log(
    await contract.approve(
      "0xCdD7A96Ef0A5F5b66C2501e01bee742915AD27A3",
      "100000000000000000000000000000000000000000000000000",
    ),
    "potential 1",
  );
});

task("buy:elp").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  const contract = ELPToken__factory.connect("0xCdD7A96Ef0A5F5b66C2501e01bee742915AD27A3", deployer);

  console.log(await contract.buyToken(toWei("1000")), "potential 1");
  console.log(await contract.currentNav(), "potential 1");
});

task("buy:nft").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer] = await ethers.getSigners();

  const contract = ELPToken__factory.connect("0xCdD7A96Ef0A5F5b66C2501e01bee742915AD27A3", deployer);

  console.log(await contract.buyNFT(0, 1), "potential 1");
  console.log(await contract.buyNFT(1, 1), "potential 1");
  console.log(await contract.buyNFT(2, 1), "potential 1");
  console.log(await contract.buyNFT(3, 1), "potential 1");
  console.log(await contract.buyNFT(4, 1), "potential 1");
  console.log(await contract.currentNav(), "potential 1");
});

task("transfer:nft").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const [deployer, deployer2] = await ethers.getSigners();

  const contract = ERC721Token__factory.connect("0x1C566aa7Aa21395975e990E119c4a0cD9819DaCA", deployer2);

  console.log(await contract.transferFrom(deployer2.address, deployer2.address, 2), "potential 1");
  // console.log(await contract.currentNav(), "potential 1");
});

task("set:classId")
  .addParam("address", "address")
  .setAction(async function (_taskArgs, hre) {
    const { ethers } = hre;
    const [deployer] = await ethers.getSigners();

    const contract = ELPToken__factory.connect(_taskArgs.address, deployer);

    console.log(await contract.setCounts([0, 0, 0, 0, 0]), "count 1");
    console.log(await contract.setLimits([200, 30, 15, 4, 3]), "limit 1");
  });

task("get:amount")
  .addParam("address", "address")
  .setAction(async function (_taskArgs, hre) {
    const { ethers } = hre;
    const [deployer] = await ethers.getSigners();

    const contract = ComPool__factory.connect(_taskArgs.address, deployer);

    console.log(await contract.capacity(), "count 1");
  });

task("mint:erc20")
  .addParam("address", "address")
  .setAction(async function (_taskArgs, hre) {
    const { ethers } = hre;
    const [deployer] = await ethers.getSigners();

    const contract = ERC20Token__factory.connect("0x8E2A402b5debc184EB4C3f659CCc29A3b5d8f24d", deployer);

    console.log(await contract.mint(_taskArgs.address, toWei("100000000000")), "count 1");
  });

task("check:allowance")
  .addParam("owner", "owner")
  .setAction(async function (_taskArgs, hre) {
    const { ethers } = hre;
    const [deployer] = await ethers.getSigners();

    const contract = ERC20Token__factory.connect("0x8E2A402b5debc184EB4C3f659CCc29A3b5d8f24d", deployer);

    console.log(await contract.allowance(_taskArgs.owner, "0xCdD7A96Ef0A5F5b66C2501e01bee742915AD27A3"), "count 1");
  });
