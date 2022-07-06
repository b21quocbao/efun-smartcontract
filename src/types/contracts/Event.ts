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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
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
  };
}

export interface EventInterface extends utils.Interface {
  functions: {
    "checkUpkeep(bytes)": FunctionFragment;
    "createSingleEvent(uint256,uint256,uint256,address,uint256[],string,address,uint256)": FunctionFragment;
    "events(uint256)": FunctionFragment;
    "fulfill(bytes32,string)": FunctionFragment;
    "info(uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "nEvents()": FunctionFragment;
    "owner()": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setOracle(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateEventResult(uint256,uint256)": FunctionFragment;
    "withdrawLink()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkUpkeep"
      | "createSingleEvent"
      | "events"
      | "fulfill"
      | "info"
      | "initialize"
      | "nEvents"
      | "owner"
      | "performUpkeep"
      | "renounceOwnership"
      | "setOracle"
      | "transferOwnership"
      | "updateEventResult"
      | "withdrawLink"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [BytesLike]
  ): string;
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
  encodeFunctionData(
    functionFragment: "events",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "info", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nEvents", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setOracle",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEventResult",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLink",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSingleEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "events", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nEvents", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEventResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLink",
    data: BytesLike
  ): Result;

  events: {
    "ChainlinkCancelled(bytes32)": EventFragment;
    "ChainlinkFulfilled(bytes32)": EventFragment;
    "ChainlinkRequested(bytes32)": EventFragment;
    "EventCreated(uint256,uint256,uint256,uint256,address,address,uint256[],string,uint256)": EventFragment;
    "EventResultUpdated(address,uint256,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChainlinkCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EventCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EventResultUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ChainlinkCancelledEventObject {
  id: string;
}
export type ChainlinkCancelledEvent = TypedEvent<
  [string],
  ChainlinkCancelledEventObject
>;

export type ChainlinkCancelledEventFilter =
  TypedEventFilter<ChainlinkCancelledEvent>;

export interface ChainlinkFulfilledEventObject {
  id: string;
}
export type ChainlinkFulfilledEvent = TypedEvent<
  [string],
  ChainlinkFulfilledEventObject
>;

export type ChainlinkFulfilledEventFilter =
  TypedEventFilter<ChainlinkFulfilledEvent>;

export interface ChainlinkRequestedEventObject {
  id: string;
}
export type ChainlinkRequestedEvent = TypedEvent<
  [string],
  ChainlinkRequestedEventObject
>;

export type ChainlinkRequestedEventFilter =
  TypedEventFilter<ChainlinkRequestedEvent>;

export interface EventCreatedEventObject {
  idx: BigNumber;
  startTime: BigNumber;
  deadlineTime: BigNumber;
  endTime: BigNumber;
  helperAddress: string;
  creator: string;
  odds: BigNumber[];
  datas: string;
  pro: BigNumber;
}
export type EventCreatedEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber[],
    string,
    BigNumber
  ],
  EventCreatedEventObject
>;

export type EventCreatedEventFilter = TypedEventFilter<EventCreatedEvent>;

export interface EventResultUpdatedEventObject {
  caller: string;
  eventId: BigNumber;
  index: BigNumber;
}
export type EventResultUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  EventResultUpdatedEventObject
>;

export type EventResultUpdatedEventFilter =
  TypedEventFilter<EventResultUpdatedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Event extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventInterface;

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
    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string] & { upkeepNeeded: boolean; performData: string }
    >;

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

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        BigNumber
      ] & {
        startTime: BigNumber;
        deadlineTime: BigNumber;
        endTime: BigNumber;
        resultIndex: BigNumber;
        status: number;
        helperAddress: string;
        creator: string;
        _datas: string;
        pro: BigNumber;
      }
    >;

    fulfill(
      _requestId: BytesLike,
      _data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [EDataTypes.EventStructOutput] & { _event: EDataTypes.EventStructOutput }
    >;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nEvents(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    performUpkeep(
      performData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      _token: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateEventResult(
      _eventId: BigNumberish,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  checkUpkeep(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string] & { upkeepNeeded: boolean; performData: string }
  >;

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

  events(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      string,
      string,
      string,
      BigNumber
    ] & {
      startTime: BigNumber;
      deadlineTime: BigNumber;
      endTime: BigNumber;
      resultIndex: BigNumber;
      status: number;
      helperAddress: string;
      creator: string;
      _datas: string;
      pro: BigNumber;
    }
  >;

  fulfill(
    _requestId: BytesLike,
    _data: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  info(
    _eventId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<EDataTypes.EventStructOutput>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nEvents(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  performUpkeep(
    performData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    _token: string,
    _oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateEventResult(
    _eventId: BigNumberish,
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawLink(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string] & { upkeepNeeded: boolean; performData: string }
    >;

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

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        BigNumber
      ] & {
        startTime: BigNumber;
        deadlineTime: BigNumber;
        endTime: BigNumber;
        resultIndex: BigNumber;
        status: number;
        helperAddress: string;
        creator: string;
        _datas: string;
        pro: BigNumber;
      }
    >;

    fulfill(
      _requestId: BytesLike,
      _data: string,
      overrides?: CallOverrides
    ): Promise<void>;

    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<EDataTypes.EventStructOutput>;

    initialize(overrides?: CallOverrides): Promise<void>;

    nEvents(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    performUpkeep(
      performData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setOracle(
      _token: string,
      _oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEventResult(
      _eventId: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawLink(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ChainlinkCancelled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkCancelledEventFilter;
    ChainlinkCancelled(id?: BytesLike | null): ChainlinkCancelledEventFilter;

    "ChainlinkFulfilled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkFulfilledEventFilter;
    ChainlinkFulfilled(id?: BytesLike | null): ChainlinkFulfilledEventFilter;

    "ChainlinkRequested(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkRequestedEventFilter;
    ChainlinkRequested(id?: BytesLike | null): ChainlinkRequestedEventFilter;

    "EventCreated(uint256,uint256,uint256,uint256,address,address,uint256[],string,uint256)"(
      idx?: null,
      startTime?: null,
      deadlineTime?: null,
      endTime?: null,
      helperAddress?: null,
      creator?: null,
      odds?: null,
      datas?: null,
      pro?: null
    ): EventCreatedEventFilter;
    EventCreated(
      idx?: null,
      startTime?: null,
      deadlineTime?: null,
      endTime?: null,
      helperAddress?: null,
      creator?: null,
      odds?: null,
      datas?: null,
      pro?: null
    ): EventCreatedEventFilter;

    "EventResultUpdated(address,uint256,uint256)"(
      caller?: null,
      eventId?: null,
      index?: null
    ): EventResultUpdatedEventFilter;
    EventResultUpdated(
      caller?: null,
      eventId?: null,
      index?: null
    ): EventResultUpdatedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    checkUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

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

    events(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    fulfill(
      _requestId: BytesLike,
      _data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    info(_eventId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nEvents(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(
      performData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      _token: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateEventResult(
      _eventId: BigNumberish,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fulfill(
      _requestId: BytesLike,
      _data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    info(
      _eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nEvents(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performUpkeep(
      performData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      _token: string,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateEventResult(
      _eventId: BigNumberish,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
