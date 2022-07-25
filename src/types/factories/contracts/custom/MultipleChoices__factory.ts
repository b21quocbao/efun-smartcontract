/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MultipleChoices,
  MultipleChoicesInterface,
} from "../../../contracts/custom/MultipleChoices";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_eventDataAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_predictStats",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_predictOptionStats",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_predictionAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_odd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_oneHundredPrecent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_liquidityPool",
        type: "uint256",
      },
    ],
    name: "calculatePotentialReward",
    outputs: [
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_eventDataAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_predictStats",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_predictOptionStats",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_odds",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_oneHundredPrecent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_liquidityPool",
        type: "uint256",
      },
    ],
    name: "calculateRemainLP",
    outputs: [
      {
        internalType: "uint256",
        name: "_remainLP",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_eventDataAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_predictStats",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_predictOptionStats",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "predictionAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "predictOptions",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct EDataTypes.Prediction",
        name: "_predictions",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_oneHundredPrecent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_liquidityPool",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_validate",
        type: "bool",
      },
    ],
    name: "calculateReward",
    outputs: [
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "getAmountHasFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_eventDataAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
    ],
    name: "hostFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_eventDataAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_predictStats",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_predictOptionStats",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_odd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_liquidityPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_oneHundredPrecent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "maxPayout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_eventDataAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_predictStats",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_predictOptionStats",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_predictValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_odd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_liquidityPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_oneHundredPrecent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "validatePrediction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c32806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806394558f0a1161005b57806394558f0a146100ec5780639f5c36f0146100ff578063ccb32ac514610111578063dcbfcc971461012757600080fd5b806326232a2e1461008d5780634f4d2e1e146100a3578063812acab1146100b657806383688316146100d9575b600080fd5b60325b6040519081526020015b60405180910390f35b6100906100b136600461071c565b61013a565b6100c96100c43660046108f6565b61029a565b604051901515815260200161009a565b6100906100e736600461086d565b610312565b6100906100fa3660046108f6565b6103a1565b61009061010d366004610ace565b5090565b61009061011f3660046106f1565b600092915050565b6100906101353660046107c1565b610449565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b15801561017f57600080fd5b505afa158015610193573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101bb9190810190610988565b905082915060005b8781101561028b578888828181106101eb57634e487b7160e01b600052603260045260246000fd5b90506020020135836101fd9190610b4a565b9250808260600151141561027b578487878381811061022c57634e487b7160e01b600052603260045260246000fd5b905060200201358a8a8481811061025357634e487b7160e01b600052603260045260246000fd5b905060200201356102649190610b82565b61026e9190610b62565b6102789084610ba1565b92505b61028481610bb8565b90506101c3565b50509998505050505050505050565b60008083856102a9898d610b4a565b6102b39190610b4a565b6102bd9190610b82565b9050600086888b8b878181106102e357634e487b7160e01b600052603260045260246000fd5b905060200201356102f49190610b4a565b6102fe9190610b82565b909110159c9b505050505050505050505050565b60008061031f858a610b4a565b9050600084878a8a8781811061034557634e487b7160e01b600052603260045260246000fd5b905060200201356103569190610b82565b6103609190610b62565b9050600061036e8689610ba1565b9050808661037c8486610ba1565b6103869190610b82565b6103909190610b62565b9d9c50505050505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b1580156103e657600080fd5b505afa1580156103fa573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104229190810190610988565b90508461042f8789610b82565b6104399190610b62565b9c9b505050505050505050505050565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b15801561048e57600080fd5b505afa1580156104a2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104ca9190810190610988565b905060008660200135905060008260e0015182815181106104fb57634e487b7160e01b600052603260045260246000fd5b6020026020010151905084156105665787602001358360600151146105665760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b86610386828a35610b82565b805161057d81610bff565b919050565b60008083601f840112610593578182fd5b50813567ffffffffffffffff8111156105aa578182fd5b6020830191508360208260051b85010111156105c557600080fd5b9250929050565b600082601f8301126105dc578081fd5b8151602067ffffffffffffffff8211156105f8576105f8610be9565b8160051b610607828201610b19565b838152828101908684018388018501891015610621578687fd5b8693505b85841015610643578051835260019390930192918401918401610625565b50979650505050505050565b805161057d81610c17565b80516003811061057d57600080fd5b600082601f830112610679578081fd5b815167ffffffffffffffff81111561069357610693610be9565b60206106a7601f8301601f19168201610b19565b82815285828487010111156106ba578384fd5b835b838110156106d75785810183015182820184015282016106bc565b838111156106e757848385840101525b5095945050505050565b60008060408385031215610703578182fd5b823561070e81610bff565b946020939093013593505050565b600080600080600080600080600060e08a8c031215610739578485fd5b893561074481610bff565b985060208a0135975060408a0135965060608a013567ffffffffffffffff8082111561076e578687fd5b61077a8d838e01610582565b909850965060808c0135915080821115610792578586fd5b5061079f8c828d01610582565b9a9d999c50979a96999598959660a08101359660c09091013595509350505050565b6000806000806000806000806000898b036101408112156107e0578586fd5b8a356107eb81610bff565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610814578687fd5b6108208d828e01610582565b9098509650506060607f1982011215610837578485fd5b5060808a01935060e08a013592506101008a013591506101208a013561085c81610c17565b809150509295985092959850929598565b60008060008060008060008060006101008a8c03121561088b578485fd5b893561089681610bff565b985060208a0135975060408a0135965060608a013567ffffffffffffffff8111156108bf578586fd5b6108cb8c828d01610582565b9a9d999c50979a97999860808901359860a0810135985060c0810135975060e0013595509350505050565b6000806000806000806000806000806101208b8d031215610915578384fd5b8a3561092081610bff565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610949578485fd5b6109558d828e01610582565b9b9e9a9d50989b989a9960808a01359960a0810135995060c0810135985060e08101359750610100013595509350505050565b600060208284031215610999578081fd5b815167ffffffffffffffff808211156109b0578283fd5b908301906101e082860312156109c4578283fd5b6109cc610aef565b825181526020830151602082015260408301516040820152606083015160608201526109fa6080840161065a565b6080820152610a0b60a08401610572565b60a0820152610a1c60c08401610572565b60c082015260e083015182811115610a32578485fd5b610a3e878286016105cc565b60e0830152506101008084015183811115610a57578586fd5b610a6388828701610669565b828401525050610120915081830151828201526101409150610a8682840161064f565b91810191909152610160828101519082015261018080830151908201526101a090610ab282840161064f565b918101919091526101c091820151918101919091529392505050565b60008060408385031215610ae0578182fd5b50508035926020909101359150565b6040516101e0810167ffffffffffffffff81118282101715610b1357610b13610be9565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610b4257610b42610be9565b604052919050565b60008219821115610b5d57610b5d610bd3565b500190565b600082610b7d57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610b9c57610b9c610bd3565b500290565b600082821015610bb357610bb3610bd3565b500390565b6000600019821415610bcc57610bcc610bd3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610c1457600080fd5b50565b8015158114610c1457600080fdfea164736f6c6343000804000a";

type MultipleChoicesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultipleChoicesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultipleChoices__factory extends ContractFactory {
  constructor(...args: MultipleChoicesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MultipleChoices> {
    return super.deploy(overrides || {}) as Promise<MultipleChoices>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MultipleChoices {
    return super.attach(address) as MultipleChoices;
  }
  override connect(signer: Signer): MultipleChoices__factory {
    return super.connect(signer) as MultipleChoices__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultipleChoicesInterface {
    return new utils.Interface(_abi) as MultipleChoicesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultipleChoices {
    return new Contract(address, _abi, signerOrProvider) as MultipleChoices;
  }
}
