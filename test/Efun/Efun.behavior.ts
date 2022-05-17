import { expect } from "chai";
import web3 from "web3";

import { currentBlockTime, duration, increase, latest } from "../utils/time";

const { toWei, fromWei } = web3.utils;

export function shouldBehaveLikeEvent(): void {
  it("can predict group predict event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.user2)
      .predict(0, "Liverpool", "0x0000000000000000000000000000000000000000", 0, { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(0, "Liverpool", "0x0000000000000000000000000000000000000000", 0, { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(0, "Manchester City", "0x0000000000000000000000000000000000000000", 0, { value: toWei("30") });

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");

    await increase(duration.days(10));

    await this.event.connect(this.signers.admin).updateEventResult(0, "Liverpool");

    await this.prediction.connect(this.signers.user2).claimReward(0, "0x0000000000000000000000000000000000000000");

    await this.prediction.connect(this.signers.user3).claimReward(0, "0x0000000000000000000000000000000000000000");

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
  });

  it("can predict multiple choices event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP("0x0000000000000000000000000000000000000000", 0, { value: toWei("100") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(1, "Liverpool", "0x0000000000000000000000000000000000000000", 0, { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(1, "Liverpool", "0x0000000000000000000000000000000000000000", 0, { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(1, "Manchester City", "0x0000000000000000000000000000000000000000", 0, { value: toWei("30") });

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
    console.log(await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000"), "contract");

    await increase(duration.days(10));

    await this.event.connect(this.signers.admin).updateEventResult(1, "Liverpool");

    await this.prediction.connect(this.signers.user2).claimReward(1, "0x0000000000000000000000000000000000000000");

    await this.prediction.connect(this.signers.user3).claimReward(1, "0x0000000000000000000000000000000000000000");

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
  });

  it("can predict handicap event", async function () {
    await increase(duration.seconds(50));

    await this.prediction
      .connect(this.signers.admin)
      .depositLP("0x0000000000000000000000000000000000000000", 0, { value: toWei("39") });

    await this.prediction
      .connect(this.signers.user2)
      .predict(2, "Win - Lose", "0x0000000000000000000000000000000000000000", 0, { value: toWei("20") });

    await this.prediction
      .connect(this.signers.user3)
      .predict(2, "Win - Lose", "0x0000000000000000000000000000000000000000", 0, { value: toWei("10") });

    await this.prediction
      .connect(this.signers.user1)
      .predict(2, "Lose - Win", "0x0000000000000000000000000000000000000000", 0, { value: toWei("30") });

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
    console.log(await this.prediction.getTokenAmount("0x0000000000000000000000000000000000000000"), "contract");

    await increase(duration.days(10));

    await this.event.connect(this.signers.admin).updateEventResult(2, "Win - Lose");

    await this.prediction.connect(this.signers.user2).claimReward(2, "0x0000000000000000000000000000000000000000");

    await this.prediction.connect(this.signers.user3).claimReward(2, "0x0000000000000000000000000000000000000000");

    console.log(await this.signers.user1.getBalance(), "user 1");
    console.log(await this.signers.user2.getBalance(), "user 2");
    console.log(await this.signers.user3.getBalance(), "user 3");
  });
}
