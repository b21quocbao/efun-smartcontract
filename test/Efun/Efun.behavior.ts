import { expect } from "chai";
import { ethers } from "hardhat";
import web3 from "web3";

import { duration, increase } from "../utils/time";

const { toWei, fromWei } = web3.utils;

export function shouldBehaveLikeEvent(): void {
  it("can predict group predict event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.user2)
      .predict(0, ["Liverpool"], ["0x0000000000000000000000000000000000000000"], [toWei("20")], { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(0, ["Liverpool"], ["0x0000000000000000000000000000000000000000"], [toWei("10")], { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, ["Manchester City"], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");

    await increase(duration.days(10));

    await this.event.connect(this.signers.admin).updateEventResult(0, "Liverpool");

    await this.prediction.connect(this.signers.user2).claimReward(0, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(0, "0x0000000000000000000000000000000000000000", 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(0, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("no-reward");

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
  });

  it("can predict multiple choices event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(1, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(1, ["Liverpool"], ["0x0000000000000000000000000000000000000000"], [toWei("20")], { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(1, ["Liverpool"], ["0x0000000000000000000000000000000000000000"], [toWei("10")], { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(1, ["Manchester City"], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
    console.log(await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000"), "contract");

    await increase(duration.days(10));

    await this.event.connect(this.signers.admin).updateEventResult(1, "Liverpool");

    await this.prediction.connect(this.signers.user2).claimReward(1, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(1, "0x0000000000000000000000000000000000000000", 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(1, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("no-reward");

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
  });

  it("cant predict when not allow", async function () {
    await increase(duration.seconds(50));

    await expect(
      this.prediction
        .connect(this.signers.admin)
        .depositLP(
          1,
          ["0x0000000000000000000000000000000000000000", this.erc20Token.address],
          [toWei("100"), toWei("200")],
          { value: toWei("100") },
        ),
    ).to.be.revertedWith("ERC20: insufficient allowance");
  });

  it("can predict handicap event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(2, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(2, ["Win - Lose"], ["0x0000000000000000000000000000000000000000"], [toWei("20")], {
        value: toWei("20"),
      });

    await this.prediction
      .connect(this.signers.user3)
      .predict(2, ["Win - Lose"], ["0x0000000000000000000000000000000000000000"], [toWei("10")], {
        value: toWei("10"),
      });

    await this.prediction
      .connect(this.signers.user1)
      .predict(2, ["Lose - Win"], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
    console.log(await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000"), "contract");

    await increase(duration.days(10));

    await this.event.connect(this.signers.admin).updateEventResult(2, "Win - Lose");

    await this.prediction.connect(this.signers.user2).claimReward(2, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(2, "0x0000000000000000000000000000000000000000", 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(2, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("no-reward");

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
  });

  it("can predict over under event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(3, ["0x0000000000000000000000000000000000000000"], [toWei("3000")], { value: toWei("3000") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(3, [">1.5"], ["0x0000000000000000000000000000000000000000"], [toWei("20")], { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(3, [">2.5"], ["0x0000000000000000000000000000000000000000"], [toWei("10")], { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(3, ["<1.5"], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
    console.log(await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000"), "contract");

    await increase(duration.days(10));

    await this.event.connect(this.signers.admin).updateEventResult(3, ">2.5");

    await this.prediction.connect(this.signers.user2).claimReward(3, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(3, "0x0000000000000000000000000000000000000000", 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(3, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("no-reward");

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
  });

  it("error duplicate event", async function () {
    const { timestamp } = await ethers.provider.getBlock("latest");
    await expect(
      this.event.connect(this.signers.user1).createSingleEvent(
        0,
        timestamp + 20,
        timestamp + 7 * 24 * 3600,
        timestamp + 10 * 24 * 3600,
        this.groupPredict.address,
        {
          data: ["Liverpool", "Manchester City", "Manchester United", "Chelsea"],
          odds: [0, 0, 0, 0],
        },
        [
          "name",
          "thumbnailUrl",
          "bannerUrl",
          "0",
          "0",
          "0",
          "type",
          "marketType",
          "description",
          "metadata",
          "shortDescription",
          "streamUrl",
        ],
      ),
    ).to.be.revertedWith("already existed");
  });

  it("error cannot-find-index", async function () {
    await increase(duration.seconds(50));

    await expect(
      this.prediction
        .connect(this.signers.user1)
        .predict(0, ["Manchester City123"], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
          value: toWei("30"),
        }),
    ).to.be.revertedWith("cannot-find-index");

    await expect(this.event.connect(this.signers.admin).updateEventResult(0, "Manchester City123")).to.be.revertedWith(
      "cannot-find-index",
    );
  });

  it("one user can predict multiple times", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, ["Manchester City"], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, ["Manchester City"], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    await expect(this.event.connect(this.signers.admin).updateEventResult(0, "Manchester City123")).to.be.revertedWith(
      "cannot-find-index",
    );
  });

  it("test false vent", async function () {
    await increase(duration.seconds(50));

    await expect(
      this.event.connect(this.signers.user1).createSingleEvent(
        122,
        1653907007,
        1653914187,
        1653914187,
        "0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208",
        {
          data: ["1", "2"],
          odds: [10000, 10000],
        },
        [
          "name",
          "thumbnailUrl",
          "bannerUrl",
          "0",
          "0",
          "0",
          "type",
          "marketType",
          "description",
          "metadata",
          "shortDescription",
          "streamUrl",
        ],
      ),
    ).to.be.revertedWith("end_time > deadline_time");
  });

  it("test max payout", async function () {
    await increase(duration.seconds(50));

    console.log(
      (
        await this.prediction
          .connect(this.signers.user2)
          .getMaxPayout(1, "0x0000000000000000000000000000000000000000", 0)
      ).toNumber(),
    );

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(1, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    console.log(
      fromWei(
        (
          await this.prediction
            .connect(this.signers.user2)
            .getMaxPayout(1, "0x0000000000000000000000000000000000000000", 0)
        )
          .mul(130)
          .div(100)
          .toString(),
      ),
    );
  });
}
