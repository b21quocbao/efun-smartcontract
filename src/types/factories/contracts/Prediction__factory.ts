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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositLP",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getLiquidityPool",
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
  "0x608060405234801561001057600080fd5b50612d38806100206000396000f3fe6080604052600436106101d85760003560e01c806394a6414211610102578063dabb164111610095578063e70eb39211610064578063e70eb3921461055e578063f2fde38b1461057e578063f56ca9c21461059e578063f7c618c1146105be57600080fd5b8063dabb1641146104e8578063e41cbdef146104fe578063e4a301161461051e578063e6ae1a971461053e57600080fd5b8063b492b331116100d1578063b492b33114610455578063c0854f4014610482578063c19360d2146104b2578063c415b95c146104c857600080fd5b806394a64142146103d557806395ccea67146103f55780639cb1a43b14610415578063a42dce801461043557600080fd5b80633a49d5521161017a5780636da1709e116101495780636da1709e1461036c578063715018a6146103825780638aee8127146103975780638da5cb5b146103b757600080fd5b80633a49d5521461030357806344550928146103235780634c442f53146103365780636b578cf51461035657600080fd5b80632ae94863116101b65780632ae948631461026b57806330fb9acf146102ae578063329f23f1146102d057806333026368146102f057600080fd5b8063109fea86146101dd57806322a4119014610206578063254641e414610233575b600080fd5b3480156101e957600080fd5b506101f3609f5481565b6040519081526020015b60405180910390f35b34801561021257600080fd5b50610226610221366004612780565b6105de565b6040516101fd9190612a6d565b34801561023f57600080fd5b5060a454610253906001600160a01b031681565b6040516001600160a01b0390911681526020016101fd565b34801561027757600080fd5b506101f3610286366004612586565b33600090815260a6602090815260408083206001600160a01b03949094168352929052205490565b3480156102ba57600080fd5b506102ce6102c9366004612586565b6106c2565b005b3480156102dc57600080fd5b506102ce6102eb366004612750565b61073b565b6102ce6102fe3660046127f0565b610788565b34801561030f57600080fd5b506102ce61031e366004612586565b610e03565b6102ce6103313660046125e2565b610e6d565b34801561034257600080fd5b506102ce610351366004612750565b610ed1565b34801561036257600080fd5b506101f360a15481565b34801561037857600080fd5b506101f360a25481565b34801561038e57600080fd5b506102ce610f1e565b3480156103a357600080fd5b506102ce6103b2366004612586565b610f72565b3480156103c357600080fd5b506033546001600160a01b0316610253565b3480156103e157600080fd5b5060a554610253906001600160a01b031681565b34801561040157600080fd5b506102ce6104103660046125e2565b610fdc565b34801561042157600080fd5b506102ce610430366004612750565b61107b565b34801561044157600080fd5b506102ce610450366004612586565b6110c8565b34801561046157600080fd5b506104756104703660046127af565b611132565b6040516101fd9190612a92565b34801561048e57600080fd5b506104a261049d3660046125a2565b61125b565b6040516101fd9493929190612b29565b3480156104be57600080fd5b506101f360a35481565b3480156104d457600080fd5b50609c54610253906001600160a01b031681565b3480156104f457600080fd5b506101f360a05481565b34801561050a57600080fd5b506102ce610519366004612750565b611320565b34801561052a57600080fd5b506102ce610539366004612882565b61136d565b34801561054a57600080fd5b506101f3610559366004612586565b6113f5565b34801561056a57600080fd5b506102ce610579366004612780565b611483565b34801561058a57600080fd5b506102ce610599366004612586565b61193b565b3480156105aa57600080fd5b50609e54610253906001600160a01b031681565b3480156105ca57600080fd5b50609d54610253906001600160a01b031681565b6040805180820190915260008152606060208201526001600160a01b0382166000908152609860209081526040808320868452825291829020825180840190935280548352600181018054919284019161063790612c74565b80601f016020809104026020016040519081016040528092919081815260200182805461066390612c74565b80156106b05780601f10610685576101008083540402835291602001916106b0565b820191906000526020600020905b81548152906001019060200180831161069357829003601f168201915b50505050508152505090505b92915050565b6033546001600160a01b0316331461070f5760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c83398151915260448201526064015b60405180910390fd5b60a480546001600160a01b039092166001600160a01b0319928316811790915560a58054909216179055565b6033546001600160a01b031633146107835760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b60a155565b60a454604051632e34059960e01b8152600481018790526000916001600160a01b031690632e3405999060240160006040518083038186803b1580156107cd57600080fd5b505afa1580156107e1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610809919081019061262d565b905060008160a001519050600061085b83610120015188888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a0b92505050565b9050346001600160a01b038616156108705750835b8163014113b814156108c45760405162461bcd60e51b815260206004820152601660248201527f707265646963742d6e6f742d696e2d6f7074696f6e73000000000000000000006044820152606401610706565b835142108015906108d9575083602001514211155b6109255760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642d707265646963742d74696d650000000000000000000000006044820152606401610706565b60008460800151600181111561094b57634e487b7160e01b600052602160045260246000fd5b146109985760405162461bcd60e51b815260206004820152601360248201527f6576656e742d6e6f742d617661696c61626c65000000000000000000000000006044820152606401610706565b6001600160a01b038616600090815260976020908152604080832033845282528083208c8452909152902060019081015410610a165760405162461bcd60e51b815260206004820152601460248201527f6576656e742d6578636565642d707265646963740000000000000000000000006044820152606401610706565b60a5546001600160a01b0387811660008181526098602090815260408083208f8452825280832054938352609982528083208f84529091529081902090518388169463fa29edd99416928e929091610a71908f908f906128eb565b908152602001604051809103902054868a61014001518981518110610aa657634e487b7160e01b600052603260045260246000fd5b602002602001015160a660008d61010001516001600160a01b03166001600160a01b0316815260200190815260200160002060008f6001600160a01b03166001600160a01b0316815260200190815260200160002054609b548b6040518a63ffffffff1660e01b8152600401610b69999897969594939291906001600160a01b03999099168952602089019790975260408801959095526060870193909352608086019190915260a085015260c084015260e08301526101008201526101200190565b60206040518083038186803b158015610b8157600080fd5b505afa158015610b95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb9919061260d565b610c055760405162461bcd60e51b815260206004820152601460248201527f6e6f742d656e6f7567682d6c69717569646974790000000000000000000000006044820152606401610706565b6001600160a01b03861615610c2957610c296001600160a01b038716333088611a74565b60008111610c795760405162461bcd60e51b815260206004820152601160248201527f707265646963742d76616c7565203d20300000000000000000000000000000006044820152606401610706565b60408051602080820180845260008084526001600160a01b038b168152609883528481208e82529092529290209051610cb8926001909201919061230e565b506001600160a01b03861660009081526098602090815260408083208c845290915281208054839290610cec908490612bda565b90915550506001600160a01b03861660009081526099602090815260408083208c8452909152908190209051829190610d28908b908b906128eb565b90815260200160405180910390206000828254610d459190612bda565b90915550506001600160a01b038616600090815260976020908152604080832033845282528083208c84529091529020610d83906002018989612392565b506001600160a01b038616600090815260976020908152604080832033845282528083208c845290915290819020828155600190810155517fa7cb0310cdc1541951049ac60f7a8a6e15eb80db9aad2faed05f5aeb9e39f17590610df0908b908b908b908b908790612ada565b60405180910390a1505050505050505050565b6033546001600160a01b03163314610e4b5760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b609e80546001600160a01b0319166001600160a01b0392909216919091179055565b346001600160a01b03831615610e94575080610e946001600160a01b038416333084611a74565b33600090815260a6602090815260408083206001600160a01b038716845290915281208054839290610ec7908490612bda565b9091555050505050565b6033546001600160a01b03163314610f195760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b60a055565b6033546001600160a01b03163314610f665760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b610f706000611b12565b565b6033546001600160a01b03163314610fba5760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b609d80546001600160a01b0319166001600160a01b0392909216919091179055565b6033546001600160a01b031633146110245760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b6001600160a01b0382166110635760405133904780156108fc02916000818181858888f1935050505015801561105e573d6000803e3d6000fd5b505050565b6110776001600160a01b0383163383611b64565b5050565b6033546001600160a01b031633146110c35760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b609f55565b6033546001600160a01b031633146111105760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b609c80546001600160a01b0319166001600160a01b0392909216919091179055565b61115f60405180608001604052806000815260200160008152602001606081526020016000151581525090565b6001600160a01b038083166000908152609760209081526040808320938716835292815282822087835281529082902082516080810184528154815260018201549281019290925260028101805492939192918401916111be90612c74565b80601f01602080910402602001604051908101604052809291908181526020018280546111ea90612c74565b80156112375780601f1061120c57610100808354040283529160200191611237565b820191906000526020600020905b81548152906001019060200180831161121a57829003601f168201915b50505091835250506003919091015460ff16151560209091015290505b9392505050565b60976020908152600093845260408085208252928452828420905282529020805460018201546002830180549293919261129490612c74565b80601f01602080910402602001604051908101604052809291908181526020018280546112c090612c74565b801561130d5780601f106112e25761010080835404028352916020019161130d565b820191906000526020600020905b8154815290600101906020018083116112f057829003601f168201915b5050506003909301549192505060ff1684565b6033546001600160a01b031633146113685760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b60a255565b60006113796001611b94565b90508015611391576000805461ff0019166101001790555b611399611caf565b6113a1611d22565b60a3839055609b829055801561105e576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b60006001600160a01b03821661140c575047919050565b6040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b15801561144b57600080fd5b505afa15801561145f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bc9190612768565b60a454604051632e34059960e01b8152600481018490526000916001600160a01b031690632e3405999060240160006040518083038186803b1580156114c857600080fd5b505afa1580156114dc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611504919081019061262d565b6001600160a01b038316600090815260976020908152604080832033845282528083208784529091529020600190810154919250146115855760405162461bcd60e51b815260206004820152600b60248201527f6e6f742d707265646963740000000000000000000000000000000000000000006044820152606401610706565b6001816080015160018111156115ab57634e487b7160e01b600052602160045260246000fd5b146115f85760405162461bcd60e51b815260206004820152601060248201527f6576656e742d6e6f742d66696e697368000000000000000000000000000000006044820152606401610706565b6001600160a01b0382166000908152609760209081526040808320338452825280832086845290915290206003015460ff16156116775760405162461bcd60e51b815260206004820152600760248201527f636c61696d6564000000000000000000000000000000000000000000000000006044820152606401610706565b6101208101516001600160a01b03831660009081526097602090815260408083203384528252808320878452909152812060020180549192611742929091906116bf90612c74565b80601f01602080910402602001604051908101604052809291908181526020018280546116eb90612c74565b80156117385780601f1061170d57610100808354040283529160200191611738565b820191906000526020600020905b81548152906001019060200180831161171b57829003601f168201915b5050505050611a0b565b60a083015160a5546001600160a01b0386811660008181526098602090815260408083208c8452825280832054848452609983528184208d855283528184209484526097835281842033855283528184208d8552909252808320905197985091968487169563dc5e10989516938c9390916117c091600201906128fb565b9081526040805160209281900383019020546001600160a01b038d1660009081526097845282812033825284528281208f825290935291206101408b015180518b90811061181e57634e487b7160e01b600052603260045260246000fd5b6020026020010151609b548b6040518963ffffffff1660e01b815260040161184d98979695949392919061296a565b60206040518083038186803b15801561186557600080fd5b505afa158015611879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189d9190612768565b915081156118ea576118b0853384611d95565b6001600160a01b038516600090815260976020908152604080832033845282528083208984529091529020600301805460ff191660011790555b604080518781526001600160a01b03871660208201529081018390527f24b5efa61dd1cfc659205a97fb8ed868f3cb8c81922bab2b96423e5de1de2cb79060600160405180910390a1505050505050565b6033546001600160a01b031633146119835760405162461bcd60e51b81526020600482018190526024820152600080516020612d0c8339815191526044820152606401610706565b6001600160a01b0381166119ff5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610706565b611a0881611b12565b50565b6000805b8351811015611a6757611a49848281518110611a3b57634e487b7160e01b600052603260045260246000fd5b602002602001015184611f52565b15611a555790506106bc565b80611a5f81612caf565b915050611a0f565b5063014113b89392505050565b6040516001600160a01b0380851660248301528316604482015260648101829052611b0c9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611fab565b50505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040516001600160a01b03831660248201526044810182905261105e90849063a9059cbb60e01b90606401611aa8565b60008054610100900460ff1615611c22578160ff166001148015611bb75750303b155b611c1a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610706565b506000919050565b60005460ff808416911610611c905760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610706565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16611d1a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610706565b610f70612090565b600054610100900460ff16611d8d5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610706565b610f70612104565b600080609b5460a15484611da99190612c12565b611db39190612bf2565b90506001600160a01b038516611ebc57609f5415611de857609b54609f54611ddb9085612c12565b611de59190612bf2565b91505b8115611e2a57609c546040516001600160a01b039091169083156108fc029084906000818181858888f19350505050158015611e28573d6000803e3d6000fd5b505b6001600160a01b0384166108fc82611e428587612c31565b611e4c9190612c31565b6040518115909202916000818181858888f19350505050158015611e74573d6000803e3d6000fd5b508015611eb757609e546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015611eb5573d6000803e3d6000fd5b505b611f4b565b60a05415611ee157609b5460a054611ed49085612c12565b611ede9190612bf2565b91505b8115611f0157609c54611f01906001600160a01b03878116911684611b64565b611f2b8482611f108587612c31565b611f1a9190612c31565b6001600160a01b0388169190611b64565b8015611f4b57609e54611f4b906001600160a01b03878116911683611b64565b5050505050565b600081604051602001611f6591906128cf565b6040516020818303038152906040528051906020012083604051602001611f8c91906128cf565b6040516020818303038152906040528051906020012014905092915050565b6000612000826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121769092919063ffffffff16565b80519091501561105e578080602001905181019061201e919061260d565b61105e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610706565b600054610100900460ff166120fb5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610706565b610f7033611b12565b600054610100900460ff1661216f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610706565b6001606555565b6060612185848460008561218d565b949350505050565b6060824710156122055760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610706565b6001600160a01b0385163b61225c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610706565b600080866001600160a01b0316858760405161227891906128cf565b60006040518083038185875af1925050503d80600081146122b5576040519150601f19603f3d011682016040523d82523d6000602084013e6122ba565b606091505b50915091506122ca8282866122d5565b979650505050505050565b606083156122e4575081611254565b8251156122f45782518084602001fd5b8160405162461bcd60e51b81526004016107069190612a5a565b82805461231a90612c74565b90600052602060002090601f01602090048101928261233c5760008555612382565b82601f1061235557805160ff1916838001178555612382565b82800160010185558215612382579182015b82811115612382578251825591602001919060010190612367565b5061238e929150612406565b5090565b82805461239e90612c74565b90600052602060002090601f0160209004810192826123c05760008555612382565b82601f106123d95782800160ff19823516178555612382565b82800160010185558215612382579182015b828111156123825782358255916020019190600101906123eb565b5b8082111561238e5760008155600101612407565b8051611caa81612cf6565b600082601f830112612436578081fd5b8151602061244b61244683612bb6565b612b85565b80838252828201915082860187848660051b890101111561246a578586fd5b855b858110156124ab57815167ffffffffffffffff81111561248a578788fd5b6124988a87838c0101612524565b855250928401929084019060010161246c565b5090979650505050505050565b600082601f8301126124c8578081fd5b815160206124d861244683612bb6565b80838252828201915082860187848660051b89010111156124f7578586fd5b855b858110156124ab578151845292840192908401906001016124f9565b805160028110611caa57600080fd5b600082601f830112612534578081fd5b815167ffffffffffffffff81111561254e5761254e612ce0565b612561601f8201601f1916602001612b85565b818152846020838601011115612575578283fd5b612185826020830160208701612c48565b600060208284031215612597578081fd5b813561125481612cf6565b6000806000606084860312156125b6578182fd5b83356125c181612cf6565b925060208401356125d181612cf6565b929592945050506040919091013590565b600080604083850312156125f4578182fd5b82356125ff81612cf6565b946020939093013593505050565b60006020828403121561261e578081fd5b81518015158114611254578182fd5b60006020828403121561263e578081fd5b815167ffffffffffffffff80821115612655578283fd5b908301906101608286031215612669578283fd5b612671612b5b565b82518152602083015160208201526040830151604082015260608301518281111561269a578485fd5b6126a687828601612524565b6060830152506126b860808401612515565b60808201526126c960a0840161241b565b60a08201526126da60c0840161241b565b60c082015260e083015160e08201526101006126f781850161241b565b90820152610120838101518381111561270e578586fd5b61271a88828701612426565b8284015250506101408084015183811115612733578586fd5b61273f888287016124b8565b918301919091525095945050505050565b600060208284031215612761578081fd5b5035919050565b600060208284031215612779578081fd5b5051919050565b60008060408385031215612792578182fd5b8235915060208301356127a481612cf6565b809150509250929050565b6000806000606084860312156127c3578283fd5b8335925060208401356127d581612cf6565b915060408401356127e581612cf6565b809150509250925092565b600080600080600060808688031215612807578283fd5b85359450602086013567ffffffffffffffff80821115612825578485fd5b818801915088601f830112612838578485fd5b813581811115612846578586fd5b896020828501011115612857578586fd5b602083019650809550505050604086013561287181612cf6565b949793965091946060013592915050565b60008060408385031215612894578182fd5b50508035926020909101359150565b600081518084526128bb816020860160208601612c48565b601f01601f19169290920160200192915050565b600082516128e1818460208701612c48565b9190910192915050565b8183823760009101908152919050565b600080835461290981612c74565b6001828116801561292157600181146129325761295e565b60ff1984168752828701945061295e565b8786526020808720875b858110156129555781548a82015290840190820161293c565b50505082870194505b50929695505050505050565b60006101006001600160a01b038b16835260208a8185015289604085015288606085015281608085015287548285015260019150818801546101208501526002880160806101408601528381546129c081612c74565b806101808901526101a0868316600081146129e257600181146129f757612a22565b60ff1984168a8301526101c08a019450612a22565b858952868920895b84811015612a1a5781548c82018501529089019088016129ff565b8b0183019550505b505050506003999099015460ff1615156101608601525050505060a081019390935260c083019190915260e090910152949350505050565b60208152600061125460208301846128a3565b60208152815160208201526000602083015160408084015261218560608401826128a3565b6020815281516020820152602082015160408201526000604083015160806060840152612ac260a08401826128a3565b90506060840151151560808401528091505092915050565b85815260806020820152836080820152838560a083013760008060a0868401015260a0601f19601f87011683010190506001600160a01b03841660408301528260608301529695505050505050565b848152836020820152608060408201526000612b4860808301856128a3565b9050821515606083015295945050505050565b604051610160810167ffffffffffffffff81118282101715612b7f57612b7f612ce0565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715612bae57612bae612ce0565b604052919050565b600067ffffffffffffffff821115612bd057612bd0612ce0565b5060051b60200190565b60008219821115612bed57612bed612cca565b500190565b600082612c0d57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615612c2c57612c2c612cca565b500290565b600082821015612c4357612c43612cca565b500390565b60005b83811015612c63578181015183820152602001612c4b565b83811115611b0c5750506000910152565b600181811c90821680612c8857607f821691505b60208210811415612ca957634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612cc357612cc3612cca565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611a0857600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a164736f6c6343000804000a";

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
