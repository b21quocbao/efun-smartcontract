import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { Event } from "../../src/types/contracts/Event";
import type { Prediction } from "../../src/types/contracts/Prediction";
import type { GroupPredict } from "../../src/types/contracts/custom/GroupPredict";
import type { MultipleChoices } from "../../src/types/contracts/custom/MultipleChoices";
import { Signers } from "../types";
import { shouldBehaveLikeEvent } from "./Efun.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.signers.user1 = signers[1];
    this.signers.user2 = signers[2];
    this.signers.user3 = signers[3];
  });

  describe("Efun", function () {
    beforeEach(async function () {
      const eventArtifact: Artifact = await artifacts.readArtifact("Event");
      const predictionArtifact: Artifact = await artifacts.readArtifact("Prediction");
      const groupPredictArtifact: Artifact = await artifacts.readArtifact("GroupPredict");
      const multipleChoicesArtifact: Artifact = await artifacts.readArtifact("MultipleChoices");

      this.event = <Event>await waffle.deployContract(this.signers.admin, eventArtifact, []);
      this.prediction = <Prediction>await waffle.deployContract(this.signers.admin, predictionArtifact, []);
      this.groupPredict = <GroupPredict>await waffle.deployContract(this.signers.admin, groupPredictArtifact, []);
      this.multipleChoices = <MultipleChoices>(
        await waffle.deployContract(this.signers.admin, multipleChoicesArtifact, [])
      );

      await this.event.initialize();
      await this.prediction.initialize(100, 10000);
      await this.prediction.connect(this.signers.admin).setEventData(this.event.address);

      const { timestamp } = await ethers.provider.getBlock("latest");

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          "0x5b5b224c69766572706f6f6c222c20224d616e63686573746572204369747922",
          timestamp + 3,
          timestamp + 7 * 24 * 3600,
          timestamp + 10 * 24 * 3600,
          this.groupPredict.address,
          "ok",
          "0x0000000000000000000000000000000000000000",
          0,
          {
            data: ["Liverpool", "Manchester City", "Manchester United", "Chelsea"],
            odds: [100, 100, 100, 100],
          },
        );

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          "0x5b5b224c69766572706f6f6c222c20224d616e63686573746572204369747922",
          timestamp + 3,
          timestamp + 7 * 24 * 3600,
          timestamp + 10 * 24 * 3600,
          this.multipleChoices.address,
          "ok",
          "0x0000000000000000000000000000000000000000",
          0,
          {
            data: ["Liverpool", "Manchester City", "Manchester United", "Chelsea"],
            odds: [23000, 12700, 47600, 35600],
          },
        );
    });

    shouldBehaveLikeEvent();
  });
});
