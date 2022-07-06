import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { exec } from "child_process";
import { task } from "hardhat/config";
import util from "util";

const execAsync = util.promisify(exec);

task("verify:address").setAction(async function (_taskArgs, hre) {
  const { ethers } = hre;
  const addresses = [
    "0x88160ce0d8C300286FC7BB724f820C176f4030ca",
    "0xD023E170E5Be8fa0167cb6a2EAFb9B0365bAe398",
    "0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208",
    "0xd4cf937089DAc1FA149B8cc87Daa04fC920B0C90",
    "0x77380fEcA9C1AFE1b6d1Bb077FbD637EE1bC921e",
    "0x0CE4809548ADc080F203da3F4AF56fBAdDE8Ae00",
    "0xF212e709550EAcf106E7Ad8823eA65C154c86113",
  ];

  await Promise.all(
    addresses.map(async address => {
      const currentImplAddress = await getImplementationAddress(ethers.provider, address);
      console.log(currentImplAddress, "Line #18 verify.ts");

      console.log(
        await execAsync("yarn hardhat verify --network bscTestnet " + currentImplAddress).catch(err => {
          console.log(err, "Line #23 verify.ts");
        }),
        "Line #24 verify.ts",
      );
    }),
  );
});

task("verify:single:address")
  .addParam("address", "Contract address")
  .setAction(async function (_taskArgs, hre) {
    const { ethers } = hre;
    const currentImplAddress = await getImplementationAddress(ethers.provider, _taskArgs.address);
    console.log(currentImplAddress, "Line #18 verify.ts");

    console.log(
      await execAsync("yarn hardhat verify --network bscTestnet " + currentImplAddress).catch(err => {
        console.log(err, "Line #23 verify.ts");
      }),
      "Line #24 verify.ts",
    );
  });
