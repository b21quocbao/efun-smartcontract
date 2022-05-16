import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { MultipleChoices__factory } from "../../src/types/factories/contracts/custom/MultipleChoices__factory";

task("deploy:MultipleChoices").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const MultipleChoicesFactory: MultipleChoices__factory = <MultipleChoices__factory>(
    await ethers.getContractFactory("MultipleChoices")
  );
  const contractFactory = await upgrades.deployProxy(MultipleChoicesFactory, []);
  const currentImplAddress = await getImplementationAddress(ethers.provider, contractFactory.address);
  console.log("MultipleChoices deployed to: ", contractFactory.address);
  console.log("Implementation address: ", currentImplAddress);
});

task("upgrade:MultipleChoices")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const MultipleChoicesFactory: MultipleChoices__factory = <MultipleChoices__factory>(
      await ethers.getContractFactory("MultipleChoices")
    );
    const contractFactory = await upgrades.upgradeProxy(taskArguments.address, MultipleChoicesFactory);
    const currentImplAddress = await getImplementationAddress(ethers.provider, contractFactory.address); // 0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e
    console.log("MultipleChoices upgraded to: ", contractFactory.address);
    console.log("Implementation address: ", currentImplAddress);
  });
