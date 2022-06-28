import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { ApiConsumer__factory } from "../../src/types/factories/contracts/custom/ApiConsumer__factory";

task("deploy:ApiConsumer").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const ApiConsumerFactory: ApiConsumer__factory = <ApiConsumer__factory>await ethers.getContractFactory("ApiConsumer");
  const apiConsumerFactory = await ethers.deploy(ApiConsumerFactory, []);
  console.log("ApiConsumer deployed to: ", apiConsumerFactory.address);
});

task("upgrade:ApiConsumer")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const ApiConsumerFactory: ApiConsumer__factory = <ApiConsumer__factory>(
      await ethers.getContractFactory("ApiConsumer")
    );
    await upgrades.upgradeProxy(taskArguments.address, ApiConsumerFactory);
  });
