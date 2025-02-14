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
    name: "platFormfeeBefore",
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
  "0x608060405234801561001057600080fd5b50610cc7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063936c479d116100765780639f5c36f01161005b5780639f5c36f014610121578063ccb32ac514610133578063dcbfcc971461014957600080fd5b8063936c479d146100eb57806394558f0a1461010e57600080fd5b806326232a2e146100a85780632fb88c4e146100be5780634f4d2e1e146100c557806383688316146100d8575b600080fd5b60005b6040519081526020015b60405180910390f35b60326100ab565b6100ab6100d336600461073c565b61015c565b6100ab6100e636600461088d565b6102bc565b6100fe6100f9366004610aee565b61034b565b60405190151581526020016100b5565b6100ab61011c366004610916565b6103c1565b6100ab61012f366004610b63565b5090565b6100ab610141366004610711565b600092915050565b6100ab6101573660046107e1565b610469565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b1580156101a157600080fd5b505afa1580156101b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101dd91908101906109a8565b905082915060005b878110156102ad5788888281811061020d57634e487b7160e01b600052603260045260246000fd5b905060200201358361021f9190610bdf565b9250808260600151141561029d578487878381811061024e57634e487b7160e01b600052603260045260246000fd5b905060200201358a8a8481811061027557634e487b7160e01b600052603260045260246000fd5b905060200201356102869190610c17565b6102909190610bf7565b61029a9084610c36565b92505b6102a681610c4d565b90506101e5565b50509998505050505050505050565b6000806102c9858a610bdf565b9050600084878a8a878181106102ef57634e487b7160e01b600052603260045260246000fd5b905060200201356103009190610c17565b61030a9190610bf7565b905060006103188689610c36565b905080866103268486610c36565b6103309190610c17565b61033a9190610bf7565b9d9c50505050505050505050505050565b600080838561035a898d610bdf565b6103649190610bdf565b61036e9190610c17565b9050600086888b8b8781811061039457634e487b7160e01b600052603260045260246000fd5b905060200201356103a59190610bdf565b6103af9190610c17565b909110159a9950505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b15801561040657600080fd5b505afa15801561041a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261044291908101906109a8565b90508461044f8789610c17565b6104599190610bf7565b9c9b505050505050505050505050565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b1580156104ae57600080fd5b505afa1580156104c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104ea91908101906109a8565b905060008660200135905060008260e00151828151811061051b57634e487b7160e01b600052603260045260246000fd5b6020026020010151905084156105865787602001358360600151146105865760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b86610330828a35610c17565b805161059d81610c94565b919050565b60008083601f8401126105b3578182fd5b50813567ffffffffffffffff8111156105ca578182fd5b6020830191508360208260051b85010111156105e557600080fd5b9250929050565b600082601f8301126105fc578081fd5b8151602067ffffffffffffffff82111561061857610618610c7e565b8160051b610627828201610bae565b838152828101908684018388018501891015610641578687fd5b8693505b85841015610663578051835260019390930192918401918401610645565b50979650505050505050565b805161059d81610cac565b80516003811061059d57600080fd5b600082601f830112610699578081fd5b815167ffffffffffffffff8111156106b3576106b3610c7e565b60206106c7601f8301601f19168201610bae565b82815285828487010111156106da578384fd5b835b838110156106f75785810183015182820184015282016106dc565b8381111561070757848385840101525b5095945050505050565b60008060408385031215610723578182fd5b823561072e81610c94565b946020939093013593505050565b600080600080600080600080600060e08a8c031215610759578485fd5b893561076481610c94565b985060208a0135975060408a0135965060608a013567ffffffffffffffff8082111561078e578687fd5b61079a8d838e016105a2565b909850965060808c01359150808211156107b2578586fd5b506107bf8c828d016105a2565b9a9d999c50979a96999598959660a08101359660c09091013595509350505050565b6000806000806000806000806000898b03610140811215610800578586fd5b8a3561080b81610c94565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610834578687fd5b6108408d828e016105a2565b9098509650506060607f1982011215610857578485fd5b5060808a01935060e08a013592506101008a013591506101208a013561087c81610cac565b809150509295985092959850929598565b60008060008060008060008060006101008a8c0312156108ab578485fd5b89356108b681610c94565b985060208a0135975060408a0135965060608a013567ffffffffffffffff8111156108df578586fd5b6108eb8c828d016105a2565b9a9d999c50979a97999860808901359860a0810135985060c0810135975060e0013595509350505050565b6000806000806000806000806000806101208b8d031215610935578384fd5b8a3561094081610c94565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610969578485fd5b6109758d828e016105a2565b9b9e9a9d50989b989a9960808a01359960a0810135995060c0810135985060e08101359750610100013595509350505050565b6000602082840312156109b9578081fd5b815167ffffffffffffffff808211156109d0578283fd5b908301906101e082860312156109e4578283fd5b6109ec610b84565b82518152602083015160208201526040830151604082015260608301516060820152610a1a6080840161067a565b6080820152610a2b60a08401610592565b60a0820152610a3c60c08401610592565b60c082015260e083015182811115610a52578485fd5b610a5e878286016105ec565b60e0830152506101008084015183811115610a77578586fd5b610a8388828701610689565b828401525050610120915081830151828201526101409150610aa682840161066f565b91810191909152610160828101519082015261018080830151908201526101a090610ad282840161066f565b918101919091526101c091820151918101919091529392505050565b60008060008060008060008060e0898b031215610b09578182fd5b88359750602089013567ffffffffffffffff811115610b26578283fd5b610b328b828c016105a2565b999c909b509899604081013599606082013599506080820135985060a0820135975060c09091013595509350505050565b60008060408385031215610b75578182fd5b50508035926020909101359150565b6040516101e0810167ffffffffffffffff81118282101715610ba857610ba8610c7e565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610bd757610bd7610c7e565b604052919050565b60008219821115610bf257610bf2610c68565b500190565b600082610c1257634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610c3157610c31610c68565b500290565b600082821015610c4857610c48610c68565b500390565b6000600019821415610c6157610c61610c68565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610ca957600080fd5b50565b8015158114610ca957600080fdfea164736f6c6343000804000a";

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
