import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { Event } from "../../src/types/contracts/Event";
import type { Prediction } from "../../src/types/contracts/Prediction";
import type { GroupPredict } from "../../src/types/contracts/custom/GroupPredict";
import { Handicap } from "../../src/types/contracts/custom/Handicap";
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
      const handicapArtifact: Artifact = await artifacts.readArtifact("Handicap");

      this.event = <Event>await waffle.deployContract(this.signers.admin, eventArtifact, []);
      this.prediction = <Prediction>await waffle.deployContract(this.signers.admin, predictionArtifact, []);
      this.groupPredict = <GroupPredict>await waffle.deployContract(this.signers.admin, groupPredictArtifact, []);
      this.multipleChoices = <MultipleChoices>(
        await waffle.deployContract(this.signers.admin, multipleChoicesArtifact, [])
      );
      this.handicap = <Handicap>await waffle.deployContract(this.signers.admin, handicapArtifact, []);

      await this.event.initialize();
      await this.prediction.initialize(100, 10000);
      await this.prediction.connect(this.signers.admin).setEventData(this.event.address);

      const { timestamp } = await ethers.provider.getBlock("latest");

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          0,
          timestamp + 20,
          timestamp + 7 * 24 * 3600,
          timestamp + 10 * 24 * 3600,
          this.groupPredict.address,
          "0x0000000000000000000000000000000000000000",
          0,
          {
            data: ["Liverpool", "Manchester City", "Manchester United", "Chelsea"],
            odds: [0, 0, 0, 0],
          },
        );

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          1,
          timestamp + 20,
          timestamp + 7 * 24 * 3600,
          timestamp + 10 * 24 * 3600,
          this.multipleChoices.address,
          "0x0000000000000000000000000000000000000000",
          0,
          {
            data: ["Liverpool", "Manchester City", "Manchester United", "Chelsea"],
            odds: [23000, 12700, 47600, 35600],
          },
        );

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          2,
          timestamp + 20,
          timestamp + 7 * 24 * 3600,
          timestamp + 10 * 24 * 3600,
          this.handicap.address,
          "0x0000000000000000000000000000000000000000",
          0,
          {
            data: ["Win - Lose", "Half Win - Half Lose", "Draw - Draw", "Half Lose - Half Win", "Lose - Win"],
            odds: [23000, 23000, 10000, 13000, 13000],
          },
        );
    });

    shouldBehaveLikeEvent();
  });
});
