import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { OverUnder__factory } from "../../src/types/factories/contracts/custom/OverUnder__factory";

task("deploy:OverUnder").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const OverUnderFactory: OverUnder__factory = <OverUnder__factory>await ethers.getContractFactory("OverUnder");
  const contractFactory = await upgrades.deployProxy(OverUnderFactory, []);
  console.log("OverUnder deployed to: ", contractFactory.address);
});

task("upgrade:OverUnder")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const OverUnderFactory: OverUnder__factory = <OverUnder__factory>await ethers.getContractFactory("OverUnder"); // 0x0CE4809548ADc080F203da3F4AF56fBAdDE8Ae00
    await upgrades.upgradeProxy(taskArguments.address, OverUnderFactory);
  });
