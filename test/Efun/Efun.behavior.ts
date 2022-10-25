import { expect } from "chai";
import web3 from "web3";

import { currentBlockTime, duration, increase } from "../utils/time";

const { toWei, fromWei } = web3.utils;

export function shouldBehaveLikeEvent(): void {
  it("can calculate sponsor", async function () {
    await this.erc20Token.connect(this.signers.admin).transfer(this.signers.user2.address, toWei("100"));
    await this.erc20Token.connect(this.signers.user2).approve(this.prediction.address, toWei("100"));
    await this.prediction.connect(this.signers.user2).predict(0, [0], [this.erc20Token.address], [toWei("20")]);
    await this.prediction.estimateRewardSponsor(
      0,
      this.signers.user2.address,
      "0x6ed2902b07eebae47fe738eeda1018fd9acdf953",
      0,
    );
    console.log(
      await this.groupPredict.calculateRewardSponsor(
        this.event.address,
        0,
        "4000000000000000000000",
        [0, 0, "2000000000000000000000", 0, 0],
        {
          predictionAmount: "2000000000000000000000",
          predictOptions: 2,
          claimed: false,
        },
        10000,
        "1000000000000000000000",
      ),
    );
  });

  it("can predict group predict event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(0, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(0, [0], ["0x0000000000000000000000000000000000000000"], [toWei("20")], { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(0, [0], ["0x0000000000000000000000000000000000000000"], [toWei("10")], { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, [1], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
    console.log(
      Math.round(
        Number(
          fromWei((await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000")).toString()),
        ),
      ),
      "contract",
    );

    await increase(duration.days(10));
    console.log("----------------------------------------------------------------------------------");

    await this.event.connect(this.signers.admin).updateEventResult(0, 0);
    await increase(duration.days(2));

    await this.prediction.connect(this.signers.user2).claimReward(0, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(0, "0x0000000000000000000000000000000000000000", 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(0, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("no-reward");

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    await this.prediction.connect(this.signers.admin).claimHostFee([0], "0x0000000000000000000000000000000000000000");
    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
  });

  it("can predict multiple choices event", async function () {
    await increase(duration.seconds(50));
    console.log(
      Math.round(
        Number(
          fromWei(
            (
              await this.prediction
                .connect(this.signers.user1)
                .getPotentialReward(1, "0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d", 0, toWei("2"))
            ).toString(),
          ),
        ),
      ),
      "potential 1",
    );

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(1, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(1, [0], ["0x0000000000000000000000000000000000000000"], [toWei("20.1")], { value: toWei("20.1") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(1, [0], ["0x0000000000000000000000000000000000000000"], [toWei("10.05")], { value: toWei("10.05") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(1, [1], ["0x0000000000000000000000000000000000000000"], [toWei("30.15")], {
        value: toWei("30.15"),
      });

    console.log(
      Math.round(
        Number(
          fromWei(
            (
              await this.prediction
                .connect(this.signers.user1)
                .getPotentialReward(1, "0x8e2a402b5debc184eb4c3f659ccc29a3b5d8f24d", 0, toWei("2"))
            ).toString(),
          ),
        ),
      ),
      "potential",
    );

    await expect(
      this.prediction.connect(this.signers.admin).claimRemainingLP(1, ["0x0000000000000000000000000000000000000000"]),
    ).to.be.revertedWith("event-not-finish");

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
    console.log(
      Math.round(
        Number(
          fromWei((await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000")).toString()),
        ),
      ),
      "contract",
    );

    await increase(duration.days(10));
    console.log("----------------------------------------------------------------------------------");

    await this.event.connect(this.signers.admin).updateEventResult(1, 0);
    await increase(duration.days(2));
    await expect(
      this.prediction.connect(this.signers.user1).claimRemainingLP(1, ["0x0000000000000000000000000000000000000000"]),
    ).to.be.revertedWith("unauthorized");
    console.log(
      fromWei(
        (
          await this.prediction
            .connect(this.signers.admin)
            .getRemainingLP(1, ["0x0000000000000000000000000000000000000000"])
        )[0].toString(),
      ),
      "zxcvoiu",
    );
    await this.prediction
      .connect(this.signers.admin)
      .claimRemainingLP(1, ["0x0000000000000000000000000000000000000000"]);

    await this.prediction.connect(this.signers.user2).claimReward(1, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(1, "0x0000000000000000000000000000000000000000", 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(1, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("no-reward");

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
  });

  it("can predict handicap event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(2, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(2, [0], ["0x0000000000000000000000000000000000000000"], [toWei("20.1")], {
        value: toWei("20.1"),
      });

    await this.prediction
      .connect(this.signers.user3)
      .predict(2, [0], ["0x0000000000000000000000000000000000000000"], [toWei("10.05")], {
        value: toWei("10.05"),
      });

    await this.prediction
      .connect(this.signers.user1)
      .predict(2, [4], ["0x0000000000000000000000000000000000000000"], [toWei("30.15")], {
        value: toWei("30.15"),
      });
    console.log(
      await this.prediction
        .connect(this.signers.user1)
        .estimateReward(2, this.signers.user1.address, "0x0000000000000000000000000000000000000000", 0, false),
      "estimetaoxicvu",
    );

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
    console.log(
      Math.round(
        Number(
          fromWei((await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000")).toString()),
        ),
      ),
      "contract",
    );

    await increase(duration.days(10));
    console.log("----------------------------------------------------------------------------------");

    await this.event.connect(this.signers.admin).updateEventResult(2, 0);
    await increase(duration.days(2));

    await this.prediction.connect(this.signers.user2).claimReward(2, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(2, "0x0000000000000000000000000000000000000000", 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(2, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("no-reward");

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
  });

  it("can predict over under event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(3, ["0x0000000000000000000000000000000000000000"], [toWei("3000")], { value: toWei("3000") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(3, [3], ["0x0000000000000000000000000000000000000000"], [toWei("20.1")], { value: toWei("20.1") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(3, [5], ["0x0000000000000000000000000000000000000000"], [toWei("10.05")], { value: toWei("10.05") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(3, [2], ["0x0000000000000000000000000000000000000000"], [toWei("30.15")], {
        value: toWei("30.15"),
      });

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
    console.log(
      Math.round(
        Number(
          fromWei((await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000")).toString()),
        ),
      ),
      "contract",
    );

    await increase(duration.days(10));
    console.log("----------------------------------------------------------------------------------");

    await this.event.connect(this.signers.admin).updateEventResult(3, [5]);
    await increase(duration.days(2));

    await this.prediction.connect(this.signers.user2).claimReward(3, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(3, "0x0000000000000000000000000000000000000000", 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(3, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("no-reward");

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
  });

  it("error cannot-find-index", async function () {
    await increase(duration.seconds(50));

    await expect(
      this.prediction
        .connect(this.signers.user1)
        .predict(0, [5], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
          value: toWei("30"),
        }),
    ).to.be.revertedWith("cannot-find-index");

    await expect(this.event.connect(this.signers.admin).updateEventResult(0, 0), "cannot-find-index");
    await increase(duration.days(2));
  });

  it("one user can predict multiple times", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, [1], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, [1], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    await expect(this.event.connect(this.signers.admin).updateEventResult(0, 5), "cannot-find-index");
    await increase(duration.days(2));
  });

  it("test false vent", async function () {
    await increase(duration.seconds(50));

    await expect(
      this.event
        .connect(this.signers.user1)
        .createSingleEvent(
          [1653907007, 1653914187, 1653914187, 0, 0],
          [
            "0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208",
            "0x0000000000000000000000000000000000000000",
            this.signers.user1.address,
          ],
          [10000, 10000],
          "",
          false,
        ),
    ).to.be.revertedWith("end_time > deadline_time");
  });

  it("test max payout", async function () {
    await increase(duration.seconds(50));

    console.log(
      (
        await this.prediction
          .connect(this.signers.user2)
          .getMaxPayout(1, "0x0000000000000000000000000000000000000000", 1)
      ).toNumber(),
    );
    console.log(
      await this.prediction
        .connect(this.signers.user2)
        .getMaxPayoutBatch([1], ["0x0000000000000000000000000000000000000000"], [1]),
    );

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(1, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    console.log(
      fromWei(
        (
          await this.prediction
            .connect(this.signers.user2)
            .getMaxPayout(1, "0x0000000000000000000000000000000000000000", 1)
        )
          .mul(27)
          .div(100)
          .toString(),
      ),
    );
  });

  it("test max payout2", async function () {
    await increase(duration.seconds(50));

    console.log(
      (
        await this.prediction
          .connect(this.signers.user2)
          .getMaxPayout(2, "0x0000000000000000000000000000000000000000", 0)
      ).toNumber(),
    );

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(2, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(2, [0], ["0x0000000000000000000000000000000000000000"], [toWei("20.1")], {
        value: toWei("20.1"),
      });
    await this.prediction
      .connect(this.signers.user2)
      .predict(2, [4], ["0x0000000000000000000000000000000000000000"], [toWei("30.15")], {
        value: toWei("30.15"),
      });
    const maxPay = fromWei(
      (
        await this.prediction
          .connect(this.signers.user2)
          .getMaxPayout(2, "0x0000000000000000000000000000000000000000", 0)
      ).toString(),
    );
    console.log(maxPay);
    await expect(
      this.prediction
        .connect(this.signers.user1)
        .predict(
          2,
          [0],
          ["0x0000000000000000000000000000000000000000"],
          [toWei(((Number(maxPay) * 1005) / 1000 + 1).toString())],
          {
            value: toWei(((Number(maxPay) * 1005) / 1000 + 1).toString()),
          },
        ),
    ).to.be.revertedWith("not-enough-liquidity");
    await this.prediction
      .connect(this.signers.user1)
      .predict(
        2,
        [0],
        ["0x0000000000000000000000000000000000000000"],
        [toWei(((Number(maxPay) * 1005) / 1000).toString())],
        {
          value: toWei(((Number(maxPay) * 1005) / 1000).toString()),
        },
      );
  });

  it("test cashback", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.user2)
      .predict(0, [0], ["0x0000000000000000000000000000000000000000"], [toWei("20")], { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(0, [0], ["0x0000000000000000000000000000000000000000"], [toWei("10")], { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, [1], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
    console.log(
      Math.round(
        Number(
          fromWei((await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000")).toString()),
        ),
      ),
      "contract",
    );

    await increase(duration.days(10));
    console.log("----------------------------------------------------------------------------------");

    await expect(
      this.prediction.connect(this.signers.user1).claimCashBack(0, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("event-not-finish");

    await increase(duration.days(10));

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(0, "0x0000000000000000000000000000000000000000", 0),
    ).to.be.revertedWith("not-finish");

    await this.prediction.connect(this.signers.user1).claimCashBack(0, "0x0000000000000000000000000000000000000000", 0),
      await this.prediction
        .connect(this.signers.user2)
        .claimCashBack(0, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimCashBack(0, "0x0000000000000000000000000000000000000000", 0);

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
  });

  it("claim remain lp group predict", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(0, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(0, [1], ["0x0000000000000000000000000000000000000000"], [toWei("20")], { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(0, [1], ["0x0000000000000000000000000000000000000000"], [toWei("10")], { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, [1], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
    console.log(
      Math.round(
        Number(
          fromWei((await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000")).toString()),
        ),
      ),
      "contract",
    );

    await increase(duration.days(10));
    console.log("----------------------------------------------------------------------------------");

    await this.event.connect(this.signers.admin).updateEventResult(0, 0);
    await increase(duration.days(2));

    await this.prediction
      .connect(this.signers.admin)
      .claimRemainingLP(0, ["0x0000000000000000000000000000000000000000"]);

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
  });

  it("can predict handicap group predict event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP(4, ["0x0000000000000000000000000000000000000000"], [toWei("100")], { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(4, [0], ["0x0000000000000000000000000000000000000000"], [toWei("20")], {
        value: toWei("20"),
      });

    await this.prediction
      .connect(this.signers.user3)
      .predict(4, [0], ["0x0000000000000000000000000000000000000000"], [toWei("10")], {
        value: toWei("10"),
      });

    await this.prediction
      .connect(this.signers.user1)
      .predict(4, [4], ["0x0000000000000000000000000000000000000000"], [toWei("30")], {
        value: toWei("30"),
      });

    console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
    console.log(
      Math.round(
        Number(
          fromWei((await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000")).toString()),
        ),
      ),
      "contract",
    );

    await increase(duration.days(10));
    console.log("----------------------------------------------------------------------------------");

    await this.event.connect(this.signers.admin).updateEventResult(4, 1);
    await increase(duration.days(2));

    await this.prediction.connect(this.signers.user2).claimReward(4, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user3).claimReward(4, "0x0000000000000000000000000000000000000000", 0);

    await this.prediction.connect(this.signers.user1).claimReward(4, "0x0000000000000000000000000000000000000000", 0),
      console.log(Math.round(Number(fromWei((await this.signers.admin.getBalance()).toString()))), "admin");
    console.log(Math.round(Number(fromWei((await this.signers.user1.getBalance()).toString()))), "user1");
    console.log(Math.round(Number(fromWei((await this.signers.user2.getBalance()).toString()))), "user2");
    console.log(Math.round(Number(fromWei((await this.signers.user3.getBalance()).toString()))), "user3");
  });

  it("pro event", async function () {
    const timestamp = await currentBlockTime();
    await this.event
      .connect(this.signers.admin)
      .createSingleEvent(
        [timestamp, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 1, 0],
        [
          "0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208",
          "0x0000000000000000000000000000000000000000",
          this.signers.user1.address,
        ],
        [10000, 10000],
        "",
        false,
      );
    await this.event
      .connect(this.signers.admin)
      .createSingleEvent(
        [timestamp, timestamp + 7 * 24 * 3600, timestamp + 10 * 24 * 3600, 2, 0],
        [
          "0x3c1f84dEEF00F0EE6DDEcDe585A4e2dA7C234208",
          "0x0000000000000000000000000000000000000000",
          this.signers.user1.address,
        ],
        [10000, 10000],
        "",
        false,
      );
    await increase(duration.days(10));
    const { performData } = await this.event.checkUpkeep("0x");
    console.log(Buffer.from(performData.substring(2), "hex").toString(), "xocvu");
    await this.event.performUpkeep(performData);
    await this.event.fulfill("0xcbbb7bb0eff415755e5445d4220320eb759a30c4302506ede096035842a7c724", "5,0,6,0,");
  });

  it("buy/sell elp", async function () {
    await this.erc20Token.connect(this.signers.admin).transfer(this.signers.user1.address, toWei("1000000"));
    console.log(await this.elpToken.currentNav(), "Nav");
    console.log((await this.elpToken.balanceOf(this.signers.user1.address)).toString(), "Elp Balance user1");
    console.log((await this.erc20Token.balanceOf(this.signers.user1.address)).toString(), "Erc20 Balance user1");
    await this.erc20Token.connect(this.signers.user1).approve(this.elpToken.address, toWei("100000"));
    await this.elpToken.connect(this.signers.user1).buyToken(toWei("100"));
    console.log("----------------------------------------------------------------------------------");

    console.log((await this.elpToken.balanceOf(this.signers.user1.address)).toString(), "Elp Balance user1");
    console.log((await this.erc20Token.balanceOf(this.signers.user1.address)).toString(), "Erc20 Balance user1");
    await this.elpToken.connect(this.signers.admin).performUpkeep("0x");
    console.log((await this.elpToken.maxSellAmount()).toString(), "Max sell amount");
    await this.elpToken.connect(this.signers.user1).sellToken(toWei("11"));
    console.log("----------------------------------------------------------------------------------");

    console.log((await this.elpToken.balanceOf(this.signers.user1.address)).toString(), "Elp Balance user1");
    console.log((await this.erc20Token.balanceOf(this.signers.user1.address)).toString(), "Erc20 Balance user1");
  });

  it("buy/sell nft", async function () {
    await this.erc20Token.connect(this.signers.admin).transfer(this.signers.user1.address, toWei("1000000"));
    console.log(await this.elpToken.currentNav(), "Nav");
    console.log((await this.elpToken.balanceOf(this.signers.user1.address)).toString(), "Elp Balance user1");
    console.log((await this.erc20Token.balanceOf(this.signers.user1.address)).toString(), "Erc20 Balance user1");
    await this.erc20Token.connect(this.signers.user1).approve(this.elpToken.address, toWei("100000000"));
    await this.erc20Token.connect(this.signers.admin).approve(this.elpToken.address, toWei("9000000000"));
    await this.elpToken.connect(this.signers.admin).buyToken(toWei("90000"));
    const tokenId = await this.elpToken.connect(this.signers.user1).buyNFT(0, 1);
    console.log("----------------------------------------------------------------------------------");

    console.log((await this.elpToken.balanceOf(this.signers.user1.address)).toString(), "Elp Balance user1");
    console.log((await this.erc20Token.balanceOf(this.signers.user1.address)).toString(), "Erc20 Balance user1");
    await this.elpToken.connect(this.signers.admin).performUpkeep("0x");
    console.log((await this.elpToken.maxSellAmount()).toString(), "Max sell amount");
    console.log(tokenId.value, "Line #686 Efun.behavior.ts");
    await this.elpToken.connect(this.signers.user1).sellNft([1]);
    console.log("----------------------------------------------------------------------------------");

    console.log((await this.elpToken.balanceOf(this.signers.user1.address)).toString(), "Elp Balance user1");
    console.log((await this.erc20Token.balanceOf(this.signers.user1.address)).toString(), "Erc20 Balance user1");
  });

  it("affiliate", async function () {
    await this.erc20Token.connect(this.signers.admin).transfer(this.signers.user1.address, toWei("1000000"));
    await this.erc20Token.connect(this.signers.admin).transfer(this.signers.user2.address, toWei("1000000"));
    await this.erc20Token.connect(this.signers.admin).transfer(this.signers.user3.address, toWei("1000000"));
    await this.erc20Token.connect(this.signers.user1).approve(this.prediction.address, toWei("10000000000000"));
    await this.erc20Token.connect(this.signers.user2).approve(this.prediction.address, toWei("10000000000000"));
    await this.erc20Token.connect(this.signers.user3).approve(this.prediction.address, toWei("10000000000000"));

    await increase(duration.seconds(50));
    await this.prediction.connect(this.signers.user2).predict(5, [0], [this.erc20Token.address], [toWei("20.1")]);

    await this.prediction.connect(this.signers.user3).predict(5, [0], [this.erc20Token.address], [toWei("10.05")]);

    await this.prediction.connect(this.signers.user1).predict(5, [1], [this.erc20Token.address], [toWei("30.15")]);

    console.log(
      Math.round(Number(fromWei((await this.erc20Token.balanceOf(this.signers.user1.address)).toString()))),
      "user1",
    );
    console.log(
      Math.round(Number(fromWei((await this.erc20Token.balanceOf(this.signers.user2.address)).toString()))),
      "user2",
    );
    console.log(
      Math.round(Number(fromWei((await this.erc20Token.balanceOf(this.signers.user3.address)).toString()))),
      "user3",
    );
    console.log(
      Math.round(Number(fromWei((await this.erc20Token.balanceOf(this.comPool.address)).toString()))),
      "pool",
    );

    await increase(duration.days(10));
    console.log("----------------------------------------------------------------------------------");

    await this.event.connect(this.signers.admin).updateEventResult(5, 0);
    await increase(duration.days(2));
    await this.prediction.connect(this.signers.user2).claimReward(5, this.erc20Token.address, 0);

    await this.prediction.connect(this.signers.user3).claimReward(5, this.erc20Token.address, 0);

    await expect(
      this.prediction.connect(this.signers.user1).claimReward(5, this.erc20Token.address, 0),
    ).to.be.revertedWith("no-reward");

    console.log(
      Math.round(Number(fromWei((await this.erc20Token.balanceOf(this.signers.user1.address)).toString()))),
      "user1",
    );
    console.log(
      Math.round(Number(fromWei((await this.erc20Token.balanceOf(this.signers.user2.address)).toString()))),
      "user2",
    );
    console.log(
      Math.round(Number(fromWei((await this.erc20Token.balanceOf(this.signers.user3.address)).toString()))),
      "user3",
    );
    console.log(
      Math.round(Number(fromWei((await this.erc20Token.balanceOf(this.comPool.address)).toString()))),
      "pool",
    );
  });
}
