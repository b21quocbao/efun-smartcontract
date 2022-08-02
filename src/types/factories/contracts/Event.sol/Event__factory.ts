/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Event, EventInterface } from "../../../contracts/Event.sol/Event";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finalTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimTime",
        type: "uint256",
      },
    ],
    name: "EventResultUpdated",
    type: "event",
  },
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
    inputs: [
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
    ],
    name: "blockEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "_times",
        type: "uint256[3]",
      },
      {
        internalType: "address",
        name: "_helperAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_odds",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "_datas",
        type: "string",
      },
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pro",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_affiliate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_hostFee",
        type: "uint256",
      },
    ],
    name: "createSingleEvent",
    outputs: [
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "events",
    outputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadlineTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resultIndex",
        type: "uint256",
      },
      {
        internalType: "enum EDataTypes.EventStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "helperAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "_datas",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pro",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isBlock",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "finalTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "affiliate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "hostFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "fulfill",
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
    ],
    name: "info",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadlineTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "resultIndex",
            type: "uint256",
          },
          {
            internalType: "enum EDataTypes.EventStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "helperAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "odds",
            type: "uint256[]",
          },
          {
            internalType: "string",
            name: "_datas",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "pro",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isBlock",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "finalTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "affiliate",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "hostFee",
            type: "uint256",
          },
        ],
        internalType: "struct EDataTypes.Event",
        name: "_event",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "jobId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nEvents",
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
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_jobId",
        type: "bytes32",
      },
    ],
    name: "setOracle",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
    ],
    name: "unblockEvent",
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
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "updateEventResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612b91806100206000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80638da5cb5b116100b2578063c2939d9711610081578063ca83bfeb11610066578063ca83bfeb1461024b578063e94d2f4a1461025e578063f2fde38b1461027157600080fd5b8063c2939d971461022f578063c422c1fa1461023857600080fd5b80638da5cb5b146101e25780638dc654a2146101fd578063a191ca5e14610205578063bca321e51461021857600080fd5b80636e04ff0d116100ee5780636e04ff0d1461019e578063715018a6146101bf5780637ac7f518146101c75780638129fc1c146101da57600080fd5b80630b791430146101205780632e3405991461015657806337441996146101765780634585e33b1461018b575b600080fd5b61013361012e3660046125d1565b610284565b60405161014d9e9d9c9b9a9998979695949392919061288c565b60405180910390f35b6101696101643660046125d1565b610390565b60405161014d9190612780565b61018961018436600461251f565b610597565b005b610189610199366004612564565b610724565b6101b16101ac366004612564565b6108a9565b60405161014d929190612765565b610189610997565b6101896101d53660046125d1565b610a02565b610189610ae7565b6035546040516001600160a01b03909116815260200161014d565b610189610b69565b6101896102133660046123c0565b610d25565b61022160015481565b60405190815260200161014d565b61022160755481565b610189610246366004612601565b610dbc565b6101896102593660046125d1565b611092565b61022161026c3660046123fb565b611172565b61018961027f3660046123a6565b611454565b6000602081905290815260409020805460018201546002830154600384015460048501546005860154600787018054969795969495939460ff8416946101009094046001600160a01b039081169493169291906102e090612ad0565b80601f016020809104026020016040519081016040528092919081815260200182805461030c90612ad0565b80156103595780601f1061032e57610100808354040283529160200191610359565b820191906000526020600020905b81548152906001019060200180831161033c57829003601f168201915b5050505060088301546009840154600a850154600b860154600c870154600d909701549596939560ff93841695509193909216908e565b610398612135565b600080838152602001908152602001600020604051806101e0016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff16600281111561041057634e487b7160e01b600052602160045260246000fd5b600281111561042f57634e487b7160e01b600052602160045260246000fd5b815260048201546001600160a01b036101009091048116602080840191909152600584015490911660408084019190915260068401805482518185028101850190935280835260609094019391929091908301828280156104af57602002820191906000526020600020905b81548152602001906001019080831161049b575b505050505081526020016007820180546104c890612ad0565b80601f01602080910402602001604051908101604052809291908181526020018280546104f490612ad0565b80156105415780601f1061051657610100808354040283529160200191610541565b820191906000526020600020905b81548152906001019060200180831161052457829003601f168201915b505050918352505060088201546020820152600982015460ff90811615156040830152600a8301546060830152600b8301546080830152600c83015416151560a0820152600d9091015460c09091015292915050565b6000808083815b815181101561071b5760008282815181106105c957634e487b7160e01b600052603260045260246000fd5b016020015160f81c9050603081108015906105e75750603a8160ff16105b1561061857603060ff82166105fd86600a612a6e565b6106079190612957565b6106119190612a8d565b9350610708565b856106295783945060019550610703565b600085815260208190526040902042600a8201819055600b909101558361066b576000858152602081905260409020600901805460ff19166001179055610689565b610676600185612a8d565b6000868152602081905260409020600301555b6000858152602081815260409182902060048101805460ff19166002179055600a810154600b909101548351338152928301899052928201879052606082015260808101919091527f6f45429fae79975053159c09d1b30186ec4e21c7590841b36748fa79d86f6d149060a00160405180910390a1600095505b600093505b508061071381612b05565b91505061059e565b50505050505050565b600061073a60755430633744199660e01b611533565b905061079b6040518060400160405280600381526020016219d95d60ea1b81525084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508694939250506115c49050565b6107e8604051806040016040528060048152602001630e0c2e8d60e31b815250604051806040016040528060048152602001636461746160e01b815250836115c49092919063ffffffff16565b6107f38160006115e7565b506000805b838110156108a257600085858381811061082257634e487b7160e01b600052603260045260246000fd5b919091013560f81c915050603081108015906108415750603a8160ff16105b1561087257603060ff821661085785600a612a6e565b6108619190612957565b61086b9190612a8d565b925061088f565b6000928352602083905260408320600401805460ff191660011790555b508061089a81612b05565b9150506107f8565b5050505050565b600060608060005b60015481101561098b57600081815260208190526040902060080154158015906108eb575060008181526020819052604090206002015415155b801561090857506000818152602081905260409020600201544210155b8015610945575060008181526020819052604081206004015460ff16600281111561094357634e487b7160e01b600052602160045260246000fd5b145b1561097b5760019350816109588261160a565b60405160200161096992919061269f565b60405160208183030381529060405291505b61098481612b05565b90506108b1565b50809150509250929050565b6035546001600160a01b031633146109f65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b610a006000611744565b565b6000818152602081905260409020600a0154421015610a635760405162461bcd60e51b815260206004820152601760248201527f66696e616c5f74696d65203c3d2074696d657374616d7000000000000000000060448201526064016109ed565b6000818152602081905260409020600b0154421115610ac45760405162461bcd60e51b815260206004820152601760248201527f636c61696d5f74696d65203e3d2074696d657374616d7000000000000000000060448201526064016109ed565b600090815260208190526040902060098101805460ff1916905542600b90910155565b6000610af36001611796565b90508015610b0b576002805461ff0019166101001790555b6000600155610b186118b3565b610b20611926565b8015610b66576002805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6035546001600160a01b03163314610bc35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109ed565b6000610bd76071546001600160a01b031690565b6040516370a0823160e01b81523060048201529091506001600160a01b0382169063a9059cbb90339083906370a082319060240160206040518083038186803b158015610c2357600080fd5b505afa158015610c37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5b91906125e9565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b158015610ca157600080fd5b505af1158015610cb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd991906124fc565b610b665760405162461bcd60e51b815260206004820152601260248201527f556e61626c6520746f207472616e73666572000000000000000000000000000060448201526064016109ed565b6035546001600160a01b03163314610d7f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109ed565b607180546001600160a01b0319166001600160a01b038516179055607280546001600160a01b0319166001600160a01b0384161790556075555050565b600082815260208190526040902060068101548210610e1d5760405162461bcd60e51b815260206004820152601160248201527f63616e6e6f742d66696e642d696e64657800000000000000000000000000000060448201526064016109ed565b60058101546001600160a01b03163314610e795760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064016109ed565b4281600201541115610ecd5760405162461bcd60e51b815260206004820152601560248201527f656e645f74696d65203c3d2074696d657374616d70000000000000000000000060448201526064016109ed565b60028101541580610ef057504281600201546202a300610eed9190612957565b10155b610f3c5760405162461bcd60e51b815260206004820152601e60248201527f656e645f74696d65202b20322064617973203e3d2074696d657374616d70000060448201526064016109ed565b600881015415610f8e5760405162461bcd60e51b815260206004820152600d60248201527f6e6f742070726f206576656e740000000000000000000000000000000000000060448201526064016109ed565b6002600482015460ff166002811115610fb757634e487b7160e01b600052602160045260246000fd5b14156110055760405162461bcd60e51b815260206004820152601460248201527f6576656e7420616c72656164792066696e69736800000000000000000000000060448201526064016109ed565b42600a820181905561101a906202a300612957565b600b82018190556003820183905560048201805460ff19166002179055600a8201546040805133815260208101879052908101859052606081019190915260808101919091527f6f45429fae79975053159c09d1b30186ec4e21c7590841b36748fa79d86f6d149060a00160405180910390a1505050565b6000818152602081905260409020600a01544210156110f35760405162461bcd60e51b815260206004820152601760248201527f66696e616c5f74696d65203c3d2074696d657374616d7000000000000000000060448201526064016109ed565b6000818152602081905260409020600b01544211156111545760405162461bcd60e51b815260206004820152601760248201527f636c61696d5f74696d65203e3d2074696d657374616d7000000000000000000060448201526064016109ed565b6000908152602081905260409020600901805460ff19166001179055565b60208901518951600091116111c95760405162461bcd60e51b815260206004820152601a60248201527f646561646c696e655f74696d65203e2073746172745f74696d6500000000000060448201526064016109ed565b60408a015160208b0151106112205760405162461bcd60e51b815260206004820152601860248201527f656e645f74696d65203e20646561646c696e655f74696d65000000000000000060448201526064016109ed565b50600154604080516101e0810182528b5181526020808d0151818301528c8301518284015260006060830181905260808301526001600160a01b03808d1660a0840152881660c083015282518a820281810183019094528a8152919260e0840192918c918c91829190850190849080828437600092018290525093855250505060208083018a905260408084018990526060808501849052608080860185905260a0860185905289151560c087015260e0909501889052868452838352928190208551815591850151600183810191909155908501516002808401919091559285015160038301559284015160048201805492949193909260ff19169190849081111561133d57634e487b7160e01b600052602160045260246000fd5b021790555060a08201516004820180547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b039384160217905560c08301516005830180546001600160a01b0319169190921617905560e082015180516113b89160068401916020909101906121e0565b5061010082015180516113d591600784019160209091019061222b565b50610120820151600882015561014082015160098201805491151560ff19928316179055610160830151600a830155610180830151600b8301556101a0830151600c83018054911515919092161790556101c090910151600d909101556001805490600061144283612b05565b91905055509998505050505050505050565b6035546001600160a01b031633146114ae5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109ed565b6001600160a01b03811661152a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016109ed565b610b6681611744565b6115716040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b6115af6040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b6115bb81868686611a30565b95945050505050565b60808301516115d39083611aa3565b60808301516115e29082611aa3565b505050565b607254600090611601906001600160a01b03168484611aba565b90505b92915050565b60608161162e5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611658578061164281612b05565b91506116519050600a8361296f565b9150611632565b60008167ffffffffffffffff81111561168157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156116ab576020820181803683370190505b5090505b841561173c576116c0600183612a8d565b91506116cd600a86612b20565b6116d8906030612957565b60f81b8183815181106116fb57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611735600a8661296f565b94506116af565b949350505050565b603580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600254600090610100900460ff1615611826578160ff1660011480156117bb5750303b155b61181e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016109ed565b506000919050565b60025460ff8084169116106118945760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016109ed565b506002805460ff191660ff92909216919091179055600190565b919050565b600254610100900460ff1661191e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016109ed565b610a00611b73565b600254610100900460ff166119915760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016109ed565b670de0b6b3a7640000606755600160738190556000606855606980546001600160a01b0319908116909155606a919091556002606b557f90430203e2d9ce04f00738d355173358b054545ecb52218de9c6fb01cbd9aeaf606c557f89cbf5af14e0328a3cd3a734f92c3832d729d431da79b7873a62cbeebd37beb6606d55606e805490911673c89bd4e1632d3a43cb03aaad5262cbe4038bc571179055565b611a6e6040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b611a7e8560800151610100611be7565b50509183526001600160a01b031660208301526001600160e01b031916604082015290565b611ab08260038351611c4c565b6115e28282611d61565b607354600090611acb816001612957565b6073556069546068548551604080880151606a5460808a01515192516000966320214ca360e11b96611b14966001600160a01b03909216959094919330938b92906024016126da565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b0319909316929092179091529050611b6986838684611d88565b9695505050505050565b600254610100900460ff16611bde5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016109ed565b610a0033611744565b604080518082019091526060815260006020820152611c07602083612b20565b15611c2f57611c17602083612b20565b611c22906020612a8d565b611c2c9083612957565b91505b506020828101829052604080518085526000815290920101905290565b60178167ffffffffffffffff1611611c7757611c718360e0600585901b168317611ef5565b50505050565b60ff8167ffffffffffffffff1611611cb557611c9e836018611fe0600586901b1617611ef5565b50611c718367ffffffffffffffff83166001611f1a565b61ffff8167ffffffffffffffff1611611cf457611cdd836019611fe0600586901b1617611ef5565b50611c718367ffffffffffffffff83166002611f1a565b63ffffffff8167ffffffffffffffff1611611d3557611d1e83601a611fe0600586901b1617611ef5565b50611c718367ffffffffffffffff83166004611f1a565b611d4a83601b611fe0600586901b1617611ef5565b50611c718367ffffffffffffffff83166008611f1a565b60408051808201909152606081526000602082015261160183846000015151848551611f40565b6040516bffffffffffffffffffffffff193060601b1660208201526034810184905260009060540160408051808303601f1901815282825280516020918201206000818152607490925291812080546001600160a01b0319166001600160a01b038a1617905590925082917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99190a2607154604051630200057560e51b81526001600160a01b0390911690634000aea090611e4b9088908790879060040161273d565b602060405180830381600087803b158015611e6557600080fd5b505af1158015611e79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e9d91906124fc565b61173c5760405162461bcd60e51b815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f7261604482015262636c6560e81b60648201526084016109ed565b604080518082019091526060815260006020820152611601838460000151518461202a565b60408051808201909152606081526000602082015261173c848560000151518585612086565b6040805180820190915260608152600060208201528251821115611f6357600080fd5b6020850151611f728386612957565b1115611fa557611fa585611f9587602001518786611f909190612957565b612107565b611fa0906002612a6e565b61211e565b600080865180518760208301019350808887011115611fc45787860182525b505050602084015b602084106120045780518252611fe3602083612957565b9150611ff0602082612957565b9050611ffd602085612a8d565b9350611fcc565b51815160001960208690036101000a019081169019919091161790525083949350505050565b6040805180820190915260608152600060208201528360200151831061205f5761205f8485602001516002611fa09190612a6e565b83518051602085830101848153508085141561207c576001810182525b5093949350505050565b60408051808201909152606081526000602082015260208501516120aa8584612957565b11156120be576120be85611f958685612957565b600060016120ce846101006129c6565b6120d89190612a8d565b90508551838682010185831982511617815250805184870111156120fc5783860181525b509495945050505050565b600081831115612118575081611604565b50919050565b815161212a8383611be7565b50611c718382611d61565b604051806101e00160405280600081526020016000815260200160008152602001600081526020016000600281111561217e57634e487b7160e01b600052602160045260246000fd5b815260200160006001600160a01b0316815260200160006001600160a01b031681526020016060815260200160608152602001600081526020016000151581526020016000815260200160008152602001600015158152602001600081525090565b82805482825590600052602060002090810192821561221b579160200282015b8281111561221b578251825591602001919060010190612200565b5061222792915061229e565b5090565b82805461223790612ad0565b90600052602060002090601f016020900481019282612259576000855561221b565b82601f1061227257805160ff191683800117855561221b565b8280016001018555821561221b579182018281111561221b578251825591602001919060010190612200565b5b80821115612227576000815560010161229f565b80356001600160a01b03811681146118ae57600080fd5b60008083601f8401126122db578182fd5b50813567ffffffffffffffff8111156122f2578182fd5b6020830191508360208260051b850101111561230d57600080fd5b9250929050565b80356118ae81612b76565b600082601f83011261232f578081fd5b813567ffffffffffffffff8082111561234a5761234a612b60565b604051601f8301601f19908116603f0116810190828211818310171561237257612372612b60565b8160405283815286602085880101111561238a578485fd5b8360208701602083013792830160200193909352509392505050565b6000602082840312156123b7578081fd5b611601826122b3565b6000806000606084860312156123d4578182fd5b6123dd846122b3565b92506123eb602085016122b3565b9150604084013590509250925092565b60008060008060008060008060006101408a8c031215612419578485fd5b8a601f8b0112612427578485fd5b61242f61292e565b808b60608d018e811115612441578889fd5b885b6003811015612462578235855260209485019490920191600101612443565b50829c5061246f816122b3565b9b505050505060808a013567ffffffffffffffff8082111561248f578687fd5b61249b8d838e016122ca565b909950975060a08c01359150808211156124b3578687fd5b506124c08c828d0161231f565b9550506124cf60c08b016122b3565b935060e08a013592506124e56101008b01612314565b91506101208a013590509295985092959850929598565b60006020828403121561250d578081fd5b815161251881612b76565b9392505050565b60008060408385031215612531578182fd5b82359150602083013567ffffffffffffffff81111561254e578182fd5b61255a8582860161231f565b9150509250929050565b60008060208385031215612576578182fd5b823567ffffffffffffffff8082111561258d578384fd5b818501915085601f8301126125a0578384fd5b8135818111156125ae578485fd5b8660208285010111156125bf578485fd5b60209290920196919550909350505050565b6000602082840312156125e2578081fd5b5035919050565b6000602082840312156125fa578081fd5b5051919050565b60008060408385031215612613578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b838110156120fc57815187529582019590820190600101612635565b60008151808452612669816020860160208601612aa4565b601f01601f19169290920160200192915050565b6003811061269b57634e487b7160e01b600052602160045260246000fd5b9052565b600083516126b1818460208801612aa4565b8351908301906126c5818360208801612aa4565b600b60fa1b9101908152600101949350505050565b60006101006001600160a01b03808c1684528a602085015289604085015280891660608501525063ffffffff60e01b871660808401528560a08401528460c08401528060e084015261272e81840185612651565b9b9a5050505050505050505050565b6001600160a01b03841681528260208201526060604082015260006115bb6060830184612651565b821515815260406020820152600061173c6040830184612651565b6020815281516020820152602082015160408201526040820151606082015260608201516080820152600060808301516127bd60a084018261267d565b5060a08301516001600160a01b03811660c08401525060c08301516001600160a01b03811660e08401525060e08301516101e06101008181860152612806610200860184612622565b9250808601519050610120601f1986850301818701526128268483612651565b9087015161014087810191909152870151909350905061016061284c8187018315159052565b860151610180868101919091528601516101a08087019190915286015190506101c061287b8187018315159052565b959095015193019290925250919050565b8e81528d60208201528c60408201528b60608201526128ae608082018c61267d565b60006001600160a01b03808c1660a0840152808b1660c0840152506101c060e08301526128df6101c083018a612651565b9050876101008301526128f761012083018815159052565b856101408301528461016083015261291461018083018515159052565b826101a08301529f9e505050505050505050505050505050565b6040516060810167ffffffffffffffff8111828210171561295157612951612b60565b60405290565b6000821982111561296a5761296a612b34565b500190565b60008261297e5761297e612b4a565b500490565b600181815b808511156129be5781600019048211156129a4576129a4612b34565b808516156129b157918102915b93841c9390800290612988565b509250929050565b600061160183836000826129dc57506001611604565b816129e957506000611604565b81600181146129ff5760028114612a0957612a25565b6001915050611604565b60ff841115612a1a57612a1a612b34565b50506001821b611604565b5060208310610133831016604e8410600b8410161715612a48575081810a611604565b612a528383612983565b8060001904821115612a6657612a66612b34565b029392505050565b6000816000190483118215151615612a8857612a88612b34565b500290565b600082821015612a9f57612a9f612b34565b500390565b60005b83811015612abf578181015183820152602001612aa7565b83811115611c715750506000910152565b600181811c90821680612ae457607f821691505b6020821081141561211857634e487b7160e01b600052602260045260246000fd5b6000600019821415612b1957612b19612b34565b5060010190565b600082612b2f57612b2f612b4a565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b8015158114610b6657600080fdfea164736f6c6343000804000a";

type EventConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EventConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Event__factory extends ContractFactory {
  constructor(...args: EventConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Event> {
    return super.deploy(overrides || {}) as Promise<Event>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Event {
    return super.attach(address) as Event;
  }
  override connect(signer: Signer): Event__factory {
    return super.connect(signer) as Event__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventInterface {
    return new utils.Interface(_abi) as EventInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Event {
    return new Contract(address, _abi, signerOrProvider) as Event;
  }
}
