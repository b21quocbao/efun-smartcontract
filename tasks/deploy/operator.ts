import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Operator__factory } from "../../src/types/factories/@chainlink/contracts/src/v0.7/Operator__factory";

task("deploy:Operator")
  .addParam("linkToken", "Link Token")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const OperatorFactory: Operator__factory = <Operator__factory>await ethers.getContractFactory("Operator");
    const [deployer] = await ethers.getSigners();
    console.log(deployer.address, "Line #9 operator.ts");

    const contractFactory = await OperatorFactory.deploy(taskArguments.linkToken, deployer.address);
    console.log("Operator deployed to: ", contractFactory.address);
  });
