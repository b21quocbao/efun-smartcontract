import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import web3 from "web3";

import type { Operator } from "../../src/types/@chainlink/contracts/src/v0.7/Operator";
import type { ERC20Token } from "../../src/types/contracts/Erc20Token.sol/ERC20Token";
import type { Event } from "../../src/types/contracts/Event.sol/Event";
import type { LinkToken } from "../../src/types/contracts/LinkToken.sol/LinkToken";
import type { Prediction } from "../../src/types/contracts/Prediction";
import type { GroupPredict } from "../../src/types/contracts/custom/GroupPredict";
import type { Handicap } from "../../src/types/contracts/custom/Handicap";
import type { HandicapGroupPredict } from "../../src/types/contracts/custom/HandicapGroupPredict";
import type { MultipleChoices } from "../../src/types/contracts/custom/MultipleChoices";
import type { OverUnder } from "../../src/types/contracts/custom/OverUnder";
import { Signers } from "../types";
import { shouldBehaveLikeEvent } from "./Efun.behavior";

const { toWei } = web3.utils;

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
      const handicapGroupPredictArtifact: Artifact = await artifacts.readArtifact("HandicapGroupPredict");
      const multipleChoicesArtifact: Artifact = await artifacts.readArtifact("MultipleChoices");
      const handicapArtifact: Artifact = await artifacts.readArtifact("Handicap");
      const overUnderArtifact: Artifact = await artifacts.readArtifact("OverUnder");
      const erc20TokenArtifact: Artifact = await artifacts.readArtifact("ERC20Token");
      const linkTokenArtifact: Artifact = await artifacts.readArtifact("LinkToken");
      const operatorArtifact: Artifact = await artifacts.readArtifact("Operator");

      this.event = <Event>await waffle.deployContract(this.signers.admin, eventArtifact, []);
      this.prediction = <Prediction>await waffle.deployContract(this.signers.admin, predictionArtifact, []);
      this.groupPredict = <GroupPredict>await waffle.deployContract(this.signers.admin, groupPredictArtifact, []);
      this.handicapGroupPredict = <HandicapGroupPredict>(
        await waffle.deployContract(this.signers.admin, handicapGroupPredictArtifact, [])
      );
      this.multipleChoices = <MultipleChoices>(
        await waffle.deployContract(this.signers.admin, multipleChoicesArtifact, [])
      );
      this.handicap = <Handicap>await waffle.deployContract(this.signers.admin, handicapArtifact, []);
      this.overUnder = <OverUnder>await waffle.deployContract(this.signers.admin, overUnderArtifact, []);
      this.erc20Token = <ERC20Token>(
        await waffle.deployContract(this.signers.admin, erc20TokenArtifact, ["EFUN", "EFUN", toWei("100000")])
      );
      this.linkToken = <LinkToken>await waffle.deployContract(this.signers.admin, linkTokenArtifact, []);
      this.operator = <Operator>(
        await waffle.deployContract(this.signers.admin, operatorArtifact, [
          this.linkToken.address,
          this.signers.admin.address,
        ])
      );

      await this.event.initialize();
      await this.event.setOracle(
        this.linkToken.address,
        this.operator.address,
        "0xe4c45e0420104e1ca472a14ce6a445af00000000000000000000000000000000",
      );
      await this.prediction.initialize(100, 10000);
      await this.prediction.connect(this.signers.admin).setEventData(this.event.address);

      const { timestamp } = await ethers.provider.getBlock("latest");

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600],
          this.groupPredict.address,
          [0, 0, 0, 0],
          "",
          this.signers.admin.address,
          0,
          false,
        );

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600],
          this.multipleChoices.address,
          [23000, 12700, 47600, 35600],
          "",
          this.signers.admin.address,
          0,
          false,
        );

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600],
          this.handicap.address,
          [12000, 12000, 10000, 20000, 20000],
          "",
          this.signers.admin.address,
          0,
          false,
        );

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600],
          this.overUnder.address,
          [30 * 10000, 1.01 * 10000, 8 * 10000, 1.1 * 10000, 3.65 * 10000, 1.3 * 10000, 2.1 * 10000, 1.76 * 10000],
          "",
          this.signers.admin.address,
          0,
          false,
        );

      await this.event
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600],
          this.handicapGroupPredict.address,
          [12000, 12000, 10000, 20000, 20000],
          "",
          this.signers.admin.address,
          0,
          false,
        );
    });

    shouldBehaveLikeEvent();
  });
});
