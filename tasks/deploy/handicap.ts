import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Handicap__factory } from "../../src/types/factories/contracts/custom/Handicap__factory";

task("deploy:Handicap").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const HandicapFactory: Handicap__factory = <Handicap__factory>await ethers.getContractFactory("Handicap");
  const contractFactory = await upgrades.deployProxy(HandicapFactory, []);
  const currentImplAddress = await getImplementationAddress(ethers.provider, contractFactory.address);
  console.log("Handicap deployed to: ", contractFactory.address);
  console.log("Implementation address: ", currentImplAddress);
});

task("upgrade:Handicap")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const HandicapFactory: Handicap__factory = <Handicap__factory>await ethers.getContractFactory("Handicap");
    const contractFactory = await upgrades.upgradeProxy(taskArguments.address, HandicapFactory);
    const currentImplAddress = await getImplementationAddress(ethers.provider, contractFactory.address); // 0xd4cf937089DAc1FA149B8cc87Daa04fC920B0C90
    console.log("Handicap upgraded to: ", contractFactory.address);
    console.log("Implementation address: ", currentImplAddress);
  });
