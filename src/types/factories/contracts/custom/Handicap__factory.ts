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
  "0x608060405234801561001057600080fd5b506110e1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063812acab111610050578063812acab1146100a557806383688316146100c857806394558f0a146100db57600080fd5b80634f4d2e1e1461006c5780636341acbc14610092575b600080fd5b61007f61007a366004610c57565b6100ee565b6040519081526020015b60405180910390f35b61007f6100a0366004610cfc565b610431565b6100b86100b3366004610e2e565b610663565b6040519015158152602001610089565b61007f6100d6366004610da5565b6107d7565b61007f6100e9366004610e2e565b6108c7565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b15801561013357600080fd5b505afa158015610147573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261016f9190810190610ec0565b905082915060005b878110156104225788888281811061019f57634e487b7160e01b600052603260045260246000fd5b90506020020135836101b19190611007565b9250801580156101c657508160600151600414155b806101df57508060041480156101df5750606082015115155b1561041257801580156101f457506060820151155b8061020e575080600114801561020e575081606001516004145b15610283578487878381811061023457634e487b7160e01b600052603260045260246000fd5b905060200201358a8a8481811061025b57634e487b7160e01b600052603260045260246000fd5b9050602002013561026c919061103f565b610276919061101f565b610280908461105e565b92505b80158015610295575081606001516001145b806102af57508060011480156102af575081606001516003145b1561033b578460028888848181106102d757634e487b7160e01b600052603260045260246000fd5b90506020020135876102e99190611007565b8b8b8581811061030957634e487b7160e01b600052603260045260246000fd5b9050602002013561031a919061103f565b610324919061101f565b61032e919061101f565b610338908461105e565b92505b8015801561034d575081606001516002145b806103675750806001148015610367575081606001516002145b156103a15788888281811061038c57634e487b7160e01b600052603260045260246000fd5b905060200201358361039e919061105e565b92505b801580156103b3575081606001516003145b806103cd57508060011480156103cd575081606001516001145b156104125760028989838181106103f457634e487b7160e01b600052603260045260246000fd5b90506020020135610405919061101f565b61040f908461105e565b92505b61041b81611075565b9050610177565b50509998505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b15801561047657600080fd5b505afa15801561048a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104b29190810190610ec0565b90506020870135801580156104cc57508160600151600414155b806104e557508060041480156104e55750606082015115155b6105355760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b8015801561054557506060820151155b8061055f575080600114801561055f575081606001516004145b1561057d5785610570888a3561103f565b61057a919061101f565b92505b8015801561058f575081606001516001145b806105a957508060011480156105a9575081606001516003145b156105dd578560026105bb8983611007565b6105c6908b3561103f565b6105d0919061101f565b6105da919061101f565b92505b801580156105ef575081606001516002145b806106095750806001148015610609575081606001516002145b1561061357873592505b80158015610625575081606001516003145b8061063f575080600114801561063f575081606001516001145b15610653576106506002893561101f565b92505b50509a9950505050505050505050565b6000808385610672898d611007565b61067c9190611007565b610686919061103f565b90506000878a8a868181106106ab57634e487b7160e01b600052603260045260246000fd5b905060200201356106bc9190611007565b905060008a8a868181106106e057634e487b7160e01b600052603260045260246000fd5b905060200201358c6106f2919061105e565b90506000610700898461103f565b905060006002610710898c611007565b61071a908661103f565b610724919061101f565b9050600061073360028661101f565b9050600060026107438b8e611007565b61074d908761103f565b610757919061101f565b9050600061076660028761101f565b90508488101560006107788387611007565b8a1015905060006107898686611007565b8b1015905060008d158061079d57508d6004145b90508380156107a95750825b80156107b25750815b80156107bb5750805b9c505050505050505050505050509a9950505050505050505050565b6000808061080e8a878b8b8881811061080057634e487b7160e01b600052603260045260246000fd5b905060200201358a8961096f565b905060006108458b888c8c8981811061083757634e487b7160e01b600052603260045260246000fd5b905060200201358b8a6109bc565b9050600061087c8c898d8d8a81811061086e57634e487b7160e01b600052603260045260246000fd5b905060200201358c8b610a4a565b9050818310801561088c57508083105b15610899578293506108ab565b8082106108a657806108a8565b815b93505b6108b5878561103f565b9e9d5050505050505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b15801561090c57600080fd5b505afa158015610920573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109489190810190610ec0565b905084610955878961103f565b61095f919061101f565b9c9b505050505050505050505050565b60008061097c8688611007565b9050600061098a858761103f565b90506000610998858761105e565b9050806109a5838561105e565b6109af919061101f565b9998505050505050505050565b6000806109c98688611007565b905060006109d7868961105e565b905060008460026109e88289611007565b6109f2908a61103f565b6109fc919061101f565b610a06919061101f565b90506000610a1560028461101f565b90506000610a23878961105e565b90506000610a3260028361101f565b90508084610a40858961105e565b610955919061105e565b600080610a578688611007565b90506000610a65868961105e565b90506000610a7460028861101f565b90506000856002610a85828a611007565b610a8f908661103f565b610a99919061101f565b610aa3919061101f565b90506000610ab260028861101f565b90508082610ac0858861105e565b610aca919061105e565b610ad4919061101f565b9b9a5050505050505050505050565b8051610aee816110bc565b919050565b60008083601f840112610b04578182fd5b50813567ffffffffffffffff811115610b1b578182fd5b6020830191508360208260051b8501011115610b3657600080fd5b9250929050565b600082601f830112610b4d578081fd5b8151602067ffffffffffffffff821115610b6957610b696110a6565b8160051b610b78828201610fd6565b838152828101908684018388018501891015610b92578687fd5b8693505b85841015610bb4578051835260019390930192918401918401610b96565b50979650505050505050565b805160028110610aee57600080fd5b600082601f830112610bdf578081fd5b815167ffffffffffffffff811115610bf957610bf96110a6565b6020610c0d601f8301601f19168201610fd6565b8281528582848701011115610c20578384fd5b835b83811015610c3d578581018301518282018401528201610c22565b83811115610c4d57848385840101525b5095945050505050565b600080600080600080600080600060e08a8c031215610c74578485fd5b8935610c7f816110bc565b985060208a0135975060408a0135965060608a013567ffffffffffffffff80821115610ca9578687fd5b610cb58d838e01610af3565b909850965060808c0135915080821115610ccd578586fd5b50610cda8c828d01610af3565b9a9d999c50979a96999598959660a08101359660c09091013595509350505050565b6000806000806000806000806000808a8c03610160811215610d1c578182fd5b8b35610d27816110bc565b9a5060208c0135995060408c0135985060608c013567ffffffffffffffff811115610d50578283fd5b610d5c8e828f01610af3565b9099509750506060607f1982011215610d73578182fd5b50989b979a509598949750929560808501955060e0850135946101008101359450610120810135935061014001359150565b60008060008060008060008060006101008a8c031215610dc3578485fd5b8935610dce816110bc565b985060208a0135975060408a0135965060608a013567ffffffffffffffff811115610df7578586fd5b610e038c828d01610af3565b9a9d999c50979a97999860808901359860a0810135985060c0810135975060e0013595509350505050565b6000806000806000806000806000806101208b8d031215610e4d578384fd5b8a35610e58816110bc565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610e81578485fd5b610e8d8d828e01610af3565b9b9e9a9d50989b989a9960808a01359960a0810135995060c0810135985060e08101359750610100013595509350505050565b600060208284031215610ed1578081fd5b815167ffffffffffffffff80821115610ee8578283fd5b908301906101208286031215610efc578283fd5b610f04610fac565b82518152602083015160208201526040830151604082015260608301516060820152610f3260808401610bc0565b6080820152610f4360a08401610ae3565b60a0820152610f5460c08401610ae3565b60c082015260e083015182811115610f6a578485fd5b610f7687828601610b3d565b60e0830152506101008084015183811115610f8f578586fd5b610f9b88828701610bcf565b918301919091525095945050505050565b604051610120810167ffffffffffffffff81118282101715610fd057610fd06110a6565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610fff57610fff6110a6565b604052919050565b6000821982111561101a5761101a611090565b500190565b60008261103a57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561105957611059611090565b500290565b60008282101561107057611070611090565b500390565b600060001982141561108957611089611090565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146110d157600080fd5b5056fea164736f6c6343000804000a";

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
