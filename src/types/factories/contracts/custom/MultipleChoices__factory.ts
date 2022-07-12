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
  "0x608060405234801561001057600080fd5b50610b79806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063836883161161005057806383688316146100b557806394558f0a146100c8578063dcbfcc97146100db57600080fd5b80634f4d2e1e1461006c578063812acab114610092575b600080fd5b61007f61007a3660046106a5565b6100ee565b6040519081526020015b60405180910390f35b6100a56100a036600461087f565b61024e565b6040519015158152602001610089565b61007f6100c33660046107f6565b6102c6565b61007f6100d636600461087f565b610355565b61007f6100e936600461074a565b6103fd565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b15801561013357600080fd5b505afa158015610147573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261016f9190810190610911565b905082915060005b8781101561023f5788888281811061019f57634e487b7160e01b600052603260045260246000fd5b90506020020135836101b19190610a91565b9250808260600151141561022f57848787838181106101e057634e487b7160e01b600052603260045260246000fd5b905060200201358a8a8481811061020757634e487b7160e01b600052603260045260246000fd5b905060200201356102189190610ac9565b6102229190610aa9565b61022c9084610ae8565b92505b61023881610aff565b9050610177565b50509998505050505050505050565b600080838561025d898d610a91565b6102679190610a91565b6102719190610ac9565b9050600086888b8b8781811061029757634e487b7160e01b600052603260045260246000fd5b905060200201356102a89190610a91565b6102b29190610ac9565b909110159c9b505050505050505050505050565b6000806102d3858a610a91565b9050600084878a8a878181106102f957634e487b7160e01b600052603260045260246000fd5b9050602002013561030a9190610ac9565b6103149190610aa9565b905060006103228689610ae8565b905080866103308486610ae8565b61033a9190610ac9565b6103449190610aa9565b9d9c50505050505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b15801561039a57600080fd5b505afa1580156103ae573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103d69190810190610911565b9050846103e38789610ac9565b6103ed9190610aa9565b9c9b505050505050505050505050565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b15801561044257600080fd5b505afa158015610456573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261047e9190810190610911565b905060008660200135905060008260e0015182815181106104af57634e487b7160e01b600052603260045260246000fd5b60200260200101519050841561051a57876020013583606001511461051a5760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b8661033a828a35610ac9565b805161053181610b46565b919050565b60008083601f840112610547578182fd5b50813567ffffffffffffffff81111561055e578182fd5b6020830191508360208260051b850101111561057957600080fd5b9250929050565b600082601f830112610590578081fd5b8151602067ffffffffffffffff8211156105ac576105ac610b30565b8160051b6105bb828201610a60565b8381528281019086840183880185018910156105d5578687fd5b8693505b858410156105f75780518352600193909301929184019184016105d9565b50979650505050505050565b805161053181610b5e565b80516002811061053157600080fd5b600082601f83011261062d578081fd5b815167ffffffffffffffff81111561064757610647610b30565b602061065b601f8301601f19168201610a60565b828152858284870101111561066e578384fd5b835b8381101561068b578581018301518282018401528201610670565b8381111561069b57848385840101525b5095945050505050565b600080600080600080600080600060e08a8c0312156106c2578485fd5b89356106cd81610b46565b985060208a0135975060408a0135965060608a013567ffffffffffffffff808211156106f7578687fd5b6107038d838e01610536565b909850965060808c013591508082111561071b578586fd5b506107288c828d01610536565b9a9d999c50979a96999598959660a08101359660c09091013595509350505050565b6000806000806000806000806000898b03610140811215610769578586fd5b8a3561077481610b46565b995060208b0135985060408b0135975060608b013567ffffffffffffffff81111561079d578687fd5b6107a98d828e01610536565b9098509650506060607f19820112156107c0578485fd5b5060808a01935060e08a013592506101008a013591506101208a01356107e581610b5e565b809150509295985092959850929598565b60008060008060008060008060006101008a8c031215610814578485fd5b893561081f81610b46565b985060208a0135975060408a0135965060608a013567ffffffffffffffff811115610848578586fd5b6108548c828d01610536565b9a9d999c50979a97999860808901359860a0810135985060c0810135975060e0013595509350505050565b6000806000806000806000806000806101208b8d03121561089e578384fd5b8a356108a981610b46565b995060208b0135985060408b0135975060608b013567ffffffffffffffff8111156108d2578485fd5b6108de8d828e01610536565b9b9e9a9d50989b989a9960808a01359960a0810135995060c0810135985060e08101359750610100013595509350505050565b600060208284031215610922578081fd5b815167ffffffffffffffff80821115610939578283fd5b908301906101a0828603121561094d578283fd5b610955610a36565b825181526020830151602082015260408301516040820152606083015160608201526109836080840161060e565b608082015261099460a08401610526565b60a08201526109a560c08401610526565b60c082015260e0830151828111156109bb578485fd5b6109c787828601610580565b60e08301525061010080840151838111156109e0578586fd5b6109ec8882870161061d565b828401525050610120915081830151828201526101409150610a0f828401610603565b91810191909152610160828101519082015261018091820151918101919091529392505050565b6040516101a0810167ffffffffffffffff81118282101715610a5a57610a5a610b30565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610a8957610a89610b30565b604052919050565b60008219821115610aa457610aa4610b1a565b500190565b600082610ac457634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610ae357610ae3610b1a565b500290565b600082821015610afa57610afa610b1a565b500390565b6000600019821415610b1357610b13610b1a565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610b5b57600080fd5b50565b8015158114610b5b57600080fdfea164736f6c6343000804000a";

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
