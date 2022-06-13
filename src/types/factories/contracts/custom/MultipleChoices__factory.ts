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
  "0x608060405234801561001057600080fd5b50610ad1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063812acab111610050578063812acab1146100a557806383688316146100c857806394558f0a146100db57600080fd5b80634f4d2e1e1461006c5780636341acbc14610092575b600080fd5b61007f61007a366004610647565b6100ee565b6040519081526020015b60405180910390f35b61007f6100a03660046106ec565b61024e565b6100b86100b336600461081e565b610352565b6040519015158152602001610089565b61007f6100d6366004610795565b6103ca565b61007f6100e936600461081e565b610445565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b15801561013357600080fd5b505afa158015610147573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261016f91908101906108b0565b905082915060005b8781101561023f5788888281811061019f57634e487b7160e01b600052603260045260246000fd5b90506020020135836101b191906109f7565b9250808260600151141561022f57848787838181106101e057634e487b7160e01b600052603260045260246000fd5b905060200201358a8a8481811061020757634e487b7160e01b600052603260045260246000fd5b905060200201356102189190610a2f565b6102229190610a0f565b61022c9084610a4e565b92505b61023881610a65565b9050610177565b50509998505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b15801561029357600080fd5b505afa1580156102a7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102cf91908101906108b0565b9050866020013581606001511461032c5760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b84610338878935610a2f565b6103429190610a0f565b9c9b505050505050505050505050565b6000808385610361898d6109f7565b61036b91906109f7565b6103759190610a2f565b9050600086888b8b8781811061039b57634e487b7160e01b600052603260045260246000fd5b905060200201356103ac91906109f7565b6103b69190610a2f565b909110159c9b505050505050505050505050565b6000806103d7858a6109f7565b905060008888858181106103fb57634e487b7160e01b600052603260045260246000fd5b905060200201359050600085886104129190610a4e565b905085816104208486610a4e565b61042a9190610a0f565b6104349190610a2f565b9d9c50505050505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104c691908101906108b0565b9050846103388789610a2f565b80516104de81610aac565b919050565b60008083601f8401126104f4578182fd5b50813567ffffffffffffffff81111561050b578182fd5b6020830191508360208260051b850101111561052657600080fd5b9250929050565b600082601f83011261053d578081fd5b8151602067ffffffffffffffff82111561055957610559610a96565b8160051b6105688282016109c6565b838152828101908684018388018501891015610582578687fd5b8693505b858410156105a4578051835260019390930192918401918401610586565b50979650505050505050565b8051600281106104de57600080fd5b600082601f8301126105cf578081fd5b815167ffffffffffffffff8111156105e9576105e9610a96565b60206105fd601f8301601f191682016109c6565b8281528582848701011115610610578384fd5b835b8381101561062d578581018301518282018401528201610612565b8381111561063d57848385840101525b5095945050505050565b600080600080600080600080600060e08a8c031215610664578485fd5b893561066f81610aac565b985060208a0135975060408a0135965060608a013567ffffffffffffffff80821115610699578687fd5b6106a58d838e016104e3565b909850965060808c01359150808211156106bd578586fd5b506106ca8c828d016104e3565b9a9d999c50979a96999598959660a08101359660c09091013595509350505050565b6000806000806000806000806000808a8c0361016081121561070c578182fd5b8b3561071781610aac565b9a5060208c0135995060408c0135985060608c013567ffffffffffffffff811115610740578283fd5b61074c8e828f016104e3565b9099509750506060607f1982011215610763578182fd5b50989b979a509598949750929560808501955060e0850135946101008101359450610120810135935061014001359150565b60008060008060008060008060006101008a8c0312156107b3578485fd5b89356107be81610aac565b985060208a0135975060408a0135965060608a013567ffffffffffffffff8111156107e7578586fd5b6107f38c828d016104e3565b9a9d999c50979a97999860808901359860a0810135985060c0810135975060e0013595509350505050565b6000806000806000806000806000806101208b8d03121561083d578384fd5b8a3561084881610aac565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610871578485fd5b61087d8d828e016104e3565b9b9e9a9d50989b989a9960808a01359960a0810135995060c0810135985060e08101359750610100013595509350505050565b6000602082840312156108c1578081fd5b815167ffffffffffffffff808211156108d8578283fd5b9083019061012082860312156108ec578283fd5b6108f461099c565b82518152602083015160208201526040830151604082015260608301516060820152610922608084016105b0565b608082015261093360a084016104d3565b60a082015261094460c084016104d3565b60c082015260e08301518281111561095a578485fd5b6109668782860161052d565b60e083015250610100808401518381111561097f578586fd5b61098b888287016105bf565b918301919091525095945050505050565b604051610120810167ffffffffffffffff811182821017156109c0576109c0610a96565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156109ef576109ef610a96565b604052919050565b60008219821115610a0a57610a0a610a80565b500190565b600082610a2a57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610a4957610a49610a80565b500290565b600082821015610a6057610a60610a80565b500390565b6000600019821415610a7957610a79610a80565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610ac157600080fd5b5056fea164736f6c6343000804000a";

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
