import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { MultipleChoices__factory } from "../../src/types/factories/contracts/custom/MultipleChoices__factory";

task("deploy:MultipleChoices").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const MultipleChoicesFactory: MultipleChoices__factory = <MultipleChoices__factory>(
    await ethers.getContractFactory("MultipleChoices")
  );
  const contractFactory = await upgrades.deployProxy(MultipleChoicesFactory, []);
  console.log("MultipleChoices deployed to: ", contractFactory.address);
});

task("upgrade:MultipleChoices")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const MultipleChoicesFactory: MultipleChoices__factory = <MultipleChoices__factory>(
      await ethers.getContractFactory("MultipleChoices")
    );
    await upgrades.upgradeProxy(taskArguments.address, MultipleChoicesFactory);
  });
