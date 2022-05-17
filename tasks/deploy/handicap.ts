import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Handicap__factory } from "../../src/types/factories/contracts/custom/Handicap__factory";

task("deploy:Handicap").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const HandicapFactory: Handicap__factory = <Handicap__factory>await ethers.getContractFactory("Handicap");
  const contractFactory = await upgrades.deployProxy(HandicapFactory, []);
  console.log("Handicap deployed to: ", contractFactory.address);
});

task("upgrade:Handicap")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const HandicapFactory: Handicap__factory = <Handicap__factory>await ethers.getContractFactory("Handicap");
    await upgrades.upgradeProxy(taskArguments.address, HandicapFactory);
  });
