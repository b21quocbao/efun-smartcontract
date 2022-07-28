/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Handicap,
  HandicapInterface,
} from "../../../contracts/custom/Handicap";

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
  "0x608060405234801561001057600080fd5b50611035806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063936c479d116100765780639f5c36f01161005b5780639f5c36f014610121578063ccb32ac514610133578063dcbfcc971461014957600080fd5b8063936c479d146100eb57806394558f0a1461010e57600080fd5b806326232a2e146100a85780632fb88c4e146100be5780634f4d2e1e146100c557806383688316146100d8575b600080fd5b60005b6040519081526020015b60405180910390f35b60326100ab565b6100ab6100d3366004610aaa565b61015c565b6100ab6100e6366004610bfb565b61049f565b6100fe6100f9366004610e5c565b610530565b60405190151581526020016100b5565b6100ab61011c366004610c84565b6105ca565b6100ab61012f366004610ed1565b5090565b6100ab610141366004610a7f565b600092915050565b6100ab610157366004610b4f565b610672565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b1580156101a157600080fd5b505afa1580156101b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101dd9190810190610d16565b905082915060005b878110156104905788888281811061020d57634e487b7160e01b600052603260045260246000fd5b905060200201358361021f9190610f4d565b92508015801561023457508160600151600414155b8061024d575080600414801561024d5750606082015115155b15610480578015801561026257506060820151155b8061027c575080600414801561027c575081606001516004145b156102f157848787838181106102a257634e487b7160e01b600052603260045260246000fd5b905060200201358a8a848181106102c957634e487b7160e01b600052603260045260246000fd5b905060200201356102da9190610f85565b6102e49190610f65565b6102ee9084610fa4565b92505b80158015610303575081606001516001145b8061031d575080600414801561031d575081606001516003145b156103a95784600288888481811061034557634e487b7160e01b600052603260045260246000fd5b90506020020135876103579190610f4d565b8b8b8581811061037757634e487b7160e01b600052603260045260246000fd5b905060200201356103889190610f85565b6103929190610f65565b61039c9190610f65565b6103a69084610fa4565b92505b801580156103bb575081606001516002145b806103d557508060041480156103d5575081606001516002145b1561040f578888828181106103fa57634e487b7160e01b600052603260045260246000fd5b905060200201358361040c9190610fa4565b92505b80158015610421575081606001516003145b8061043b575080600414801561043b575081606001516001145b1561048057600289898381811061046257634e487b7160e01b600052603260045260246000fd5b905060200201356104739190610f65565b61047d9084610fa4565b92505b61048981610fbb565b90506101e5565b50509998505050505050505050565b6000806104ac858a610f4d565b9050600084878a8a878181106104d257634e487b7160e01b600052603260045260246000fd5b905060200201356104e39190610f85565b6104ed9190610f65565b905060006104fb8689610fa4565b905080866105098486610fa4565b6105139190610f85565b61051d9190610f65565b93505050505b9998505050505050505050565b600080838561053f898d610f4d565b6105499190610f4d565b6105539190610f85565b90506000878a8a8681811061057857634e487b7160e01b600052603260045260246000fd5b905060200201356105899190610f4d565b905060006105978883610f85565b90508083101560008615806105ac5750866004145b90508180156105b85750805b9e9d5050505050505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b15801561060f57600080fd5b505afa158015610623573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261064b9190810190610d16565b9050846106588789610f85565b6106629190610f65565b9c9b505050505050505050505050565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b1580156106b757600080fd5b505afa1580156106cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106f39190810190610d16565b905060008660200135905060008260e00151828151811061072457634e487b7160e01b600052603260045260246000fd5b6020026020010151905084156107b5578115801561074757508260600151600414155b8061076057508160041480156107605750606083015115155b6107b05760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b6107d5565b866107c1828a35610f85565b6107cb9190610f65565b9350505050610523565b811580156107e557506060830151155b806107ff57508160041480156107ff575082606001516004145b1561081d5786610810828a35610f85565b61081a9190610f65565b93505b8115801561082f575082606001516001145b806108495750816004148015610849575082606001516003145b1561087d5786600261085b8383610f4d565b610866908b35610f85565b6108709190610f65565b61087a9190610f65565b93505b8115801561088f575082606001516002145b806108a957508160041480156108a9575082606001516002145b156108b357873593505b811580156108c5575082606001516003145b806108df57508160041480156108df575082606001516001145b156108f05761051d60028935610f65565b5050509998505050505050505050565b805161090b81611002565b919050565b60008083601f840112610921578182fd5b50813567ffffffffffffffff811115610938578182fd5b6020830191508360208260051b850101111561095357600080fd5b9250929050565b600082601f83011261096a578081fd5b8151602067ffffffffffffffff82111561098657610986610fec565b8160051b610995828201610f1c565b8381528281019086840183880185018910156109af578687fd5b8693505b858410156109d15780518352600193909301929184019184016109b3565b50979650505050505050565b805161090b8161101a565b80516003811061090b57600080fd5b600082601f830112610a07578081fd5b815167ffffffffffffffff811115610a2157610a21610fec565b6020610a35601f8301601f19168201610f1c565b8281528582848701011115610a48578384fd5b835b83811015610a65578581018301518282018401528201610a4a565b83811115610a7557848385840101525b5095945050505050565b60008060408385031215610a91578182fd5b8235610a9c81611002565b946020939093013593505050565b600080600080600080600080600060e08a8c031215610ac7578485fd5b8935610ad281611002565b985060208a0135975060408a0135965060608a013567ffffffffffffffff80821115610afc578687fd5b610b088d838e01610910565b909850965060808c0135915080821115610b20578586fd5b50610b2d8c828d01610910565b9a9d999c50979a96999598959660a08101359660c09091013595509350505050565b6000806000806000806000806000898b03610140811215610b6e578586fd5b8a35610b7981611002565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610ba2578687fd5b610bae8d828e01610910565b9098509650506060607f1982011215610bc5578485fd5b5060808a01935060e08a013592506101008a013591506101208a0135610bea8161101a565b809150509295985092959850929598565b60008060008060008060008060006101008a8c031215610c19578485fd5b8935610c2481611002565b985060208a0135975060408a0135965060608a013567ffffffffffffffff811115610c4d578586fd5b610c598c828d01610910565b9a9d999c50979a97999860808901359860a0810135985060c0810135975060e0013595509350505050565b6000806000806000806000806000806101208b8d031215610ca3578384fd5b8a35610cae81611002565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610cd7578485fd5b610ce38d828e01610910565b9b9e9a9d50989b989a9960808a01359960a0810135995060c0810135985060e08101359750610100013595509350505050565b600060208284031215610d27578081fd5b815167ffffffffffffffff80821115610d3e578283fd5b908301906101e08286031215610d52578283fd5b610d5a610ef2565b82518152602083015160208201526040830151604082015260608301516060820152610d88608084016109e8565b6080820152610d9960a08401610900565b60a0820152610daa60c08401610900565b60c082015260e083015182811115610dc0578485fd5b610dcc8782860161095a565b60e0830152506101008084015183811115610de5578586fd5b610df1888287016109f7565b828401525050610120915081830151828201526101409150610e148284016109dd565b91810191909152610160828101519082015261018080830151908201526101a090610e408284016109dd565b918101919091526101c091820151918101919091529392505050565b60008060008060008060008060e0898b031215610e77578182fd5b88359750602089013567ffffffffffffffff811115610e94578283fd5b610ea08b828c01610910565b999c909b509899604081013599606082013599506080820135985060a0820135975060c09091013595509350505050565b60008060408385031215610ee3578182fd5b50508035926020909101359150565b6040516101e0810167ffffffffffffffff81118282101715610f1657610f16610fec565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610f4557610f45610fec565b604052919050565b60008219821115610f6057610f60610fd6565b500190565b600082610f8057634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610f9f57610f9f610fd6565b500290565b600082821015610fb657610fb6610fd6565b500390565b6000600019821415610fcf57610fcf610fd6565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461101757600080fd5b50565b801515811461101757600080fdfea164736f6c6343000804000a";

type HandicapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HandicapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Handicap__factory extends ContractFactory {
  constructor(...args: HandicapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Handicap> {
    return super.deploy(overrides || {}) as Promise<Handicap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Handicap {
    return super.attach(address) as Handicap;
  }
  override connect(signer: Signer): Handicap__factory {
    return super.connect(signer) as Handicap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HandicapInterface {
    return new utils.Interface(_abi) as HandicapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Handicap {
    return new Contract(address, _abi, signerOrProvider) as Handicap;
  }
}
