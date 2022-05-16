import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { Event } from "../src/types/contracts/Event";
import type { Prediction } from "../src/types/contracts/Prediction";
import type { GroupPredict } from "../src/types/contracts/custom/GroupPredict";
import type { MultipleChoices } from "../src/types/contracts/custom/MultipleChoices";

declare module "mocha" {
  export interface Context {
    event: Event;
    prediction: Prediction;
    groupPredict: GroupPredict;
    multipleChoices: MultipleChoices;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
  user1: SignerWithAddress;
  user2: SignerWithAddress;
  user3: SignerWithAddress;
}
