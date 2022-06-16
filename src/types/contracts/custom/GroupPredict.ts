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
} from "../../common";

export declare namespace EDataTypes {
  export type PredictionStruct = {
    predictionAmount: BigNumberish;
    predictOptions: BigNumberish;
    claimed: boolean;
  };

  export type PredictionStructOutput = [BigNumber, BigNumber, boolean] & {
    predictionAmount: BigNumber;
    predictOptions: BigNumber;
    claimed: boolean;
  };
}

export interface GroupPredictInterface extends utils.Interface {
  functions: {
    "calculatePotentialReward(address,uint256,uint256,uint256[],uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "calculateRemainLP(address,uint256,uint256,uint256[],uint256[],uint256,uint256)": FunctionFragment;
    "calculateReward(address,uint256,uint256,uint256[],(uint256,uint256,bool),uint256,uint256,uint256,uint256,bool)": FunctionFragment;
    "calculateRewardSponsor(address,uint256,uint256,uint256[],(uint256,uint256,bool),uint256,uint256,uint256,uint256)": FunctionFragment;
    "calculateSponsor(address,uint256,uint256,uint256[],uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "maxPayout(address,uint256,uint256,uint256[],uint256,uint256,uint256,uint256)": FunctionFragment;
    "validatePrediction(address,uint256,uint256,uint256[],uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calculatePotentialReward"
      | "calculateRemainLP"
      | "calculateReward"
      | "calculateRewardSponsor"
      | "calculateSponsor"
      | "maxPayout"
      | "validatePrediction"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculatePotentialReward",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRemainLP",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BigNumberish[],
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateReward",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      EDataTypes.PredictionStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRewardSponsor",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      EDataTypes.PredictionStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSponsor",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "maxPayout",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validatePrediction",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculatePotentialReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRemainLP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRewardSponsor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSponsor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxPayout", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validatePrediction",
    data: BytesLike
  ): Result;

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

export interface GroupPredict extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GroupPredictInterface;

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
    calculatePotentialReward(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictionAmount: BigNumberish,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _reward: BigNumber }>;

    calculateRemainLP(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _odds: BigNumberish[],
      _oneHundredPrecent: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _remainLP: BigNumber }>;

    calculateReward(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictions: EDataTypes.PredictionStruct,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      _validate: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _reward: BigNumber }>;

    calculateRewardSponsor(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictions: EDataTypes.PredictionStruct,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _reward: BigNumber }>;

    calculateSponsor(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictionAmount: BigNumberish,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _reward: BigNumber }>;

    maxPayout(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _odd: BigNumberish,
      _liquidityPool: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    validatePrediction(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictValue: BigNumberish,
      _odd: BigNumberish,
      _liquidityPool: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  calculatePotentialReward(
    _eventDataAddress: string,
    _eventId: BigNumberish,
    _predictStats: BigNumberish,
    _predictOptionStats: BigNumberish[],
    _predictionAmount: BigNumberish,
    _odd: BigNumberish,
    _oneHundredPrecent: BigNumberish,
    _index: BigNumberish,
    _liquidityPool: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateRemainLP(
    _eventDataAddress: string,
    _eventId: BigNumberish,
    _predictStats: BigNumberish,
    _predictOptionStats: BigNumberish[],
    _odds: BigNumberish[],
    _oneHundredPrecent: BigNumberish,
    _liquidityPool: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateReward(
    _eventDataAddress: string,
    _eventId: BigNumberish,
    _predictStats: BigNumberish,
    _predictOptionStats: BigNumberish[],
    _predictions: EDataTypes.PredictionStruct,
    _odd: BigNumberish,
    _oneHundredPrecent: BigNumberish,
    _index: BigNumberish,
    _liquidityPool: BigNumberish,
    _validate: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateRewardSponsor(
    _eventDataAddress: string,
    _eventId: BigNumberish,
    _predictStats: BigNumberish,
    _predictOptionStats: BigNumberish[],
    _predictions: EDataTypes.PredictionStruct,
    _odd: BigNumberish,
    _oneHundredPrecent: BigNumberish,
    _index: BigNumberish,
    _liquidityPool: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSponsor(
    _eventDataAddress: string,
    _eventId: BigNumberish,
    _predictStats: BigNumberish,
    _predictOptionStats: BigNumberish[],
    _predictionAmount: BigNumberish,
    _odd: BigNumberish,
    _oneHundredPrecent: BigNumberish,
    _index: BigNumberish,
    _liquidityPool: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxPayout(
    _eventDataAddress: string,
    _eventId: BigNumberish,
    _predictStats: BigNumberish,
    _predictOptionStats: BigNumberish[],
    _odd: BigNumberish,
    _liquidityPool: BigNumberish,
    _oneHundredPrecent: BigNumberish,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  validatePrediction(
    _eventDataAddress: string,
    _eventId: BigNumberish,
    _predictStats: BigNumberish,
    _predictOptionStats: BigNumberish[],
    _predictValue: BigNumberish,
    _odd: BigNumberish,
    _liquidityPool: BigNumberish,
    _oneHundredPrecent: BigNumberish,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    calculatePotentialReward(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictionAmount: BigNumberish,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRemainLP(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _odds: BigNumberish[],
      _oneHundredPrecent: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateReward(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictions: EDataTypes.PredictionStruct,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      _validate: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRewardSponsor(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictions: EDataTypes.PredictionStruct,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSponsor(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictionAmount: BigNumberish,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxPayout(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _odd: BigNumberish,
      _liquidityPool: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatePrediction(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictValue: BigNumberish,
      _odd: BigNumberish,
      _liquidityPool: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    calculatePotentialReward(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictionAmount: BigNumberish,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRemainLP(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _odds: BigNumberish[],
      _oneHundredPrecent: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateReward(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictions: EDataTypes.PredictionStruct,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      _validate: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRewardSponsor(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictions: EDataTypes.PredictionStruct,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSponsor(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictionAmount: BigNumberish,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxPayout(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _odd: BigNumberish,
      _liquidityPool: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validatePrediction(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictValue: BigNumberish,
      _odd: BigNumberish,
      _liquidityPool: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculatePotentialReward(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictionAmount: BigNumberish,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateRemainLP(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _odds: BigNumberish[],
      _oneHundredPrecent: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateReward(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictions: EDataTypes.PredictionStruct,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      _validate: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateRewardSponsor(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictions: EDataTypes.PredictionStruct,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSponsor(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictionAmount: BigNumberish,
      _odd: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      _liquidityPool: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxPayout(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _odd: BigNumberish,
      _liquidityPool: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validatePrediction(
      _eventDataAddress: string,
      _eventId: BigNumberish,
      _predictStats: BigNumberish,
      _predictOptionStats: BigNumberish[],
      _predictValue: BigNumberish,
      _odd: BigNumberish,
      _liquidityPool: BigNumberish,
      _oneHundredPrecent: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
