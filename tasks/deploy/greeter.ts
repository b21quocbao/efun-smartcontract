import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import type { Greeter } from "../../src/types/contracts/Greeter";
import type { Greeter__factory } from "../../src/types/factories/contracts/Greeter__factory";

task("deploy:Greeter")
  .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers, upgrades }) {
    const GreeterFactory: Greeter__factory = <Greeter__factory>await ethers.getContractFactory("Greeter");
    const greeterFactory = await upgrades.upgradeProxy("0xab56928AAeB3f63f9Ed7e84dcd7Fdd7166E33d02", GreeterFactory);
    const currentImplAddress = await getImplementationAddress(ethers.provider, greeterFactory.address);
    console.log("Greeter upgraded to: ", currentImplAddress);
  });
