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
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadlineTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "helperAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "odds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "datas",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pro",
        type: "uint256",
      },
    ],
    name: "EventCreated",
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
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadlineTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
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
  "0x608060405234801561001057600080fd5b50612a01806100206000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80638da5cb5b116100b2578063bca321e511610081578063c422c1fa11610066578063c422c1fa14610248578063ca83bfeb1461025b578063f2fde38b1461026e57600080fd5b8063bca321e514610236578063c2939d971461023f57600080fd5b80638da5cb5b146101df5780638dc654a2146101fa5780639cdfe1ae14610202578063a191ca5e1461022357600080fd5b80636e04ff0d116100ee5780636e04ff0d1461019b578063715018a6146101bc5780637ac7f518146101c45780638129fc1c146101d757600080fd5b80630b791430146101205780632e3405991461015357806337441996146101735780634585e33b14610188575b600080fd5b61013361012e366004612346565b610281565b60405161014a9b9a9998979695949392919061275d565b60405180910390f35b610166610161366004612346565b610378565b60405161014a91906125d1565b610186610181366004612294565b610551565b005b6101866101963660046122d9565b6106f2565b6101ae6101a93660046122d9565b6107c7565b60405161014a9291906125b6565b610186610899565b6101866101d2366004612346565b6108ff565b6101866109ea565b6035546040516001600160a01b03909116815260200161014a565b610186610a6c565b610215610210366004612397565b610c28565b60405190815260200161014a565b610186610231366004612232565b610f20565b61021560015481565b61021560755481565b610186610256366004612376565b610fb7565b610186610269366004612346565b61125f565b61018661027c366004612218565b61134d565b6000602081905290815260409020805460018201546002830154600384015460048501546005860154600787018054969795969495939460ff8416946101009094046001600160a01b039081169493169291906102dd9061294e565b80601f01602080910402602001604051908101604052809291908181526020018280546103099061294e565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b5050505060088301546009840154600a909401549293909260ff90911691508b565b610380612028565b6000828152602081815260409182902082516101808101845281548152600180830154938201939093526002820154938101939093526003810154606084015260048101549091608084019160ff16908111156103ed57634e487b7160e01b600052602160045260246000fd5b600181111561040c57634e487b7160e01b600052602160045260246000fd5b815260048201546001600160a01b0361010090910481166020808401919091526005840154909116604080840191909152600684018054825181850281018501909352808352606090940193919290919083018282801561048c57602002820191906000526020600020905b815481526020019060010190808311610478575b505050505081526020016007820180546104a59061294e565b80601f01602080910402602001604051908101604052809291908181526020018280546104d19061294e565b801561051e5780601f106104f35761010080835404028352916020019161051e565b820191906000526020600020905b81548152906001019060200180831161050157829003601f168201915b505050918352505060088201546020820152600982015460ff1615156040820152600a9091015460609091015292915050565b60008281526074602052604090205482906001600160a01b031633146105e45760405162461bcd60e51b815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f207265717565737400000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60008181526074602052604080822080546001600160a01b03191690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a26000808084815b81518110156106e857600082828151811061065957634e487b7160e01b600052603260045260246000fd5b016020015160f81c9050603081108015906106775750603a8160ff16105b156106a857603060ff821661068d86600a6128ec565b61069791906127d5565b6106a1919061290b565b93506106d5565b856106b957819450600195506106d0565b600085815260208190526040812060030185905595505b600093505b50806106e081612983565b91505061062e565b5050505050505050565b600061070860755430633744199660e01b61142c565b90506107696040518060400160405280600381526020016219d95d60ea1b81525084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508694939250506114bd9050565b6107b6604051806040016040528060048152602001630e0c2e8d60e31b815250604051806040016040528060048152602001636461746160e01b815250836114bd9092919063ffffffff16565b6107c18160006114e0565b50505050565b600060608060005b60015481101561088d576000818152602081905260409020600801541580159061080a57506000818152602081905260409020600201544210155b8015610847575060008181526020819052604081206004015460ff16600181111561084557634e487b7160e01b600052602160045260246000fd5b145b1561087d57600193508161085a82611503565b60405160200161086b9291906124f0565b60405160208183030381529060405291505b61088681612983565b90506107cf565b50809150509250929050565b6035546001600160a01b031633146108f35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105db565b6108fd600061163d565b565b6000818152602081905260409020600a01544210156109605760405162461bcd60e51b815260206004820152601760248201527f66696e616c5f74696d65203c3d2074696d657374616d7000000000000000000060448201526064016105db565b6000818152602081905260409020600a0154429061098190620151806127d5565b10156109cf5760405162461bcd60e51b815260206004820181905260248201527f66696e616c5f74696d65202b20312064617973203e3d2074696d657374616d7060448201526064016105db565b6000908152602081905260409020600901805460ff19169055565b60006109f6600161168f565b90508015610a0e576002805461ff0019166101001790555b6000600155610a1b6117ac565b610a2361181f565b8015610a69576002805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6035546001600160a01b03163314610ac65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105db565b6000610ada6071546001600160a01b031690565b6040516370a0823160e01b81523060048201529091506001600160a01b0382169063a9059cbb90339083906370a082319060240160206040518083038186803b158015610b2657600080fd5b505afa158015610b3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5e919061235e565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b158015610ba457600080fd5b505af1158015610bb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdc919061226d565b610a695760405162461bcd60e51b815260206004820152601260248201527f556e61626c6520746f207472616e73666572000000000000000000000000000060448201526064016105db565b6000888a10610c795760405162461bcd60e51b815260206004820152601a60248201527f646561646c696e655f74696d65203e2073746172745f74696d6500000000000060448201526064016105db565b878910610cc85760405162461bcd60e51b815260206004820152601860248201527f656e645f74696d65203e20646561646c696e655f74696d65000000000000000060448201526064016105db565b60015490506040518061018001604052808b81526020018a81526020018981526020016000815260200160006001811115610d1357634e487b7160e01b600052602160045260246000fd5b8152602001886001600160a01b03168152602001846001600160a01b0316815260200187878080602002602001604051908101604052809392919081815260200183836020028082843760009201829052509385525050506020808301889052604080840187905260608085018490526080948501849052868452838352928190208551815591850151600183810191909155908501516002830155918401516003820155918301516004830180549192909160ff1916908381811115610dea57634e487b7160e01b600052602160045260246000fd5b021790555060a08201516004820180547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b039384160217905560c08301516005830180546001600160a01b0319169190921617905560e08201518051610e659160068401916020909101906120a7565b506101008201518051610e829160078401916020909101906120f2565b50610120820151600882015561014082015160098201805460ff191691151591909117905561016090910151600a909101556040517f0ce3e4a8197f9966df36cd4efec4937e6f8c71af81fc5edaec417c6aff51dc7490610ef69083908d908d908d908d908a908e908e908e908d906126ae565b60405180910390a160018054906000610f0e83612983565b91905055509998505050505050505050565b6035546001600160a01b03163314610f7a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105db565b607180546001600160a01b0319166001600160a01b038516179055607280546001600160a01b0319166001600160a01b0384161790556075555050565b6000828152602081905260409020600681015482106110185760405162461bcd60e51b815260206004820152601160248201527f63616e6e6f742d66696e642d696e64657800000000000000000000000000000060448201526064016105db565b60058101546001600160a01b031633146110745760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064016105db565b42816002015411156110c85760405162461bcd60e51b815260206004820152601560248201527f656e645f74696d65203c3d2074696d657374616d70000000000000000000000060448201526064016105db565b4281600201546202a3006110dc91906127d5565b101561112a5760405162461bcd60e51b815260206004820152601e60248201527f656e645f74696d65202b20322064617973203e3d2074696d657374616d70000060448201526064016105db565b60088101541561117c5760405162461bcd60e51b815260206004820152600d60248201527f6e6f742070726f206576656e740000000000000000000000000000000000000060448201526064016105db565b6001600482015460ff1660018111156111a557634e487b7160e01b600052602160045260246000fd5b14156111f35760405162461bcd60e51b815260206004820152601460248201527f6576656e7420616c72656164792066696e69736800000000000000000000000060448201526064016105db565b42600a82018190556003820183905560048201805460ff19166001179055604080513381526020810186905290810184905260608101919091527f1f2d7b1369b8c7ab6fdf8011e971190058e9d1084200709ad909d0ddb9b1fbf89060800160405180910390a1505050565b6000818152602081905260409020600a01544210156112c05760405162461bcd60e51b815260206004820152601760248201527f66696e616c5f74696d65203c3d2074696d657374616d7000000000000000000060448201526064016105db565b6000818152602081905260409020600a015442906112e190620151806127d5565b101561132f5760405162461bcd60e51b815260206004820181905260248201527f66696e616c5f74696d65202b20312064617973203e3d2074696d657374616d7060448201526064016105db565b6000908152602081905260409020600901805460ff19166001179055565b6035546001600160a01b031633146113a75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105db565b6001600160a01b0381166114235760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105db565b610a698161163d565b61146a6040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b6114a86040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b6114b481868686611929565b95945050505050565b60808301516114cc908361199c565b60808301516114db908261199c565b505050565b6072546000906114fa906001600160a01b031684846119b3565b90505b92915050565b6060816115275750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611551578061153b81612983565b915061154a9050600a836127ed565b915061152b565b60008167ffffffffffffffff81111561157a57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156115a4576020820181803683370190505b5090505b8415611635576115b960018361290b565b91506115c6600a8661299e565b6115d19060306127d5565b60f81b8183815181106115f457634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061162e600a866127ed565b94506115a8565b949350505050565b603580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600254600090610100900460ff161561171f578160ff1660011480156116b45750303b155b6117175760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105db565b506000919050565b60025460ff80841691161061178d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105db565b506002805460ff191660ff92909216919091179055600190565b919050565b600254610100900460ff166118175760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105db565b6108fd611a6c565b600254610100900460ff1661188a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105db565b670de0b6b3a7640000606755600160738190556000606855606980546001600160a01b0319908116909155606a919091556002606b557f90430203e2d9ce04f00738d355173358b054545ecb52218de9c6fb01cbd9aeaf606c557f89cbf5af14e0328a3cd3a734f92c3832d729d431da79b7873a62cbeebd37beb6606d55606e805490911673c89bd4e1632d3a43cb03aaad5262cbe4038bc571179055565b6119676040805160a0810182526000808252602080830182905282840182905260608084018390528451808601909552845283015290608082015290565b6119778560800151610100611ae0565b50509183526001600160a01b031660208301526001600160e01b031916604082015290565b6119a98260038351611b45565b6114db8282611c54565b6073546000906119c48160016127d5565b6073556069546068548551604080880151606a5460808a01515192516000966320214ca360e11b96611a0d966001600160a01b03909216959094919330938b929060240161252b565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b0319909316929092179091529050611a6286838684611c7b565b9695505050505050565b600254610100900460ff16611ad75760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105db565b6108fd3361163d565b604080518082019091526060815260006020820152611b0060208361299e565b15611b2857611b1060208361299e565b611b1b90602061290b565b611b2590836127d5565b91505b506020828101829052604080518085526000815290920101905290565b60178167ffffffffffffffff1611611b6a576107c18360e0600585901b168317611de8565b60ff8167ffffffffffffffff1611611ba857611b91836018611fe0600586901b1617611de8565b506107c18367ffffffffffffffff83166001611e0d565b61ffff8167ffffffffffffffff1611611be757611bd0836019611fe0600586901b1617611de8565b506107c18367ffffffffffffffff83166002611e0d565b63ffffffff8167ffffffffffffffff1611611c2857611c1183601a611fe0600586901b1617611de8565b506107c18367ffffffffffffffff83166004611e0d565b611c3d83601b611fe0600586901b1617611de8565b506107c18367ffffffffffffffff83166008611e0d565b6040805180820190915260608152600060208201526114fa83846000015151848551611e33565b6040516bffffffffffffffffffffffff193060601b1660208201526034810184905260009060540160408051808303601f1901815282825280516020918201206000818152607490925291812080546001600160a01b0319166001600160a01b038a1617905590925082917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99190a2607154604051630200057560e51b81526001600160a01b0390911690634000aea090611d3e9088908790879060040161258e565b602060405180830381600087803b158015611d5857600080fd5b505af1158015611d6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d90919061226d565b6116355760405162461bcd60e51b815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f7261604482015262636c6560e81b60648201526084016105db565b6040805180820190915260608152600060208201526114fa8384600001515184611f1d565b604080518082019091526060815260006020820152611635848560000151518585611f79565b6040805180820190915260608152600060208201528251821115611e5657600080fd5b6020850151611e6583866127d5565b1115611e9857611e9885611e8887602001518786611e8391906127d5565b611ffa565b611e939060026128ec565b612011565b600080865180518760208301019350808887011115611eb75787860182525b505050602084015b60208410611ef75780518252611ed66020836127d5565b9150611ee36020826127d5565b9050611ef060208561290b565b9350611ebf565b51815160001960208690036101000a019081169019919091161790525083949350505050565b60408051808201909152606081526000602082015283602001518310611f5257611f528485602001516002611e9391906128ec565b835180516020858301018481535080851415611f6f576001810182525b5093949350505050565b6040805180820190915260608152600060208201526020850151611f9d85846127d5565b1115611fb157611fb185611e8886856127d5565b60006001611fc184610100612844565b611fcb919061290b565b9050855183868201018583198251161781525080518487011115611fef5783860181525b509495945050505050565b60008183111561200b5750816114fd565b50919050565b815161201d8383611ae0565b506107c18382611c54565b604051806101800160405280600081526020016000815260200160008152602001600081526020016000600181111561207157634e487b7160e01b600052602160045260246000fd5b8152600060208201819052604082018190526060808301819052608083015260a0820181905260c0820181905260e09091015290565b8280548282559060005260206000209081019282156120e2579160200282015b828111156120e25782518255916020019190600101906120c7565b506120ee929150612165565b5090565b8280546120fe9061294e565b90600052602060002090601f01602090048101928261212057600085556120e2565b82601f1061213957805160ff19168380011785556120e2565b828001600101855582156120e257918201828111156120e25782518255916020019190600101906120c7565b5b808211156120ee5760008155600101612166565b80356001600160a01b03811681146117a757600080fd5b600082601f8301126121a1578081fd5b813567ffffffffffffffff808211156121bc576121bc6129de565b604051601f8301601f19908116603f011681019082821181831017156121e4576121e46129de565b816040528381528660208588010111156121fc578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215612229578081fd5b6114fa8261217a565b600080600060608486031215612246578182fd5b61224f8461217a565b925061225d6020850161217a565b9150604084013590509250925092565b60006020828403121561227e578081fd5b8151801515811461228d578182fd5b9392505050565b600080604083850312156122a6578182fd5b82359150602083013567ffffffffffffffff8111156122c3578182fd5b6122cf85828601612191565b9150509250929050565b600080602083850312156122eb578182fd5b823567ffffffffffffffff80821115612302578384fd5b818501915085601f830112612315578384fd5b813581811115612323578485fd5b866020828501011115612334578485fd5b60209290920196919550909350505050565b600060208284031215612357578081fd5b5035919050565b60006020828403121561236f578081fd5b5051919050565b60008060408385031215612388578182fd5b50508035926020909101359150565b60008060008060008060008060006101008a8c0312156123b5578485fd5b8935985060208a0135975060408a013596506123d360608b0161217a565b955060808a013567ffffffffffffffff808211156123ef578687fd5b818c0191508c601f830112612402578687fd5b813581811115612410578788fd5b8d60208260051b8501011115612424578788fd5b6020830197508096505060a08c0135915080821115612441578485fd5b5061244e8c828d01612191565b93505061245d60c08b0161217a565b915060e08a013590509295985092959850929598565b6000815180845260208085019450808401835b83811015611fef57815187529582019590820190600101612486565b600081518084526124ba816020860160208601612922565b601f01601f19169290920160200192915050565b600281106124ec57634e487b7160e01b600052602160045260246000fd5b9052565b60008351612502818460208801612922565b835190830190612516818360208801612922565b600160fd1b9101908152600101949350505050565b60006101006001600160a01b03808c1684528a602085015289604085015280891660608501525063ffffffff60e01b871660808401528560a08401528460c08401528060e084015261257f818401856124a2565b9b9a5050505050505050505050565b6001600160a01b03841681528260208201526060604082015260006114b460608301846124a2565b821515815260406020820152600061163560408301846124a2565b60208152815160208201526020820151604082015260408201516060820152606082015160808201526000608083015161260e60a08401826124ce565b5060a08301516001600160a01b03811660c08401525060c08301516001600160a01b03811660e08401525060e083015161018061010081818601526126576101a0860184612473565b9250808601519050610120601f19868503018187015261267784836124a2565b9087015161014087810191909152870151909350905061016061269d8187018315159052565b959095015193019290925250919050565b60006101208c83528b60208401528a60408401528960608401526001600160a01b03808a16608085015280891660a0850152508060c08401528581840152506101407f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86111561271c578182fd5b8560051b8088838601378301818101838152848203830160e086015261274281886124a2565b9350505050826101008301529b9a5050505050505050505050565b60006101608d83528c60208401528b60408401528a6060840152612784608084018b6124ce565b6001600160a01b0389811660a0850152881660c084015260e083018190526127ae818401886124a2565b61010084019690965250509115156101208301526101409091015298975050505050505050565b600082198211156127e8576127e86129b2565b500190565b6000826127fc576127fc6129c8565b500490565b600181815b8085111561283c578160001904821115612822576128226129b2565b8085161561282f57918102915b93841c9390800290612806565b509250929050565b60006114fa838360008261285a575060016114fd565b81612867575060006114fd565b816001811461287d5760028114612887576128a3565b60019150506114fd565b60ff841115612898576128986129b2565b50506001821b6114fd565b5060208310610133831016604e8410600b84101617156128c6575081810a6114fd565b6128d08383612801565b80600019048211156128e4576128e46129b2565b029392505050565b6000816000190483118215151615612906576129066129b2565b500290565b60008282101561291d5761291d6129b2565b500390565b60005b8381101561293d578181015183820152602001612925565b838111156107c15750506000910152565b600181811c9082168061296257607f821691505b6020821081141561200b57634e487b7160e01b600052602260045260246000fd5b6000600019821415612997576129976129b2565b5060010190565b6000826129ad576129ad6129c8565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000804000a";

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
