/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export declare namespace GDataTypes {
  export type EventStruct = {
    description: BytesLike;
    startTime: BigNumberish;
    endTime: BigNumberish;
    result: string;
    status: BigNumberish;
    sToken: string;
    sTotal: BigNumberish;
  };

  export type EventStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string,
    number,
    string,
    BigNumber
  ] & {
    description: string;
    startTime: BigNumber;
    endTime: BigNumber;
    result: string;
    status: number;
    sToken: string;
    sTotal: BigNumber;
  };
}

export interface GREventInterface extends utils.Interface {
  functions: {
    "info(uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "info"): FunctionFragment;

  encodeFunctionData(functionFragment: "info", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;

  events: {};
}

export interface GREvent extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GREventInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [GDataTypes.EventStructOutput] & { _event: GDataTypes.EventStructOutput }
    >;
  };

  info(
    _eventId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<GDataTypes.EventStructOutput>;

  callStatic: {
    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<GDataTypes.EventStructOutput>;
  };

  filters: {};

  estimateGas: {
    info(_eventId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
