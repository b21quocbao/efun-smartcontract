import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { exec } from "child_process";
import { task } from "hardhat/config";
import util from "util";

const execAsync = util.promisify(exec);

task("verify:address").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const addresses = [
    "0x43624c41450D76A8711c257969a67Fa7E6EdB6EB",
    "0xD51ED95e4f82bd4377B916b5D642f8F0e6B814DA",
    "0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208",
    "0xd4cf937089DAc1FA149B8cc87Daa04fC920B0C90",
    "0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e",
  ];

  for (const address of addresses) {
    const currentImplAddress = await getImplementationAddress(ethers.provider, address);
    console.log(currentImplAddress, "Line #18 verify.ts");

    console.log(
      await execAsync("yarn hardhat verify --network bscTestnet " + currentImplAddress).catch(err => {
        console.log(err, "Line #23 verify.ts");
      }),
      "Line #24 verify.ts",
    );
  }
});
