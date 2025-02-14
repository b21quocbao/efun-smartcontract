import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import web3 from "web3";

import { ComPool, ELPToken, ERC721Token } from "../../src/types";
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
    this.signers.feeCollector = signers[4];
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
      const comPoolArtifact: Artifact = await artifacts.readArtifact("ComPool");
      const elpTokenArtifact: Artifact = await artifacts.readArtifact("ELPToken");
      const erc721TokenArtifact: Artifact = await artifacts.readArtifact("ERC721Token");

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
        await waffle.deployContract(this.signers.admin, erc20TokenArtifact, ["EFUN", "EFUN", toWei("100000000")])
      );
      this.linkToken = <LinkToken>await waffle.deployContract(this.signers.admin, linkTokenArtifact, []);
      this.operator = <Operator>(
        await waffle.deployContract(this.signers.admin, operatorArtifact, [
          this.linkToken.address,
          this.signers.admin.address,
        ])
      );
      this.comPool = <ComPool>await waffle.deployContract(this.signers.admin, comPoolArtifact, []);
      this.elpToken = <ELPToken>await waffle.deployContract(this.signers.admin, elpTokenArtifact, []);
      this.erc721Token = <ERC721Token>await waffle.deployContract(this.signers.admin, erc721TokenArtifact, [
        "EFUN NFT",
        "EFT",
        this.signers.admin.address, // ZeroEX address
        this.elpToken.address,
      ]);

      await this.event.initialize();
      await this.event.setOracle(
        this.linkToken.address,
        this.operator.address,
        "0xe4c45e0420104e1ca472a14ce6a445af00000000000000000000000000000000",
      );
      await this.prediction.initialize(100, 10000, toWei("2000"));
      await this.prediction.connect(this.signers.admin).setEventData(this.event.address);
      await this.prediction.connect(this.signers.admin).setEfunToken(this.erc20Token.address);
      await this.prediction.connect(this.signers.admin).setFeeCollector(this.signers.admin.address);
      await this.erc20Token.connect(this.signers.admin).approve(this.prediction.address, toWei("1000000"));

      const { timestamp } = await ethers.provider.getBlock("latest");

      await this.prediction
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 0, 5],
          [
            this.groupPredict.address,
            "0x0000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000",
          ],
          [0, 0, 0, 0],
          "",
          [this.erc20Token.address, "0x0000000000000000000000000000000000000000"],
          [toWei("10"), toWei("10")],
          false,
          0,
          { value: toWei("10") },
        );

      await this.prediction
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 0, 0],
          [
            this.multipleChoices.address,
            "0x0000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000",
          ],
          [23000, 12700, 47600, 35600],
          "",
          [],
          [],
          false,
          0,
        );

      await this.prediction
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 0, 0],
          [
            this.handicap.address,
            "0x0000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000",
          ],
          [12000, 12000, 10000, 20000, 20000],
          "",
          [],
          [],
          false,
          0,
        );

      await this.prediction
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 0, 0],
          [
            this.overUnder.address,
            "0x0000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000",
          ],
          [30 * 10000, 1.01 * 10000, 8 * 10000, 1.1 * 10000, 3.65 * 10000, 1.3 * 10000, 2.1 * 10000, 1.76 * 10000],
          "",
          [],
          [],
          false,
          0,
        );

      await this.prediction
        .connect(this.signers.admin)
        .createSingleEvent(
          [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 0, 0],
          [
            this.handicapGroupPredict.address,
            "0x0000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000",
          ],
          [12000, 12000, 10000, 20000, 20000],
          "",
          [],
          [],
          false,
          0,
        );

      await this.prediction.connect(this.signers.admin).createSingleEvent(
        [timestamp + 20, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 0, 0],
        [
          this.multipleChoices.address,
          "0x0000000000000000000000000000000000000000",
          "0x0000000000000000000000000000000000000000",
        ],
        [23000, 12700, 47600, 35600],
        "",
        [],
        [],
        true, // affiliate
        0,
      );

      // Community Pool & ELP & NFT
      await this.comPool.initialize(10000, this.erc20Token.address);
      await this.elpToken.initialize(
        "ELPToken",
        "ELP",
        this.comPool.address,
        this.erc20Token.address,
        this.signers.admin.address,
        this.signers.feeCollector.address,
        toWei("1000"),
        10000,
        this.erc721Token.address,
      );
      await this.comPool.connect(this.signers.admin).approve(this.elpToken.address);
      await this.comPool.connect(this.signers.admin).approve(this.prediction.address);
      await this.erc20Token.connect(this.signers.admin).approve(this.comPool.address, toWei("1000000"));
      await this.comPool.connect(this.signers.admin).deposit(toWei("1000000"));
      await this.prediction
        .connect(this.signers.admin)
        .setLiquidityPoolAddress(this.erc20Token.address, this.comPool.address);
      await this.erc721Token.connect(this.signers.admin).setAdmin(this.signers.admin.address);
      await this.erc721Token.connect(this.signers.admin).whitelistUser([this.signers.user1.address]);
      await this.erc721Token.connect(this.signers.admin).setTime(timestamp, timestamp + 2 * 3600);
    });

    shouldBehaveLikeEvent();
  });
});
