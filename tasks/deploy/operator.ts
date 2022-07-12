import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Operator__factory } from "../../src/types/factories/@chainlink/contracts/src/v0.7/Operator__factory";

task("deploy:Operator").setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
  const OperatorFactory: Operator__factory = <Operator__factory>await ethers.getContractFactory("Operator");
  const [deployer] = await ethers.getSigners();
  console.log(deployer.address, "Line #9 operator.ts");

  const contractFactory = await OperatorFactory.deploy("0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06", deployer.address); // 0xAfA20e478fEE45f43a114eFBA0424d1a6aFBFD56
  console.log("Operator deployed to: ", contractFactory.address);
});
