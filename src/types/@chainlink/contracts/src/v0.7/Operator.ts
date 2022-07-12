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
  PayableOverrides,
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
} from "../../../../common";

export interface OperatorInterface extends utils.Interface {
  functions: {
    "acceptAuthorizedReceivers(address[],address[])": FunctionFragment;
    "acceptOwnableContracts(address[])": FunctionFragment;
    "acceptOwnership()": FunctionFragment;
    "cancelOracleRequest(bytes32,uint256,bytes4,uint256)": FunctionFragment;
    "cancelOracleRequestByRequester(uint256,uint256,bytes4,uint256)": FunctionFragment;
    "distributeFunds(address[],uint256[])": FunctionFragment;
    "fulfillOracleRequest(bytes32,uint256,address,bytes4,uint256,bytes32)": FunctionFragment;
    "fulfillOracleRequest2(bytes32,uint256,address,bytes4,uint256,bytes)": FunctionFragment;
    "getAuthorizedSenders()": FunctionFragment;
    "getChainlinkToken()": FunctionFragment;
    "getExpiryTime()": FunctionFragment;
    "isAuthorizedSender(address)": FunctionFragment;
    "onTokenTransfer(address,uint256,bytes)": FunctionFragment;
    "operatorRequest(address,uint256,bytes32,bytes4,uint256,uint256,bytes)": FunctionFragment;
    "oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerForward(address,bytes)": FunctionFragment;
    "ownerTransferAndCall(address,uint256,bytes)": FunctionFragment;
    "setAuthorizedSenders(address[])": FunctionFragment;
    "setAuthorizedSendersOn(address[],address[])": FunctionFragment;
    "transferOwnableContracts(address[],address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "typeAndVersion()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "withdrawable()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptAuthorizedReceivers"
      | "acceptOwnableContracts"
      | "acceptOwnership"
      | "cancelOracleRequest"
      | "cancelOracleRequestByRequester"
      | "distributeFunds"
      | "fulfillOracleRequest"
      | "fulfillOracleRequest2"
      | "getAuthorizedSenders"
      | "getChainlinkToken"
      | "getExpiryTime"
      | "isAuthorizedSender"
      | "onTokenTransfer"
      | "operatorRequest"
      | "oracleRequest"
      | "owner"
      | "ownerForward"
      | "ownerTransferAndCall"
      | "setAuthorizedSenders"
      | "setAuthorizedSendersOn"
      | "transferOwnableContracts"
      | "transferOwnership"
      | "typeAndVersion"
      | "withdraw"
      | "withdrawable"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptAuthorizedReceivers",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnableContracts",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOracleRequest",
    values: [BytesLike, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOracleRequestByRequester",
    values: [BigNumberish, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeFunds",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillOracleRequest",
    values: [
      BytesLike,
      BigNumberish,
      string,
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillOracleRequest2",
    values: [
      BytesLike,
      BigNumberish,
      string,
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizedSenders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainlinkToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getExpiryTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorizedSender",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "onTokenTransfer",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorRequest",
    values: [
      string,
      BigNumberish,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleRequest",
    values: [
      string,
      BigNumberish,
      BytesLike,
      string,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerForward",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerTransferAndCall",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizedSenders",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizedSendersOn",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnableContracts",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "typeAndVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawable",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptAuthorizedReceivers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnableContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOracleRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOracleRequestByRequester",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillOracleRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillOracleRequest2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizedSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getChainlinkToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpiryTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorizedSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerForward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerTransferAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizedSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizedSendersOn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnableContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "typeAndVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizedSendersChanged(address[],address)": EventFragment;
    "CancelOracleRequest(bytes32)": EventFragment;
    "OracleRequest(bytes32,address,bytes32,uint256,address,bytes4,uint256,uint256,bytes)": EventFragment;
    "OracleResponse(bytes32)": EventFragment;
    "OwnableContractAccepted(address)": EventFragment;
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TargetsUpdatedAuthorizedSenders(address[],address[],address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizedSendersChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelOracleRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleResponse"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnableContractAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TargetsUpdatedAuthorizedSenders"
  ): EventFragment;
}

export interface AuthorizedSendersChangedEventObject {
  senders: string[];
  changedBy: string;
}
export type AuthorizedSendersChangedEvent = TypedEvent<
  [string[], string],
  AuthorizedSendersChangedEventObject
>;

export type AuthorizedSendersChangedEventFilter =
  TypedEventFilter<AuthorizedSendersChangedEvent>;

export interface CancelOracleRequestEventObject {
  requestId: string;
}
export type CancelOracleRequestEvent = TypedEvent<
  [string],
  CancelOracleRequestEventObject
>;

export type CancelOracleRequestEventFilter =
  TypedEventFilter<CancelOracleRequestEvent>;

export interface OracleRequestEventObject {
  specId: string;
  requester: string;
  requestId: string;
  payment: BigNumber;
  callbackAddr: string;
  callbackFunctionId: string;
  cancelExpiration: BigNumber;
  dataVersion: BigNumber;
  data: string;
}
export type OracleRequestEvent = TypedEvent<
  [
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    string
  ],
  OracleRequestEventObject
>;

export type OracleRequestEventFilter = TypedEventFilter<OracleRequestEvent>;

export interface OracleResponseEventObject {
  requestId: string;
}
export type OracleResponseEvent = TypedEvent<
  [string],
  OracleResponseEventObject
>;

export type OracleResponseEventFilter = TypedEventFilter<OracleResponseEvent>;

export interface OwnableContractAcceptedEventObject {
  acceptedContract: string;
}
export type OwnableContractAcceptedEvent = TypedEvent<
  [string],
  OwnableContractAcceptedEventObject
>;

export type OwnableContractAcceptedEventFilter =
  TypedEventFilter<OwnableContractAcceptedEvent>;

export interface OwnershipTransferRequestedEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<
  [string, string],
  OwnershipTransferRequestedEventObject
>;

export type OwnershipTransferRequestedEventFilter =
  TypedEventFilter<OwnershipTransferRequestedEvent>;

export interface OwnershipTransferredEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TargetsUpdatedAuthorizedSendersEventObject {
  targets: string[];
  senders: string[];
  changedBy: string;
}
export type TargetsUpdatedAuthorizedSendersEvent = TypedEvent<
  [string[], string[], string],
  TargetsUpdatedAuthorizedSendersEventObject
>;

export type TargetsUpdatedAuthorizedSendersEventFilter =
  TypedEventFilter<TargetsUpdatedAuthorizedSendersEvent>;

export interface Operator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OperatorInterface;

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
    acceptAuthorizedReceivers(
      targets: string[],
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    acceptOwnableContracts(
      ownable: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackFunc: BytesLike,
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelOracleRequestByRequester(
      nonce: BigNumberish,
      payment: BigNumberish,
      callbackFunc: BytesLike,
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeFunds(
      receivers: string[],
      amounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fulfillOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fulfillOracleRequest2(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<[string[]]>;

    getChainlinkToken(overrides?: CallOverrides): Promise<[string]>;

    getExpiryTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    isAuthorizedSender(
      sender: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onTokenTransfer(
      sender: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    operatorRequest(
      sender: string,
      payment: BigNumberish,
      specId: BytesLike,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    oracleRequest(
      sender: string,
      payment: BigNumberish,
      specId: BytesLike,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerForward(
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ownerTransferAndCall(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuthorizedSenders(
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuthorizedSendersOn(
      targets: string[],
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnableContracts(
      ownable: string[],
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    typeAndVersion(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawable(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  acceptAuthorizedReceivers(
    targets: string[],
    senders: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  acceptOwnableContracts(
    ownable: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelOracleRequest(
    requestId: BytesLike,
    payment: BigNumberish,
    callbackFunc: BytesLike,
    expiration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelOracleRequestByRequester(
    nonce: BigNumberish,
    payment: BigNumberish,
    callbackFunc: BytesLike,
    expiration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeFunds(
    receivers: string[],
    amounts: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fulfillOracleRequest(
    requestId: BytesLike,
    payment: BigNumberish,
    callbackAddress: string,
    callbackFunctionId: BytesLike,
    expiration: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fulfillOracleRequest2(
    requestId: BytesLike,
    payment: BigNumberish,
    callbackAddress: string,
    callbackFunctionId: BytesLike,
    expiration: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAuthorizedSenders(overrides?: CallOverrides): Promise<string[]>;

  getChainlinkToken(overrides?: CallOverrides): Promise<string>;

  getExpiryTime(overrides?: CallOverrides): Promise<BigNumber>;

  isAuthorizedSender(
    sender: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onTokenTransfer(
    sender: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  operatorRequest(
    sender: string,
    payment: BigNumberish,
    specId: BytesLike,
    callbackFunctionId: BytesLike,
    nonce: BigNumberish,
    dataVersion: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  oracleRequest(
    sender: string,
    payment: BigNumberish,
    specId: BytesLike,
    callbackAddress: string,
    callbackFunctionId: BytesLike,
    nonce: BigNumberish,
    dataVersion: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerForward(
    to: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ownerTransferAndCall(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuthorizedSenders(
    senders: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuthorizedSendersOn(
    targets: string[],
    senders: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnableContracts(
    ownable: string[],
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  typeAndVersion(overrides?: CallOverrides): Promise<string>;

  withdraw(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptAuthorizedReceivers(
      targets: string[],
      senders: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    acceptOwnableContracts(
      ownable: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    cancelOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackFunc: BytesLike,
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOracleRequestByRequester(
      nonce: BigNumberish,
      payment: BigNumberish,
      callbackFunc: BytesLike,
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    distributeFunds(
      receivers: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    fulfillOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fulfillOracleRequest2(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<string[]>;

    getChainlinkToken(overrides?: CallOverrides): Promise<string>;

    getExpiryTime(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorizedSender(
      sender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onTokenTransfer(
      sender: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    operatorRequest(
      sender: string,
      payment: BigNumberish,
      specId: BytesLike,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    oracleRequest(
      sender: string,
      payment: BigNumberish,
      specId: BytesLike,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerForward(
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerTransferAndCall(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setAuthorizedSenders(
      senders: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setAuthorizedSendersOn(
      targets: string[],
      senders: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnableContracts(
      ownable: string[],
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(to: string, overrides?: CallOverrides): Promise<void>;

    typeAndVersion(overrides?: CallOverrides): Promise<string>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AuthorizedSendersChanged(address[],address)"(
      senders?: null,
      changedBy?: null
    ): AuthorizedSendersChangedEventFilter;
    AuthorizedSendersChanged(
      senders?: null,
      changedBy?: null
    ): AuthorizedSendersChangedEventFilter;

    "CancelOracleRequest(bytes32)"(
      requestId?: BytesLike | null
    ): CancelOracleRequestEventFilter;
    CancelOracleRequest(
      requestId?: BytesLike | null
    ): CancelOracleRequestEventFilter;

    "OracleRequest(bytes32,address,bytes32,uint256,address,bytes4,uint256,uint256,bytes)"(
      specId?: BytesLike | null,
      requester?: null,
      requestId?: null,
      payment?: null,
      callbackAddr?: null,
      callbackFunctionId?: null,
      cancelExpiration?: null,
      dataVersion?: null,
      data?: null
    ): OracleRequestEventFilter;
    OracleRequest(
      specId?: BytesLike | null,
      requester?: null,
      requestId?: null,
      payment?: null,
      callbackAddr?: null,
      callbackFunctionId?: null,
      cancelExpiration?: null,
      dataVersion?: null,
      data?: null
    ): OracleRequestEventFilter;

    "OracleResponse(bytes32)"(
      requestId?: BytesLike | null
    ): OracleResponseEventFilter;
    OracleResponse(requestId?: BytesLike | null): OracleResponseEventFilter;

    "OwnableContractAccepted(address)"(
      acceptedContract?: string | null
    ): OwnableContractAcceptedEventFilter;
    OwnableContractAccepted(
      acceptedContract?: string | null
    ): OwnableContractAcceptedEventFilter;

    "OwnershipTransferRequested(address,address)"(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferRequestedEventFilter;
    OwnershipTransferRequested(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferredEventFilter;

    "TargetsUpdatedAuthorizedSenders(address[],address[],address)"(
      targets?: null,
      senders?: null,
      changedBy?: null
    ): TargetsUpdatedAuthorizedSendersEventFilter;
    TargetsUpdatedAuthorizedSenders(
      targets?: null,
      senders?: null,
      changedBy?: null
    ): TargetsUpdatedAuthorizedSendersEventFilter;
  };

  estimateGas: {
    acceptAuthorizedReceivers(
      targets: string[],
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    acceptOwnableContracts(
      ownable: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackFunc: BytesLike,
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelOracleRequestByRequester(
      nonce: BigNumberish,
      payment: BigNumberish,
      callbackFunc: BytesLike,
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeFunds(
      receivers: string[],
      amounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fulfillOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fulfillOracleRequest2(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAuthorizedSenders(overrides?: CallOverrides): Promise<BigNumber>;

    getChainlinkToken(overrides?: CallOverrides): Promise<BigNumber>;

    getExpiryTime(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorizedSender(
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onTokenTransfer(
      sender: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    operatorRequest(
      sender: string,
      payment: BigNumberish,
      specId: BytesLike,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    oracleRequest(
      sender: string,
      payment: BigNumberish,
      specId: BytesLike,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerForward(
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ownerTransferAndCall(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuthorizedSenders(
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuthorizedSendersOn(
      targets: string[],
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnableContracts(
      ownable: string[],
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    typeAndVersion(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptAuthorizedReceivers(
      targets: string[],
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    acceptOwnableContracts(
      ownable: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackFunc: BytesLike,
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelOracleRequestByRequester(
      nonce: BigNumberish,
      payment: BigNumberish,
      callbackFunc: BytesLike,
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeFunds(
      receivers: string[],
      amounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fulfillOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fulfillOracleRequest2(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAuthorizedSenders(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChainlinkToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getExpiryTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAuthorizedSender(
      sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onTokenTransfer(
      sender: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    operatorRequest(
      sender: string,
      payment: BigNumberish,
      specId: BytesLike,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    oracleRequest(
      sender: string,
      payment: BigNumberish,
      specId: BytesLike,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      nonce: BigNumberish,
      dataVersion: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerForward(
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ownerTransferAndCall(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuthorizedSenders(
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuthorizedSendersOn(
      targets: string[],
      senders: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnableContracts(
      ownable: string[],
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    typeAndVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
