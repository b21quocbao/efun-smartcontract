/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OverUnder,
  OverUnderInterface,
} from "../../../contracts/custom/OverUnder";

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
  "0x608060405234801561001057600080fd5b50610e47806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063836883161161005057806383688316146100b557806394558f0a146100c8578063dcbfcc97146100db57600080fd5b80634f4d2e1e1461006c578063812acab114610092575b600080fd5b61007f61007a366004610934565b6100ee565b6040519081526020015b60405180910390f35b6100a56100a0366004610b0e565b610295565b6040519015158152602001610089565b61007f6100c3366004610a85565b610408565b61007f6100d6366004610b0e565b610592565b61007f6100e93660046109d9565b61063a565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b15801561013357600080fd5b505afa158015610147573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261016f9190810190610ba0565b905082915060005b8781101561028657600061018c600283610dbe565b15801561019d575082606001518210155b905060006101ac600284610dbe565b60011480156101bf575083606001518311155b90508a8a848181106101e157634e487b7160e01b600052603260045260246000fd5b90506020020135856101f39190610d41565b945081806101fe5750805b15610273578689898581811061022457634e487b7160e01b600052603260045260246000fd5b905060200201358c8c8681811061024b57634e487b7160e01b600052603260045260246000fd5b9050602002013561025c9190610d6d565b6102669190610d59565b6102709086610d8c565b94505b50508061027f90610da3565b9050610177565b50509998505050505050505050565b6000806102a3600284610dbe565b6103105788886102b4856001610d41565b8181106102d157634e487b7160e01b600052603260045260246000fd5b905060200201358989858181106102f857634e487b7160e01b600052603260045260246000fd5b905060200201356103099190610d41565b9050610375565b888861031d600186610d8c565b81811061033a57634e487b7160e01b600052603260045260246000fd5b9050602002013589898581811061036157634e487b7160e01b600052603260045260246000fd5b905060200201356103729190610d41565b90505b600088610383876002610d6d565b61038d9190610d59565b90506000858261039d8b86610d41565b6103a79190610d41565b6103b19190610d6d565b90506000888a8d8d898181106103d757634e487b7160e01b600052603260045260246000fd5b905060200201356103e89190610d41565b6103f29190610d6d565b909110159e9d5050505050505050505050505050565b600080610416600284610dbe565b610483578787610427856001610d41565b81811061044457634e487b7160e01b600052603260045260246000fd5b9050602002013588888581811061046b57634e487b7160e01b600052603260045260246000fd5b9050602002013561047c9190610d41565b90506104e8565b8787610490600186610d8c565b8181106104ad57634e487b7160e01b600052603260045260246000fd5b905060200201358888858181106104d457634e487b7160e01b600052603260045260246000fd5b905060200201356104e59190610d41565b90505b6000876104f6876002610d6d565b6105009190610d59565b9050600061050e8284610d41565b9050600086898c8c8981811061053457634e487b7160e01b600052603260045260246000fd5b905060200201356105459190610d6d565b61054f9190610d59565b9050600061055d888b610d8c565b9050808861056b8486610d8c565b6105759190610d6d565b61057f9190610d59565b9f9e505050505050505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b1580156105d757600080fd5b505afa1580156105eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106139190810190610ba0565b9050846106208789610d6d565b61062a9190610d59565b9c9b505050505050505050505050565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b15801561067f57600080fd5b505afa158015610693573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106bb9190810190610ba0565b905060008660200135905060008260e0015182815181106106ec57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600289602001356107099190610dbe565b15801561071e57508360600151896020013510155b90506000610731600260208c0135610dbe565b6001148015610748575084606001518a6020013511155b905086156107a95781806107595750805b6107a95760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b88610575848c35610d6d565b80516107c081610e14565b919050565b60008083601f8401126107d6578182fd5b50813567ffffffffffffffff8111156107ed578182fd5b6020830191508360208260051b850101111561080857600080fd5b9250929050565b600082601f83011261081f578081fd5b8151602067ffffffffffffffff82111561083b5761083b610dfe565b8160051b61084a828201610d10565b838152828101908684018388018501891015610864578687fd5b8693505b85841015610886578051835260019390930192918401918401610868565b50979650505050505050565b80516107c081610e2c565b8051600281106107c057600080fd5b600082601f8301126108bc578081fd5b815167ffffffffffffffff8111156108d6576108d6610dfe565b60206108ea601f8301601f19168201610d10565b82815285828487010111156108fd578384fd5b835b8381101561091a5785810183015182820184015282016108ff565b8381111561092a57848385840101525b5095945050505050565b600080600080600080600080600060e08a8c031215610951578485fd5b893561095c81610e14565b985060208a0135975060408a0135965060608a013567ffffffffffffffff80821115610986578687fd5b6109928d838e016107c5565b909850965060808c01359150808211156109aa578586fd5b506109b78c828d016107c5565b9a9d999c50979a96999598959660a08101359660c09091013595509350505050565b6000806000806000806000806000898b036101408112156109f8578586fd5b8a35610a0381610e14565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610a2c578687fd5b610a388d828e016107c5565b9098509650506060607f1982011215610a4f578485fd5b5060808a01935060e08a013592506101008a013591506101208a0135610a7481610e2c565b809150509295985092959850929598565b60008060008060008060008060006101008a8c031215610aa3578485fd5b8935610aae81610e14565b985060208a0135975060408a0135965060608a013567ffffffffffffffff811115610ad7578586fd5b610ae38c828d016107c5565b9a9d999c50979a97999860808901359860a0810135985060c0810135975060e0013595509350505050565b6000806000806000806000806000806101208b8d031215610b2d578384fd5b8a35610b3881610e14565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610b61578485fd5b610b6d8d828e016107c5565b9b9e9a9d50989b989a9960808a01359960a0810135995060c0810135985060e08101359750610100013595509350505050565b600060208284031215610bb1578081fd5b815167ffffffffffffffff80821115610bc8578283fd5b908301906101e08286031215610bdc578283fd5b610be4610ce6565b82518152602083015160208201526040830151604082015260608301516060820152610c126080840161089d565b6080820152610c2360a084016107b5565b60a0820152610c3460c084016107b5565b60c082015260e083015182811115610c4a578485fd5b610c568782860161080f565b60e0830152506101008084015183811115610c6f578586fd5b610c7b888287016108ac565b828401525050610120915081830151828201526101409150610c9e828401610892565b91810191909152610160828101519082015261018080830151908201526101a090610cca828401610892565b918101919091526101c091820151918101919091529392505050565b6040516101e0810167ffffffffffffffff81118282101715610d0a57610d0a610dfe565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610d3957610d39610dfe565b604052919050565b60008219821115610d5457610d54610dd2565b500190565b600082610d6857610d68610de8565b500490565b6000816000190483118215151615610d8757610d87610dd2565b500290565b600082821015610d9e57610d9e610dd2565b500390565b6000600019821415610db757610db7610dd2565b5060010190565b600082610dcd57610dcd610de8565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610e2957600080fd5b50565b8015158114610e2957600080fdfea164736f6c6343000804000a";

type OverUnderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OverUnderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OverUnder__factory extends ContractFactory {
  constructor(...args: OverUnderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OverUnder> {
    return super.deploy(overrides || {}) as Promise<OverUnder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OverUnder {
    return super.attach(address) as OverUnder;
  }
  override connect(signer: Signer): OverUnder__factory {
    return super.connect(signer) as OverUnder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OverUnderInterface {
    return new utils.Interface(_abi) as OverUnderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OverUnder {
    return new Contract(address, _abi, signerOrProvider) as OverUnder;
  }
}
