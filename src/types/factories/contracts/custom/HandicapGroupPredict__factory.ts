/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HandicapGroupPredict,
  HandicapGroupPredictInterface,
} from "../../../contracts/custom/HandicapGroupPredict";

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
    name: "calculateRewardSponsor",
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
    name: "calculateSponsor",
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
  "0x608060405234801561001057600080fd5b50610e19806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063812acab11161005b578063812acab1146100ce57806383688316146100fc5780638d1d6ea61461011957806394558f0a1461012c57600080fd5b8063061bf2dc146100825780634f4d2e1e146100a8578063693d113b146100bb575b600080fd5b610095610090366004610a52565b61013f565b6040519081526020015b60405180910390f35b6100956100b636600461090a565b610462565b6100956100c93660046109af565b610611565b6100ec6100dc366004610b98565b60019a9950505050505050505050565b604051901515815260200161009f565b61009561010a366004610b0f565b60009998505050505050505050565b610095610127366004610b98565b6106e3565b61009561013a366004610b98565b61072b565b604051632e34059960e01b8152600481018b905260009081906001600160a01b038e1690632e3405999060240160006040518083038186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101c09190810190610c2a565b90506020880135831561024e57801580156101e057508160600151600414155b806101f957508060041480156101f95750606082015115155b6102495760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b6102a1565b8a8a8781811061026e57634e487b7160e01b600052603260045260246000fd5b602002919091013590508935610284878f610d71565b61028e9190610da9565b6102989190610d89565b92505050610453565b801580156102b157506060820151155b806102cb57508060041480156102cb575081606001516004145b1561031d578a8a878181106102f057634e487b7160e01b600052603260045260246000fd5b602002919091013590508935610306878f610d71565b6103109190610da9565b61031a9190610d89565b92505b8015801561032f575081606001516001145b806103495750806004148015610349575081606001516003145b156103da578a8a8781811061036e57634e487b7160e01b600052603260045260246000fd5b9050602002013589600001358660028f8f8f8c81811061039e57634e487b7160e01b600052603260045260246000fd5b905060200201356103af9190610d71565b6103b99190610d89565b6103c39190610d71565b6103cd9190610da9565b6103d79190610d89565b92505b801580156103ec575081606001516002145b806104065750806004148015610406575081606001516002145b1561041057883592505b80158015610422575081606001516003145b8061043c575080600414801561043c575081606001516001145b156104505761044d60028a35610d89565b92505b50505b9b9a5050505050505050505050565b604051632e34059960e01b81526004810189905260009081906001600160a01b038c1690632e3405999060240160006040518083038186803b1580156104a757600080fd5b505afa1580156104bb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104e39190810190610c2a565b90506000428260400151620151806104fb9190610d71565b1115801561052d575060018260800151600181111561052a57634e487b7160e01b600052602160045260246000fd5b14155b90506000826060015160001480610548575082606001516001145b801561057b57508989600081811061057057634e487b7160e01b600052603260045260246000fd5b905060200201356000145b90506000836060015160041480610596575083606001516003145b80156105c957508a8a60048181106105be57634e487b7160e01b600052603260045260246000fd5b905060200201356000145b606085015190915060021482806105dd5750815b806105e55750805b806105ed5750835b156105fa578695506105ff565b600095505b50505050509998505050505050505050565b604051632e34059960e01b8152600481018a905260009081906001600160a01b038d1690632e3405999060240160006040518083038186803b15801561065657600080fd5b505afa15801561066a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106929190810190610c2a565b90508888858181106106b457634e487b7160e01b600052603260045260246000fd5b602002919091013590506106c9883585610da9565b6106d39190610d89565b9c9b505050505050505050505050565b60008588888581811061070657634e487b7160e01b600052603260045260246000fd5b905060200201356107179190610d71565b6107218784610da9565b6104539190610d89565b60008588888581811061074e57634e487b7160e01b600052603260045260246000fd5b9050602002013561075f9190610d71565b868061076b858d610d71565b6107759190610d71565b6107219190610da9565b805161078a81610df4565b919050565b60008083601f8401126107a0578182fd5b50813567ffffffffffffffff8111156107b7578182fd5b6020830191508360208260051b85010111156107d257600080fd5b9250929050565b600082601f8301126107e9578081fd5b8151602067ffffffffffffffff82111561080557610805610dde565b8160051b610814828201610d40565b83815282810190868401838801850189101561082e578687fd5b8693505b85841015610850578051835260019390930192918401918401610832565b50979650505050505050565b80516002811061078a57600080fd5b600082601f83011261087b578081fd5b815167ffffffffffffffff81111561089557610895610dde565b60206108a9601f8301601f19168201610d40565b82815285828487010111156108bc578384fd5b835b838110156108d95785810183015182820184015282016108be565b838111156108e957848385840101525b5095945050505050565b600060608284031215610904578081fd5b50919050565b600080600080600080600080600060e08a8c031215610927578485fd5b893561093281610df4565b985060208a0135975060408a0135965060608a013567ffffffffffffffff8082111561095c578687fd5b6109688d838e0161078f565b909850965060808c0135915080821115610980578586fd5b5061098d8c828d0161078f565b9a9d999c50979a96999598959660a08101359660c09091013595509350505050565b6000806000806000806000806000806101608b8d0312156109ce578081fd5b8a356109d981610df4565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610a02578182fd5b610a0e8d828e0161078f565b9098509650610a2290508c60808d016108f3565b945060e08b013593506101008b013592506101208b013591506101408b013590509295989b9194979a5092959850565b60008060008060008060008060008060006101808c8e031215610a73578081fd5b8b35610a7e81610df4565b9a5060208c0135995060408c0135985060608c013567ffffffffffffffff811115610aa7578182fd5b610ab38e828f0161078f565b9099509750610ac790508d60808e016108f3565b955060e08c013594506101008c013593506101208c013592506101408c013591506101608c01358015158114610afb578182fd5b809150509295989b509295989b9093969950565b60008060008060008060008060006101008a8c031215610b2d578283fd5b8935610b3881610df4565b985060208a0135975060408a0135965060608a013567ffffffffffffffff811115610b61578384fd5b610b6d8c828d0161078f565b9a9d999c50979a97999860808901359860a0810135985060c0810135975060e0013595509350505050565b6000806000806000806000806000806101208b8d031215610bb7578384fd5b8a35610bc281610df4565b995060208b0135985060408b0135975060608b013567ffffffffffffffff811115610beb578485fd5b610bf78d828e0161078f565b9b9e9a9d50989b989a9960808a01359960a0810135995060c0810135985060e08101359750610100013595509350505050565b600060208284031215610c3b578081fd5b815167ffffffffffffffff80821115610c52578283fd5b908301906101208286031215610c66578283fd5b610c6e610d16565b82518152602083015160208201526040830151604082015260608301516060820152610c9c6080840161085c565b6080820152610cad60a0840161077f565b60a0820152610cbe60c0840161077f565b60c082015260e083015182811115610cd4578485fd5b610ce0878286016107d9565b60e0830152506101008084015183811115610cf9578586fd5b610d058882870161086b565b918301919091525095945050505050565b604051610120810167ffffffffffffffff81118282101715610d3a57610d3a610dde565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610d6957610d69610dde565b604052919050565b60008219821115610d8457610d84610dc8565b500190565b600082610da457634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610dc357610dc3610dc8565b500290565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610e0957600080fd5b5056fea164736f6c6343000804000a";

type HandicapGroupPredictConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HandicapGroupPredictConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HandicapGroupPredict__factory extends ContractFactory {
  constructor(...args: HandicapGroupPredictConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HandicapGroupPredict> {
    return super.deploy(overrides || {}) as Promise<HandicapGroupPredict>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HandicapGroupPredict {
    return super.attach(address) as HandicapGroupPredict;
  }
  override connect(signer: Signer): HandicapGroupPredict__factory {
    return super.connect(signer) as HandicapGroupPredict__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HandicapGroupPredictInterface {
    return new utils.Interface(_abi) as HandicapGroupPredictInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HandicapGroupPredict {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as HandicapGroupPredict;
  }
}
