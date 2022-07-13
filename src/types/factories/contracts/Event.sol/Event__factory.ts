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
  "0x608060405234801561001057600080fd5b50612a34806100206000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80638129fc1c116100b2578063bca321e511610081578063c422c1fa11610066578063c422c1fa1461024a578063ca83bfeb1461025d578063f2fde38b1461027057600080fd5b8063bca321e514610238578063c2939d971461024157600080fd5b80638129fc1c146101fa5780638da5cb5b146102025780638dc654a21461021d578063a191ca5e1461022557600080fd5b80634585e33b116100ee5780634585e33b146101ab5780636e04ff0d146101be578063715018a6146101df5780637ac7f518146101e757600080fd5b80630b791430146101205780632e34059914610155578063374419961461017557806340168aae1461018a575b600080fd5b61013361012e3660046124a1565b610283565b60405161014c9d9c9b9a99989796959493929190612748565b60405180910390f35b6101686101633660046124a1565b610387565b60405161014c9190612650565b6101886101833660046123ef565b61057b565b005b61019d6101983660046122d5565b610708565b60405190815260200161014c565b6101886101b9366004612434565b6109d8565b6101d16101cc366004612434565b610aad565b60405161014c929190612635565b610188610b7f565b6101886101f53660046124a1565b610be5565b610188610cca565b6035546040516001600160a01b03909116815260200161014c565b610188610d4c565b61018861023336600461229a565b610f08565b61019d60015481565b61019d60755481565b6101886102583660046124d1565b610f9f565b61018861026b3660046124a1565b611268565b61018861027e366004612280565b611350565b6000602081905290815260409020805460018201546002830154600384015460048501546005860154600787018054969795969495939460ff8416946101009094046001600160a01b039081169493169291906102df90612973565b80601f016020809104026020016040519081016040528092919081815260200182805461030b90612973565b80156103585780601f1061032d57610100808354040283529160200191610358565b820191906000526020600020905b81548152906001019060200180831161033b57829003601f168201915b50505060088401546009850154600a860154600b870154600c909701549596929560ff9283169550909350168d565b61038f61202b565b6000828152602081815260409182902082516101c08101845281548152600180830154938201939093526002820154938101939093526003810154606084015260048101549091608084019160ff16908111156103fc57634e487b7160e01b600052602160045260246000fd5b600181111561041b57634e487b7160e01b600052602160045260246000fd5b815260048201546001600160a01b0361010090910481166020808401919091526005840154909116604080840191909152600684018054825181850281018501909352808352606090940193919290919083018282801561049b57602002820191906000526020600020905b815481526020019060010190808311610487575b505050505081526020016007820180546104b490612973565b80601f01602080910402602001604051908101604052809291908181526020018280546104e090612973565b801561052d5780601f106105025761010080835404028352916020019161052d565b820191906000526020600020905b81548152906001019060200180831161051057829003601f168201915b505050918352505060088201546020820152600982015460ff90811615156040830152600a8301546060830152600b8301546080830152600c90920154909116151560a09091015292915050565b6000808083815b81518110156106ff5760008282815181106105ad57634e487b7160e01b600052603260045260246000fd5b016020015160f81c9050603081108015906105cb5750603a8160ff16105b156105fc57603060ff82166105e186600a612911565b6105eb91906127fa565b6105f59190612930565b93506106ec565b8561060d57839450600195506106e7565b600085815260208190526040902042600a8201819055600b909101558361064f576000858152602081905260409020600901805460ff1916600117905561066d565b61065a600185612930565b6000868152602081905260409020600301555b6000858152602081815260409182902060048101805460ff19166001179055600a810154600b909101548351338152928301899052928201879052606082015260808101919091527f6f45429fae79975053159c09d1b30186ec4e21c7590841b36748fa79d86f6d149060a00160405180910390a1600095505b600093505b50806106f7816129a8565b915050610582565b50505050505050565b60208801518851600091116107645760405162461bcd60e51b815260206004820152601a60248201527f646561646c696e655f74696d65203e2073746172745f74696d6500000000000060448201526064015b60405180910390fd5b604089015160208a0151106107bb5760405162461bcd60e51b815260206004820152601860248201527f656e645f74696d65203e20646561646c696e655f74696d650000000000000000604482015260640161075b565b50600154604080516101c0810182528a5181526020808c0151818301528b8301518284015260006060830181905260808301526001600160a01b03808c1660a0840152871660c083015282518982028181018301909452898152919260e0840192918b918b918291908501908490808284376000920182905250938552505050602080830189905260408084018890526060808501849052608080860185905260a0860185905288151560c090960195909552868452838352928190208551815591850151600183810191909155908501516002830155918401516003820155918301516004830180549192909160ff19169083818111156108cd57634e487b7160e01b600052602160045260246000fd5b021790555060a08201516004820180547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b039384160217905560c08301516005830180546001600160a01b0319169190921617905560e082015180516109489160068401916020909101906120ba565b506101008201518051610965916007840191602090910190612105565b50610120820151600882015561014082015160098201805491151560ff19928316179055610160830151600a830155610180830151600b8301556101a090920151600c909101805491151591909216179055600180549060006109c7836129a8565b919050555098975050505050505050565b60006109ee60755430633744199660e01b61142f565b9050610a4f6040518060400160405280600381526020016219d95d60ea1b81525084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508694939250506114c09050565b610a9c604051806040016040528060048152602001630e0c2e8d60e31b815250604051806040016040528060048152602001636461746160e01b815250836114c09092919063ffffffff16565b610aa78160006114e3565b50505050565b600060608060005b600154811015610b735760008181526020819052604090206008015415801590610af057506000818152602081905260409020600201544210155b8015610b2d575060008181526020819052604081206004015460ff166001811115610b2b57634e487b7160e01b600052602160045260246000fd5b145b15610b63576001935081610b4082611506565b604051602001610b5192919061256f565b60405160208183030381529060405291505b610b6c816129a8565b9050610ab5565b50809150509250929050565b6035546001600160a01b03163314610bd95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161075b565b610be36000611640565b565b6000818152602081905260409020600a0154421015610c465760405162461bcd60e51b815260206004820152601760248201527f66696e616c5f74696d65203c3d2074696d657374616d70000000000000000000604482015260640161075b565b6000818152602081905260409020600b0154421115610ca75760405162461bcd60e51b815260206004820152601760248201527f636c61696d5f74696d65203e3d2074696d657374616d70000000000000000000604482015260640161075b565b600090815260208190526040902060098101805460ff1916905542600b90910155565b6000610cd66001611692565b90508015610cee576002805461ff0019166101001790555b6000600155610cfb6117af565b610d03611822565b8015610d49576002805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6035546001600160a01b03163314610da65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161075b565b6000610dba6071546001600160a01b031690565b6040516370a0823160e01b81523060048201529091506001600160a01b0382169063a9059cbb90339083906370a082319060240160206040518083038186803b158015610e0657600080fd5b505afa158015610e1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3e91906124b9565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b158015610e8457600080fd5b505af1158015610e98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebc91906123cc565b610d495760405162461bcd60e51b815260206004820152601260248201527f556e61626c6520746f207472616e736665720000000000000000000000000000604482015260640161075b565b6035546001600160a01b03163314610f625760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161075b565b607180546001600160a01b0319166001600160a01b038516179055607280546001600160a01b0319166001600160a01b0384161790556075555050565b6000828152602081905260409020600681015482106110005760405162461bcd60e51b815260206004820152601160248201527f63616e6e6f742d66696e642d696e646578000000000000000000000000000000604482015260640161075b565b60058101546001600160a01b0316331461105c5760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a65640000000000000000000000000000000000000000604482015260640161075b565b42816002015411156110b05760405162461bcd60e51b815260206004820152601560248201527f656e645f74696d65203c3d2074696d657374616d700000000000000000000000604482015260640161075b565b4281600201546202a3006110c491906127fa565b10156111125760405162461bcd60e51b815260206004820152601e60248201527f656e645f74696d65202b20322064617973203e3d2074696d657374616d700000604482015260640161075b565b6008810154156111645760405162461bcd60e51b815260206004820152600d60248201527f6e6f742070726f206576656e7400000000000000000000000000000000000000604482015260640161075b565b6001600482015460ff16600181111561118d57634e487b7160e01b600052602160045260246000fd5b14156111db5760405162461bcd60e51b815260206004820152601460248201527f6576656e7420616c72656164792066696e697368000000000000000000000000604482015260640161075b565b42600a82018190556111f090620151806127fa565b600b82018190556003820183905560048201805460ff19166001179055600a8201546040805133815260208101879052908101859052606081019190915260808101919091527f6f45429fae79975053159c09d1b30186ec4e21c7590841b36748fa79d86f6d149060a00160405180910390a1505050565b6000818152602081905260409020600a01544210156112c95760405162461bcd60e51b815260206004820152601760248201527f66696e616c5f74696d65203c3d2074696d657374616d70000000000000000000604482015260640161075b565b6000818152602081905260409020600b015442111561132a5760405162461bcd60e51b815260206004820152601760248201527f636c61696d5f74696d65203e3d2074696d657374616d70000000000000000000604482015260640161075b565b600090815260208190526040902060098101805460ff1916600117905542600b90910155565b6035546001600160a01b031633146113aa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161075b565b6001600160a01b0381166114265760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161075b565b610d4981611640565b61146d6040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b6114ab6040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b6114b78186868661192c565b95945050505050565b60808301516114cf908361199f565b60808301516114de908261199f565b505050565b6072546000906114fd906001600160a01b031684846119b6565b90505b92915050565b60608161152a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611554578061153e816129a8565b915061154d9050600a83612812565b915061152e565b60008167ffffffffffffffff81111561157d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156115a7576020820181803683370190505b5090505b8415611638576115bc600183612930565b91506115c9600a866129c3565b6115d49060306127fa565b60f81b8183815181106115f757634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611631600a86612812565b94506115ab565b949350505050565b603580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600254600090610100900460ff1615611722578160ff1660011480156116b75750303b155b61171a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161075b565b506000919050565b60025460ff8084169116106117905760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161075b565b506002805460ff191660ff92909216919091179055600190565b919050565b600254610100900460ff1661181a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161075b565b610be3611a6f565b600254610100900460ff1661188d5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161075b565b670de0b6b3a7640000606755600160738190556000606855606980546001600160a01b0319908116909155606a919091556002606b557f90430203e2d9ce04f00738d355173358b054545ecb52218de9c6fb01cbd9aeaf606c557f89cbf5af14e0328a3cd3a734f92c3832d729d431da79b7873a62cbeebd37beb6606d55606e805490911673c89bd4e1632d3a43cb03aaad5262cbe4038bc571179055565b61196a6040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b61197a8560800151610100611ae3565b50509183526001600160a01b031660208301526001600160e01b031916604082015290565b6119ac8260038351611b48565b6114de8282611c57565b6073546000906119c78160016127fa565b6073556069546068548551604080880151606a5460808a01515192516000966320214ca360e11b96611a10966001600160a01b03909216959094919330938b92906024016125aa565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b0319909316929092179091529050611a6586838684611c7e565b9695505050505050565b600254610100900460ff16611ada5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161075b565b610be333611640565b604080518082019091526060815260006020820152611b036020836129c3565b15611b2b57611b136020836129c3565b611b1e906020612930565b611b2890836127fa565b91505b506020828101829052604080518085526000815290920101905290565b60178167ffffffffffffffff1611611b6d57610aa78360e0600585901b168317611deb565b60ff8167ffffffffffffffff1611611bab57611b94836018611fe0600586901b1617611deb565b50610aa78367ffffffffffffffff83166001611e10565b61ffff8167ffffffffffffffff1611611bea57611bd3836019611fe0600586901b1617611deb565b50610aa78367ffffffffffffffff83166002611e10565b63ffffffff8167ffffffffffffffff1611611c2b57611c1483601a611fe0600586901b1617611deb565b50610aa78367ffffffffffffffff83166004611e10565b611c4083601b611fe0600586901b1617611deb565b50610aa78367ffffffffffffffff83166008611e10565b6040805180820190915260608152600060208201526114fd83846000015151848551611e36565b6040516bffffffffffffffffffffffff193060601b1660208201526034810184905260009060540160408051808303601f1901815282825280516020918201206000818152607490925291812080546001600160a01b0319166001600160a01b038a1617905590925082917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99190a2607154604051630200057560e51b81526001600160a01b0390911690634000aea090611d419088908790879060040161260d565b602060405180830381600087803b158015611d5b57600080fd5b505af1158015611d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d9391906123cc565b6116385760405162461bcd60e51b815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f7261604482015262636c6560e81b606482015260840161075b565b6040805180820190915260608152600060208201526114fd8384600001515184611f20565b604080518082019091526060815260006020820152611638848560000151518585611f7c565b6040805180820190915260608152600060208201528251821115611e5957600080fd5b6020850151611e6883866127fa565b1115611e9b57611e9b85611e8b87602001518786611e8691906127fa565b611ffd565b611e96906002612911565b612014565b600080865180518760208301019350808887011115611eba5787860182525b505050602084015b60208410611efa5780518252611ed96020836127fa565b9150611ee66020826127fa565b9050611ef3602085612930565b9350611ec2565b51815160001960208690036101000a019081169019919091161790525083949350505050565b60408051808201909152606081526000602082015283602001518310611f5557611f558485602001516002611e969190612911565b835180516020858301018481535080851415611f72576001810182525b5093949350505050565b6040805180820190915260608152600060208201526020850151611fa085846127fa565b1115611fb457611fb485611e8b86856127fa565b60006001611fc484610100612869565b611fce9190612930565b9050855183868201018583198251161781525080518487011115611ff25783860181525b509495945050505050565b60008183111561200e575081611500565b50919050565b81516120208383611ae3565b50610aa78382611c57565b604051806101c00160405280600081526020016000815260200160008152602001600081526020016000600181111561207457634e487b7160e01b600052602160045260246000fd5b8152600060208201819052604082018190526060808301819052608083015260a0820181905260c0820181905260e0820181905261010082018190526101209091015290565b8280548282559060005260206000209081019282156120f5579160200282015b828111156120f55782518255916020019190600101906120da565b50612101929150612178565b5090565b82805461211190612973565b90600052602060002090601f01602090048101928261213357600085556120f5565b82601f1061214c57805160ff19168380011785556120f5565b828001600101855582156120f557918201828111156120f55782518255916020019190600101906120da565b5b808211156121015760008155600101612179565b80356001600160a01b03811681146117aa57600080fd5b60008083601f8401126121b5578182fd5b50813567ffffffffffffffff8111156121cc578182fd5b6020830191508360208260051b85010111156121e757600080fd5b9250929050565b80356117aa81612a19565b600082601f830112612209578081fd5b813567ffffffffffffffff8082111561222457612224612a03565b604051601f8301601f19908116603f0116810190828211818310171561224c5761224c612a03565b81604052838152866020858801011115612264578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215612291578081fd5b6114fd8261218d565b6000806000606084860312156122ae578182fd5b6122b78461218d565b92506122c56020850161218d565b9150604084013590509250925092565b600080600080600080600080610120898b0312156122f1578384fd5b89601f8a01126122ff578384fd5b6123076127d1565b808a60608c018d811115612319578788fd5b875b600381101561233a57823585526020948501949092019160010161231b565b50829b506123478161218d565b9a5050505050608089013567ffffffffffffffff80821115612367578586fd5b6123738c838d016121a4565b909850965060a08b013591508082111561238b578586fd5b506123988b828c016121f9565b9450506123a760c08a0161218d565b925060e089013591506123bd6101008a016121ee565b90509295985092959890939650565b6000602082840312156123dd578081fd5b81516123e881612a19565b9392505050565b60008060408385031215612401578182fd5b82359150602083013567ffffffffffffffff81111561241e578182fd5b61242a858286016121f9565b9150509250929050565b60008060208385031215612446578182fd5b823567ffffffffffffffff8082111561245d578384fd5b818501915085601f830112612470578384fd5b81358181111561247e578485fd5b86602082850101111561248f578485fd5b60209290920196919550909350505050565b6000602082840312156124b2578081fd5b5035919050565b6000602082840312156124ca578081fd5b5051919050565b600080604083850312156124e3578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b83811015611ff257815187529582019590820190600101612505565b60008151808452612539816020860160208601612947565b601f01601f19169290920160200192915050565b6002811061256b57634e487b7160e01b600052602160045260246000fd5b9052565b60008351612581818460208801612947565b835190830190612595818360208801612947565b600b60fa1b9101908152600101949350505050565b60006101006001600160a01b03808c1684528a602085015289604085015280891660608501525063ffffffff60e01b871660808401528560a08401528460c08401528060e08401526125fe81840185612521565b9b9a5050505050505050505050565b6001600160a01b03841681528260208201526060604082015260006114b76060830184612521565b82151581526040602082015260006116386040830184612521565b60208152815160208201526020820151604082015260408201516060820152606082015160808201526000608083015161268d60a084018261254d565b5060a08301516001600160a01b03811660c08401525060c08301516001600160a01b03811660e08401525060e08301516101c061010081818601526126d66101e08601846124f2565b9250808601519050610120601f1986850301818701526126f68483612521565b9087015161014087810191909152870151909350905061016061271c8187018315159052565b860151610180868101919091528601516101a08087019190915290950151151593019290925250919050565b60006101a08f83528e60208401528d60408401528c606084015261276f608084018d61254d565b6001600160a01b038b811660a08501528a1660c084015260e083018190526127998184018a612521565b610100840198909852505093151561012085015261014084019290925261016083015215156101809091015298975050505050505050565b6040516060810167ffffffffffffffff811182821017156127f4576127f4612a03565b60405290565b6000821982111561280d5761280d6129d7565b500190565b600082612821576128216129ed565b500490565b600181815b80851115612861578160001904821115612847576128476129d7565b8085161561285457918102915b93841c939080029061282b565b509250929050565b60006114fd838360008261287f57506001611500565b8161288c57506000611500565b81600181146128a257600281146128ac576128c8565b6001915050611500565b60ff8411156128bd576128bd6129d7565b50506001821b611500565b5060208310610133831016604e8410600b84101617156128eb575081810a611500565b6128f58383612826565b8060001904821115612909576129096129d7565b029392505050565b600081600019048311821515161561292b5761292b6129d7565b500290565b600082821015612942576129426129d7565b500390565b60005b8381101561296257818101518382015260200161294a565b83811115610aa75750506000910152565b600181811c9082168061298757607f821691505b6020821081141561200e57634e487b7160e01b600052602260045260246000fd5b60006000198214156129bc576129bc6129d7565b5060010190565b6000826129d2576129d26129ed565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b8015158114610d4957600080fdfea164736f6c6343000804000a";

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
