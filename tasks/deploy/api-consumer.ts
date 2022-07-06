import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { APIConsumer__factory } from "../../src/types/factories/contracts/APIConsumer__factory";

task("deploy:APIConsumer").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const APIConsumerFactory: APIConsumer__factory = <APIConsumer__factory>await ethers.getContractFactory("APIConsumer");
  const apiConsumerFactory = await APIConsumerFactory.deploy();
  console.log("APIConsumer deployed to: ", apiConsumerFactory.address);
});

task("test:APIConsumer").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const APIConsumerFactory: APIConsumer__factory = <APIConsumer__factory>await ethers.getContractFactory("APIConsumer");

  const apiConsumer = await APIConsumerFactory.attach("0x92a9EaE3AA6Cd3c5173827898c550d20a1a21FF3");

  const tx = await apiConsumer.requestFirstId();
  console.log("\x1b[36m%s\x1b[0m", "tx", tx);
});
