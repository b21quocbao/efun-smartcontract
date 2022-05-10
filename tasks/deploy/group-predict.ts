import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { GroupMatch__factory } from "../../src/types/factories/contracts/custom/group-predict/GroupMatch__factory";
import type { GroupPrediction__factory } from "../../src/types/factories/contracts/custom/group-predict/GroupSponsoredPredict.sol";

task("deploy:GroupPrediction").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const GroupPredictionFactory: GroupPrediction__factory = <GroupPrediction__factory>(
    await ethers.getContractFactory("GroupPrediction")
  );
  const groupPredictionFactory = await upgrades.deployProxy(GroupPredictionFactory, [
    "0x000000000000000000000000000000000000dEaD",
    2,
    100,
    10000,
    false,
  ]);
  await groupPredictionFactory.deployed();

  const currentImplAddress = await getImplementationAddress(ethers.provider, groupPredictionFactory.address);
  console.log("GroupPrediction deployed to: ", groupPredictionFactory.address);
  console.log("Implementation address: ", currentImplAddress);
});

task("deploy:GroupMatch").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const GroupMatchFactory: GroupMatch__factory = <GroupMatch__factory>await ethers.getContractFactory("GroupMatch");
  const groupMatchFactory = await upgrades.deployProxy(GroupMatchFactory, []);
  await groupMatchFactory.deployed();

  const currentImplAddress = await getImplementationAddress(ethers.provider, groupMatchFactory.address);
  console.log("GroupMatch deployed to: ", groupMatchFactory.address);
  console.log("Implementation address: ", currentImplAddress);
});
