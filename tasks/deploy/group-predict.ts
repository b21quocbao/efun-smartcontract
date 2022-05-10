import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { GroupEvent__factory } from "../../src/types/factories/contracts/custom/group-predict/GroupEvent__factory";
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

task("deploy:GroupEvent").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const GroupEventFactory: GroupEvent__factory = <GroupEvent__factory>await ethers.getContractFactory("GroupEvent");
  const groupEventFactory = await upgrades.deployProxy(GroupEventFactory, []);
  await groupEventFactory.deployed();

  const currentImplAddress = await getImplementationAddress(ethers.provider, groupEventFactory.address);
  console.log("GroupEvent deployed to: ", groupEventFactory.address);
  console.log("Implementation address: ", currentImplAddress);
});
