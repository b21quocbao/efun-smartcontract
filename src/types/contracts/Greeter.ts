/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface GreeterInterface extends utils.Interface {
  functions: {
    "greet()": FunctionFragment;
    "greeting()": FunctionFragment;
    "initialize(string)": FunctionFragment;
    "setGreeting(string)": FunctionFragment;
    "throwError()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "greet"
      | "greeting"
      | "initialize"
      | "setGreeting"
      | "throwError"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "greet", values?: undefined): string;
  encodeFunctionData(functionFragment: "greeting", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;
  encodeFunctionData(
    functionFragment: "throwError",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "greeting", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "throwError", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface Greeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GreeterInterface;

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
    greet(overrides?: CallOverrides): Promise<[string]>;

    greeting(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    throwError(overrides?: CallOverrides): Promise<[void]>;
  };

  greet(overrides?: CallOverrides): Promise<string>;

  greeting(overrides?: CallOverrides): Promise<string>;

  initialize(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGreeting(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  throwError(overrides?: CallOverrides): Promise<void>;

  callStatic: {
    greet(overrides?: CallOverrides): Promise<string>;

    greeting(overrides?: CallOverrides): Promise<string>;

    initialize(_greeting: string, overrides?: CallOverrides): Promise<void>;

    setGreeting(_greeting: string, overrides?: CallOverrides): Promise<void>;

    throwError(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    greet(overrides?: CallOverrides): Promise<BigNumber>;

    greeting(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    throwError(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    greet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    greeting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    throwError(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
