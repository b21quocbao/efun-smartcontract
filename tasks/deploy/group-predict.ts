import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { GroupPredict__factory } from "../../src/types/factories/contracts/custom/GroupPredict__factory";

task("deploy:GroupPredict").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const GroupPredictFactory: GroupPredict__factory = <GroupPredict__factory>(
    await ethers.getContractFactory("GroupPredict")
  );
  const groupPredictFactory = await upgrades.deployProxy(GroupPredictFactory, []);
  const currentImplAddress = await getImplementationAddress(ethers.provider, groupPredictFactory.address);
  console.log("GroupPredict deployed to: ", groupPredictFactory.address);
  console.log("Implementation address: ", currentImplAddress);
});

task("upgrade:GroupPredict")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const GroupPredictFactory: GroupPredict__factory = <GroupPredict__factory>(
      await ethers.getContractFactory("GroupPredict")
    );
    const groupPredictFactory = await upgrades.upgradeProxy(taskArguments.address, GroupPredictFactory);
    const currentImplAddress = await getImplementationAddress(ethers.provider, groupPredictFactory.address); // 0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208
    console.log("GroupPredict upgraded to: ", groupPredictFactory.address);
    console.log("Implementation address: ", currentImplAddress);
  });
