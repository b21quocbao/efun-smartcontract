import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { HandicapGroupPredict__factory } from "../../src/types/factories/contracts/custom/HandicapGroupPredict__factory";

task("deploy:HandicapGroupPredict").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const HandicapGroupPredictFactory: HandicapGroupPredict__factory = <HandicapGroupPredict__factory>(
    await ethers.getContractFactory("HandicapGroupPredict")
  );
  const handicapHandicapGroupPredictFactory = await upgrades.deployProxy(HandicapGroupPredictFactory, []);
  console.log("HandicapGroupPredict deployed to: ", handicapHandicapGroupPredictFactory.address);
});

task("upgrade:HandicapGroupPredict")
  .addParam("address", "Contract address")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const HandicapGroupPredictFactory: HandicapGroupPredict__factory = <HandicapGroupPredict__factory>(
      await ethers.getContractFactory("HandicapGroupPredict")
    );
    await upgrades.upgradeProxy(taskArguments.address, HandicapGroupPredictFactory);
  });
