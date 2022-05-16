/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Prediction,
  PredictionInterface,
} from "../../contracts/Prediction";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "options",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PredictionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardClaimed",
    type: "event",
  },
  {
    inputs: [],
    name: "bnbRate",
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
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eventData",
    outputs: [
      {
        internalType: "contract IEvent",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventDataAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBNB",
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
    name: "feeCollector",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeEFUN",
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
        name: "eventId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getEventInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "predictionAmount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "predictOptions",
            type: "string",
          },
        ],
        internalType: "struct EDataTypes.PredictStats",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getPredictInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "predictionAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numPredict",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "predictOptions",
            type: "string",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct EDataTypes.Prediction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_sToken",
        type: "address",
      },
    ],
    name: "getSponsorTotal",
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
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenAmount",
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
        name: "_participateRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_oneHundredPrecent",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lotCollector",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lotRate",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "participateRate",
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
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_option",
        type: "string",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "predict",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "predictions",
    outputs: [
      {
        internalType: "uint256",
        name: "predictionAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numPredict",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "predictOptions",
        type: "string",
      },
      {
        internalType: "bool",
        name: "claimed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bnbRate",
        type: "uint256",
      },
    ],
    name: "setBnbRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_eventData",
        type: "address",
      },
    ],
    name: "setEventData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeBNB",
        type: "uint256",
      },
    ],
    name: "setFeeBNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeCollector",
        type: "address",
      },
    ],
    name: "setFeeCollector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_feeEFUN",
        type: "uint256",
      },
    ],
    name: "setFeeEFUN",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lotRate",
        type: "uint256",
      },
    ],
    name: "setFeeLot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lotCollector",
        type: "address",
      },
    ],
    name: "setLotCollector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
    ],
    name: "setRewardToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_sToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setSponsorTotal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612bc9806100206000396000f3fe6080604052600436106101d85760003560e01c806394a6414211610102578063dabb164111610095578063e70eb39211610064578063e70eb39214610568578063f2fde38b14610588578063f56ca9c2146105a8578063f7c618c1146105c857600080fd5b8063dabb1641146104f2578063e41cbdef14610508578063e4a3011614610528578063e6ae1a971461054857600080fd5b8063b492b331116100d1578063b492b3311461045f578063c0854f401461048c578063c19360d2146104bc578063c415b95c146104d257600080fd5b806394a64142146103df57806395ccea67146103ff5780639cb1a43b1461041f578063a42dce801461043f57600080fd5b80634c442f531161017a578063715018a611610149578063715018a61461034c578063858246fa146103615780638aee8127146103a15780638da5cb5b146103c157600080fd5b80634c442f53146102e057806363f08ec9146103005780636b578cf5146103205780636da1709e1461033657600080fd5b806330fb9acf116101b657806330fb9acf1461026b578063329f23f11461028d57806333026368146102ad5780633a49d552146102c057600080fd5b8063109fea86146101dd57806322a4119014610206578063254641e414610233575b600080fd5b3480156101e957600080fd5b506101f3609f5481565b6040519081526020015b60405180910390f35b34801561021257600080fd5b506102266102213660046125de565b6105e8565b6040516101fd91906128fe565b34801561023f57600080fd5b5060a454610253906001600160a01b031681565b6040516001600160a01b0390911681526020016101fd565b34801561027757600080fd5b5061028b6102863660046123b5565b6106cc565b005b34801561029957600080fd5b5061028b6102a83660046125ae565b610745565b61028b6102bb366004612674565b610792565b3480156102cc57600080fd5b5061028b6102db3660046123b5565b610c01565b3480156102ec57600080fd5b5061028b6102fb3660046125ae565b610c6b565b34801561030c57600080fd5b5061028b61031b36600461264e565b610cb8565b34801561032c57600080fd5b506101f360a15481565b34801561034257600080fd5b506101f360a25481565b34801561035857600080fd5b5061028b610d29565b34801561036d57600080fd5b506101f361037c3660046125de565b6001600160a01b03166000908152609a60209081526040808320938352929052205490565b3480156103ad57600080fd5b5061028b6103bc3660046123b5565b610d7d565b3480156103cd57600080fd5b506033546001600160a01b0316610253565b3480156103eb57600080fd5b5060a554610253906001600160a01b031681565b34801561040b57600080fd5b5061028b61041a366004612411565b610de7565b34801561042b57600080fd5b5061028b61043a3660046125ae565b610e86565b34801561044b57600080fd5b5061028b61045a3660046123b5565b610ed3565b34801561046b57600080fd5b5061047f61047a36600461260d565b610f3d565b6040516101fd9190612923565b34801561049857600080fd5b506104ac6104a73660046123d1565b611066565b6040516101fd94939291906129ba565b3480156104c857600080fd5b506101f360a35481565b3480156104de57600080fd5b50609c54610253906001600160a01b031681565b3480156104fe57600080fd5b506101f360a05481565b34801561051457600080fd5b5061028b6105233660046125ae565b61112b565b34801561053457600080fd5b5061028b610543366004612706565b611178565b34801561055457600080fd5b506101f36105633660046123b5565b611200565b34801561057457600080fd5b5061028b6105833660046125de565b61127a565b34801561059457600080fd5b5061028b6105a33660046123b5565b61176a565b3480156105b457600080fd5b50609e54610253906001600160a01b031681565b3480156105d457600080fd5b50609d54610253906001600160a01b031681565b6040805180820190915260008152606060208201526001600160a01b0382166000908152609860209081526040808320868452825291829020825180840190935280548352600181018054919284019161064190612b05565b80601f016020809104026020016040519081016040528092919081815260200182805461066d90612b05565b80156106ba5780601f1061068f576101008083540402835291602001916106ba565b820191906000526020600020905b81548152906001019060200180831161069d57829003601f168201915b50505050508152505090505b92915050565b6033546001600160a01b031633146107195760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d83398151915260448201526064015b60405180910390fd5b60a480546001600160a01b039092166001600160a01b0319928316811790915560a58054909216179055565b6033546001600160a01b0316331461078d5760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b60a155565b60a454604051632e34059960e01b8152600481018790526000916001600160a01b031690632e3405999060240160006040518083038186803b1580156107d757600080fd5b505afa1580156107eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610813919081019061245c565b905061085a81610160015186868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061183a92505050565b63014113b814156108ad5760405162461bcd60e51b815260206004820152601660248201527f707265646963742d6e6f742d696e2d6f7074696f6e73000000000000000000006044820152606401610710565b428160200151111580156108c5575080604001514211155b6109115760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642d707265646963742d74696d650000000000000000000000006044820152606401610710565b60008160a00151600181111561093757634e487b7160e01b600052602160045260246000fd5b146109845760405162461bcd60e51b815260206004820152601360248201527f6576656e742d6e6f742d617661696c61626c65000000000000000000000000006044820152606401610710565b6001600160a01b03831660009081526097602090815260408083203384528252808320898452909152902060019081015410610a025760405162461bcd60e51b815260206004820152601460248201527f6576656e742d6578636565642d707265646963740000000000000000000000006044820152606401610710565b346001600160a01b03841615610a29575081610a296001600160a01b0385163330846118a3565b60008111610a795760405162461bcd60e51b815260206004820152601160248201527f707265646963742d76616c7565203d20300000000000000000000000000000006044820152606401610710565b60408051602080820180845260008084526001600160a01b0389168152609883528481208c82529092529290209051610ab8926001909201919061213d565b506001600160a01b03841660009081526098602090815260408083208a845290915281208054859290610aec908490612a6b565b90915550506001600160a01b03841660009081526099602090815260408083208a8452909152908190209051849190610b289089908990612792565b90815260200160405180910390206000828254610b459190612a6b565b90915550506001600160a01b038416600090815260976020908152604080832033845282528083208a84529091529020610b839060020187876121c1565b506001600160a01b038416600090815260976020908152604080832033845282528083208a845290915290819020848155600190810155517fa7cb0310cdc1541951049ac60f7a8a6e15eb80db9aad2faed05f5aeb9e39f17590610bf0908990899089908990899061296b565b60405180910390a150505050505050565b6033546001600160a01b03163314610c495760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b609e80546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b03163314610cb35760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b60a055565b6033546001600160a01b03163314610d005760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b6001600160a01b039091166000908152609a602090815260408083209483529390529190912055565b6033546001600160a01b03163314610d715760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b610d7b6000611941565b565b6033546001600160a01b03163314610dc55760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b609d80546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b03163314610e2f5760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b6001600160a01b038216610e6e5760405133904780156108fc02916000818181858888f19350505050158015610e69573d6000803e3d6000fd5b505050565b610e826001600160a01b0383163383611993565b5050565b6033546001600160a01b03163314610ece5760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b609f55565b6033546001600160a01b03163314610f1b5760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b609c80546001600160a01b0319166001600160a01b0392909216919091179055565b610f6a60405180608001604052806000815260200160008152602001606081526020016000151581525090565b6001600160a01b03808316600090815260976020908152604080832093871683529281528282208783528152908290208251608081018452815481526001820154928101929092526002810180549293919291840191610fc990612b05565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff590612b05565b80156110425780601f1061101757610100808354040283529160200191611042565b820191906000526020600020905b81548152906001019060200180831161102557829003601f168201915b50505091835250506003919091015460ff16151560209091015290505b9392505050565b60976020908152600093845260408085208252928452828420905282529020805460018201546002830180549293919261109f90612b05565b80601f01602080910402602001604051908101604052809291908181526020018280546110cb90612b05565b80156111185780601f106110ed57610100808354040283529160200191611118565b820191906000526020600020905b8154815290600101906020018083116110fb57829003601f168201915b5050506003909301549192505060ff1684565b6033546001600160a01b031633146111735760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b60a255565b600061118460016119c3565b9050801561119c576000805461ff0019166101001790555b6111a4611ade565b6111ac611b51565b60a3839055609b8290558015610e69576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b15801561124257600080fd5b505afa158015611256573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c691906125c6565b60a454604051632e34059960e01b8152600481018490526000916001600160a01b031690632e3405999060240160006040518083038186803b1580156112bf57600080fd5b505afa1580156112d3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112fb919081019061245c565b6001600160a01b0383166000908152609760209081526040808320338452825280832087845290915290206001908101549192501461137c5760405162461bcd60e51b815260206004820152600b60248201527f6e6f742d707265646963740000000000000000000000000000000000000000006044820152606401610710565b60018160a0015160018111156113a257634e487b7160e01b600052602160045260246000fd5b146113ef5760405162461bcd60e51b815260206004820152601060248201527f6576656e742d6e6f742d66696e697368000000000000000000000000000000006044820152606401610710565b6001600160a01b0382166000908152609760209081526040808320338452825280832086845290915290206003015460ff161561146e5760405162461bcd60e51b815260206004820152600760248201527f636c61696d6564000000000000000000000000000000000000000000000000006044820152606401610710565b6101608101516001600160a01b03831660009081526097602090815260408083203384528252808320878452909152812060020180549192611539929091906114b690612b05565b80601f01602080910402602001604051908101604052809291908181526020018280546114e290612b05565b801561152f5780601f106115045761010080835404028352916020019161152f565b820191906000526020600020905b81548152906001019060200180831161151257829003601f168201915b505050505061183a565b60c083015160a5546001600160a01b0386811660008181526098602090815260408083208c8452825280832054848452609983528184208d855283528184209484526097835281842033855283528184208d8552909252808320905197985091968796958587169563da5a2341959116938d93926115ba91600201906127a2565b908152602001604051809103902054609760008d6001600160a01b03166001600160a01b031681526020019081526020016000206000336001600160a01b03166001600160a01b0316815260200190815260200160002060008e81526020019081526020016000208b61018001518b8151811061164757634e487b7160e01b600052603260045260246000fd5b60200260200101516040518763ffffffff1660e01b815260040161167096959493929190612811565b604080518083038186803b15801561168757600080fd5b505afa15801561169b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bf9190612727565b90935091508215611724576116d5863385611bc4565b6001600160a01b038616600090815260976020908152604080832033845282528083208a84529091529020600301805460ff191660011790558115611724576117248561010001513384611bc4565b604080518881526001600160a01b03881660208201529081018490527f24b5efa61dd1cfc659205a97fb8ed868f3cb8c81922bab2b96423e5de1de2cb790606001610bf0565b6033546001600160a01b031633146117b25760405162461bcd60e51b81526020600482018190526024820152600080516020612b9d8339815191526044820152606401610710565b6001600160a01b03811661182e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610710565b61183781611941565b50565b6000805b83518110156118965761187884828151811061186a57634e487b7160e01b600052603260045260246000fd5b602002602001015184611d81565b156118845790506106c6565b8061188e81612b40565b91505061183e565b5063014113b89392505050565b6040516001600160a01b038085166024830152831660448201526064810182905261193b9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611dda565b50505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040516001600160a01b038316602482015260448101829052610e6990849063a9059cbb60e01b906064016118d7565b60008054610100900460ff1615611a51578160ff1660011480156119e65750303b155b611a495760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610710565b506000919050565b60005460ff808416911610611abf5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610710565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16611b495760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610710565b610d7b611ebf565b600054610100900460ff16611bbc5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610710565b610d7b611f33565b600080609b5460a15484611bd89190612aa3565b611be29190612a83565b90506001600160a01b038516611ceb57609f5415611c1757609b54609f54611c0a9085612aa3565b611c149190612a83565b91505b8115611c5957609c546040516001600160a01b039091169083156108fc029084906000818181858888f19350505050158015611c57573d6000803e3d6000fd5b505b6001600160a01b0384166108fc82611c718587612ac2565b611c7b9190612ac2565b6040518115909202916000818181858888f19350505050158015611ca3573d6000803e3d6000fd5b508015611ce657609e546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015611ce4573d6000803e3d6000fd5b505b611d7a565b60a05415611d1057609b5460a054611d039085612aa3565b611d0d9190612a83565b91505b8115611d3057609c54611d30906001600160a01b03878116911684611993565b611d5a8482611d3f8587612ac2565b611d499190612ac2565b6001600160a01b0388169190611993565b8015611d7a57609e54611d7a906001600160a01b03878116911683611993565b5050505050565b600081604051602001611d949190612776565b6040516020818303038152906040528051906020012083604051602001611dbb9190612776565b6040516020818303038152906040528051906020012014905092915050565b6000611e2f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611fa59092919063ffffffff16565b805190915015610e695780806020019051810190611e4d919061243c565b610e695760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610710565b600054610100900460ff16611f2a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610710565b610d7b33611941565b600054610100900460ff16611f9e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610710565b6001606555565b6060611fb48484600085611fbc565b949350505050565b6060824710156120345760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610710565b6001600160a01b0385163b61208b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610710565b600080866001600160a01b031685876040516120a79190612776565b60006040518083038185875af1925050503d80600081146120e4576040519150601f19603f3d011682016040523d82523d6000602084013e6120e9565b606091505b50915091506120f9828286612104565b979650505050505050565b6060831561211357508161105f565b8251156121235782518084602001fd5b8160405162461bcd60e51b815260040161071091906128eb565b82805461214990612b05565b90600052602060002090601f01602090048101928261216b57600085556121b1565b82601f1061218457805160ff19168380011785556121b1565b828001600101855582156121b1579182015b828111156121b1578251825591602001919060010190612196565b506121bd929150612235565b5090565b8280546121cd90612b05565b90600052602060002090601f0160209004810192826121ef57600085556121b1565b82601f106122085782800160ff198235161785556121b1565b828001600101855582156121b1579182015b828111156121b157823582559160200191906001019061221a565b5b808211156121bd5760008155600101612236565b8051611ad981612b87565b600082601f830112612265578081fd5b8151602061227a61227583612a47565b612a16565b80838252828201915082860187848660051b8901011115612299578586fd5b855b858110156122da57815167ffffffffffffffff8111156122b9578788fd5b6122c78a87838c0101612353565b855250928401929084019060010161229b565b5090979650505050505050565b600082601f8301126122f7578081fd5b8151602061230761227583612a47565b80838252828201915082860187848660051b8901011115612326578586fd5b855b858110156122da57815184529284019290840190600101612328565b805160028110611ad957600080fd5b600082601f830112612363578081fd5b815167ffffffffffffffff81111561237d5761237d612b71565b612390601f8201601f1916602001612a16565b8181528460208386010111156123a4578283fd5b611fb4826020830160208701612ad9565b6000602082840312156123c6578081fd5b813561105f81612b87565b6000806000606084860312156123e5578182fd5b83356123f081612b87565b9250602084013561240081612b87565b929592945050506040919091013590565b60008060408385031215612423578182fd5b823561242e81612b87565b946020939093013593505050565b60006020828403121561244d578081fd5b8151801515811461105f578182fd5b60006020828403121561246d578081fd5b815167ffffffffffffffff80821115612484578283fd5b908301906101a08286031215612498578283fd5b6124a06129ec565b825181526020830151602082015260408301516040820152606083015160608201526080830151828111156124d3578485fd5b6124df87828601612353565b6080830152506124f160a08401612344565b60a082015261250260c0840161224a565b60c082015260e083015182811115612518578485fd5b61252487828601612353565b60e08301525061010061253881850161224a565b90820152610120838101519082015261014061255581850161224a565b90820152610160838101518381111561256c578586fd5b61257888828701612255565b8284015250506101808084015183811115612591578586fd5b61259d888287016122e7565b918301919091525095945050505050565b6000602082840312156125bf578081fd5b5035919050565b6000602082840312156125d7578081fd5b5051919050565b600080604083850312156125f0578182fd5b82359150602083013561260281612b87565b809150509250929050565b600080600060608486031215612621578081fd5b83359250602084013561263381612b87565b9150604084013561264381612b87565b809150509250925092565b600080600060608486031215612662578081fd5b83359250602084013561240081612b87565b60008060008060006080868803121561268b578283fd5b85359450602086013567ffffffffffffffff808211156126a9578485fd5b818801915088601f8301126126bc578485fd5b8135818111156126ca578586fd5b8960208285010111156126db578586fd5b60208301965080955050505060408601356126f581612b87565b949793965091946060013592915050565b60008060408385031215612718578182fd5b50508035926020909101359150565b60008060408385031215612739578182fd5b505080516020909101519092909150565b60008151808452612762816020860160208601612ad9565b601f01601f19169290920160200192915050565b60008251612788818460208701612ad9565b9190910192915050565b8183823760009101908152919050565b60008083546127b081612b05565b600182811680156127c857600181146127d957612805565b60ff19841687528287019450612805565b8786526020808720875b858110156127fc5781548a8201529084019082016127e3565b50505082870194505b50929695505050505050565b6001600160a01b038716815260006020878184015286604084015285606084015260c06080840152845460c084015260018086015460e085015260028601608061010086015283815461286381612b05565b8061014089015261016085831660008114612885576001811461289a576128c5565b60ff1984168a8301526101808a0194506128c5565b858952878920895b848110156128bd5781548c82018501529088019089016128a2565b8b0183019550505b505050506003979097015460ff1615156101208601525050505060a00152949350505050565b60208152600061105f602083018461274a565b602081528151602082015260006020830151604080840152611fb4606084018261274a565b602081528151602082015260208201516040820152600060408301516080606084015261295360a084018261274a565b90506060840151151560808401528091505092915050565b85815260806020820152836080820152838560a083013760008060a0868401015260a0601f19601f87011683010190506001600160a01b03841660408301528260608301529695505050505050565b8481528360208201526080604082015260006129d9608083018561274a565b9050821515606083015295945050505050565b6040516101a0810167ffffffffffffffff81118282101715612a1057612a10612b71565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715612a3f57612a3f612b71565b604052919050565b600067ffffffffffffffff821115612a6157612a61612b71565b5060051b60200190565b60008219821115612a7e57612a7e612b5b565b500190565b600082612a9e57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615612abd57612abd612b5b565b500290565b600082821015612ad457612ad4612b5b565b500390565b60005b83811015612af4578181015183820152602001612adc565b8381111561193b5750506000910152565b600181811c90821680612b1957607f821691505b60208210811415612b3a57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612b5457612b54612b5b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461183757600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a164736f6c6343000804000a";

type PredictionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PredictionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Prediction__factory extends ContractFactory {
  constructor(...args: PredictionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Prediction> {
    return super.deploy(overrides || {}) as Promise<Prediction>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Prediction {
    return super.attach(address) as Prediction;
  }
  override connect(signer: Signer): Prediction__factory {
    return super.connect(signer) as Prediction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PredictionInterface {
    return new utils.Interface(_abi) as PredictionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Prediction {
    return new Contract(address, _abi, signerOrProvider) as Prediction;
  }
}
