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
} from "../../../../../common";

export interface OracleInterfaceInterface extends utils.Interface {
  functions: {
    "fulfillOracleRequest(bytes32,uint256,address,bytes4,uint256,bytes32)": FunctionFragment;
    "isAuthorizedSender(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "withdrawable()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fulfillOracleRequest"
      | "isAuthorizedSender"
      | "withdraw"
      | "withdrawable"
  ): FunctionFragment;

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
    functionFragment: "isAuthorizedSender",
    values: [string]
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
    functionFragment: "fulfillOracleRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorizedSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OracleInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleInterfaceInterface;

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
    fulfillOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAuthorizedSender(
      node: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawable(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  fulfillOracleRequest(
    requestId: BytesLike,
    payment: BigNumberish,
    callbackAddress: string,
    callbackFunctionId: BytesLike,
    expiration: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAuthorizedSender(node: string, overrides?: CallOverrides): Promise<boolean>;

  withdraw(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawable(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    fulfillOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAuthorizedSender(
      node: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    fulfillOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAuthorizedSender(
      node: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawable(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    fulfillOracleRequest(
      requestId: BytesLike,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: BytesLike,
      expiration: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAuthorizedSender(
      node: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
