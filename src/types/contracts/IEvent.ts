/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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
} from "../common";

export declare namespace EDataTypes {
  export type EventStruct = {
    startTime: BigNumberish;
    deadlineTime: BigNumberish;
    endTime: BigNumberish;
    resultIndex: BigNumberish;
    status: BigNumberish;
    helperAddress: string;
    creator: string;
    odds: BigNumberish[];
    _datas: string;
    pro: BigNumberish;
    isBlock: boolean;
    finalTime: BigNumberish;
  };

  export type EventStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    string,
    string,
    BigNumber[],
    string,
    BigNumber,
    boolean,
    BigNumber
  ] & {
    startTime: BigNumber;
    deadlineTime: BigNumber;
    endTime: BigNumber;
    resultIndex: BigNumber;
    status: number;
    helperAddress: string;
    creator: string;
    odds: BigNumber[];
    _datas: string;
    pro: BigNumber;
    isBlock: boolean;
    finalTime: BigNumber;
  };
}

export interface IEventInterface extends utils.Interface {
  functions: {
    "createSingleEvent(uint256,uint256,uint256,address,uint256[],string,address,uint256)": FunctionFragment;
    "info(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createSingleEvent" | "info"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createSingleEvent",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish[],
      string,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "info", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "createSingleEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;

  events: {};
}

export interface IEvent extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEventInterface;

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
    createSingleEvent(
      _startTime: BigNumberish,
      _deadlineTime: BigNumberish,
      _endTime: BigNumberish,
      _helperAddress: string,
      _odds: BigNumberish[],
      _datas: string,
      _creator: string,
      _pro: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [EDataTypes.EventStructOutput] & { _event: EDataTypes.EventStructOutput }
    >;
  };

  createSingleEvent(
    _startTime: BigNumberish,
    _deadlineTime: BigNumberish,
    _endTime: BigNumberish,
    _helperAddress: string,
    _odds: BigNumberish[],
    _datas: string,
    _creator: string,
    _pro: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  info(
    _eventId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<EDataTypes.EventStructOutput>;

  callStatic: {
    createSingleEvent(
      _startTime: BigNumberish,
      _deadlineTime: BigNumberish,
      _endTime: BigNumberish,
      _helperAddress: string,
      _odds: BigNumberish[],
      _datas: string,
      _creator: string,
      _pro: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<EDataTypes.EventStructOutput>;
  };

  filters: {};

  estimateGas: {
    createSingleEvent(
      _startTime: BigNumberish,
      _deadlineTime: BigNumberish,
      _endTime: BigNumberish,
      _helperAddress: string,
      _odds: BigNumberish[],
      _datas: string,
      _creator: string,
      _pro: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    info(_eventId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createSingleEvent(
      _startTime: BigNumberish,
      _deadlineTime: BigNumberish,
      _endTime: BigNumberish,
      _helperAddress: string,
      _odds: BigNumberish[],
      _datas: string,
      _creator: string,
      _pro: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
