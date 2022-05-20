import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { Event } from "../src/types/contracts/Event";
import type { Prediction } from "../src/types/contracts/Prediction";
import type { GroupPredict } from "../src/types/contracts/custom/GroupPredict";
import type { Handicap } from "../src/types/contracts/custom/Handicap";
import type { MultipleChoices } from "../src/types/contracts/custom/MultipleChoices";
import type { OverUnder } from "../src/types/contracts/custom/OverUnder";

declare module "mocha" {
  export interface Context {
    event: Event;
    prediction: Prediction;
    overUnder: OverUnder;
    groupPredict: GroupPredict;
    multipleChoices: MultipleChoices;
    handicap: Handicap;
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
