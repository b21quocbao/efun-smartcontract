import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { GroupPredict__factory } from "../../src/types/factories/contracts/custom/GroupPredict__factory";

task("deploy:GroupPredict").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const GroupPredictFactory: GroupPredict__factory = <GroupPredict__factory>(
    await ethers.getContractFactory("GroupPredict")
  );
  const groupPredictFactory = await upgrades.deployProxy(GroupPredictFactory, []);
  console.log("GroupPredict deployed to: ", groupPredictFactory.address);
});

task("upgrade:GroupPredict")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const GroupPredictFactory: GroupPredict__factory = <GroupPredict__factory>(
      await ethers.getContractFactory("GroupPredict")
    );
    await upgrades.upgradeProxy(taskArguments.address, GroupPredictFactory);
  });
