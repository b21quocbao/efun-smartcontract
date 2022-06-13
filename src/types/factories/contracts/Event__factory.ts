/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Event, EventInterface } from "../../contracts/Event";

const _abi = [
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
        name: "_odds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "datas",
        type: "string",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506112b7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80638da5cb5b11610076578063bca321e51161005b578063bca321e514610146578063c422c1fa1461014f578063f2fde38b1461016257600080fd5b80638da5cb5b1461010a578063a4e301671461012557600080fd5b80630b791430146100a85780632e340599146100d8578063715018a6146100f85780638129fc1c14610102575b600080fd5b6100bb6100b6366004610ebc565b610175565b6040516100cf9897969594939291906111b0565b60405180910390f35b6100eb6100e6366004610ebc565b610254565b6040516100cf919061105e565b610100610416565b005b610100610481565b6033546040516001600160a01b0390911681526020016100cf565b610138610133366004610ef5565b6104fb565b6040519081526020016100cf565b61013860665481565b61010061015d366004610ed4565b6107ba565b610100610170366004610e9b565b610989565b6065602052600090815260409020805460018201546002830154600384015460048501546005860154600787018054969795969495939460ff8416946101009094046001600160a01b039081169493169291906101d190611228565b80601f01602080910402602001604051908101604052809291908181526020018280546101fd90611228565b801561024a5780601f1061021f5761010080835404028352916020019161024a565b820191906000526020600020905b81548152906001019060200180831161022d57829003601f168201915b5050505050905088565b61025c610cc0565b6065600083815260200190815260200160002060405180610120016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1660018111156102d557634e487b7160e01b600052602160045260246000fd5b60018111156102f457634e487b7160e01b600052602160045260246000fd5b815260048201546001600160a01b0361010090910481166020808401919091526005840154909116604080840191909152600684018054825181850281018501909352808352606090940193919290919083018282801561037457602002820191906000526020600020905b815481526020019060010190808311610360575b5050505050815260200160078201805461038d90611228565b80601f01602080910402602001604051908101604052809291908181526020018280546103b990611228565b80156104065780601f106103db57610100808354040283529160200191610406565b820191906000526020600020905b8154815290600101906020018083116103e957829003601f168201915b5050505050815250509050919050565b6033546001600160a01b031633146104755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61047f6000610a64565b565b600061048d6001610ac3565b905080156104a5576000805461ff0019166101001790555b60006066556104b2610bde565b80156104f8576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b600086881061054c5760405162461bcd60e51b815260206004820152601a60248201527f646561646c696e655f74696d65203e2073746172745f74696d65000000000000604482015260640161046c565b85871061059b5760405162461bcd60e51b815260206004820152601860248201527f656e645f74696d65203e20646561646c696e655f74696d650000000000000000604482015260640161046c565b606654905060405180610120016040528089815260200188815260200187815260200160008152602001600060018111156105e657634e487b7160e01b600052602160045260246000fd5b8152602001866001600160a01b03168152602001336001600160a01b03168152602001858580806020026020016040519081016040528093929190818152602001838360200280828437600092018290525093855250505060209182018590528381526065825260409081902083518155918301516001808401919091559083015160028301556060830151600383015560808301516004830180549192909160ff19169083818111156106aa57634e487b7160e01b600052602160045260246000fd5b021790555060a08201516004820180547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b039384160217905560c083015160058301805473ffffffffffffffffffffffffffffffffffffffff19169190921617905560e08201518051610732916006840191602090910190610d2a565b50610100820151805161074f916007840191602090910190610d75565b509050507f040aa482b4fe6bc477114861a9997f963efcc2939beca252a09167def3ab28588189898989338a8a8a6040516107929998979695949392919061110a565b60405180910390a1606680549060006107aa83611263565b9190505550979650505050505050565b60008281526065602052604090206006810154821061081b5760405162461bcd60e51b815260206004820152601160248201527f63616e6e6f742d66696e642d696e646578000000000000000000000000000000604482015260640161046c565b60058101546001600160a01b031633146108775760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a65640000000000000000000000000000000000000000604482015260640161046c565b42816002015411156108cb5760405162461bcd60e51b815260206004820152601560248201527f656e645f74696d65203c3d2074696d657374616d700000000000000000000000604482015260640161046c565b4281600201546202a3006108df9190611210565b101561092d5760405162461bcd60e51b815260206004820152601e60248201527f656e645f74696d65202b20322064617973203e3d2074696d657374616d700000604482015260640161046c565b6003810182905560048101805460ff1916600117905560408051338152602081018590529081018390527f2ccc596398ffc39992c51e71000fdba89a0548fddc9aa898bd37ca38d3af73aa9060600160405180910390a1505050565b6033546001600160a01b031633146109e35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046c565b6001600160a01b038116610a5f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161046c565b6104f8815b603380546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff1615610b51578160ff166001148015610ae65750303b155b610b495760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161046c565b506000919050565b60005460ff808416911610610bbf5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161046c565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16610c495760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161046c565b61047f600054610100900460ff16610cb75760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161046c565b61047f33610a64565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160006001811115610d0957634e487b7160e01b600052602160045260246000fd5b81526000602082018190526040820152606080820181905260809091015290565b828054828255906000526020600020908101928215610d65579160200282015b82811115610d65578251825591602001919060010190610d4a565b50610d71929150610de8565b5090565b828054610d8190611228565b90600052602060002090601f016020900481019282610da35760008555610d65565b82601f10610dbc57805160ff1916838001178555610d65565b82800160010185558215610d655791820182811115610d65578251825591602001919060010190610d4a565b5b80821115610d715760008155600101610de9565b80356001600160a01b0381168114610bd957600080fd5b600082601f830112610e24578081fd5b813567ffffffffffffffff80821115610e3f57610e3f611294565b604051601f8301601f19908116603f01168101908282118183101715610e6757610e67611294565b81604052838152866020858801011115610e7f578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610eac578081fd5b610eb582610dfd565b9392505050565b600060208284031215610ecd578081fd5b5035919050565b60008060408385031215610ee6578081fd5b50508035926020909101359150565b600080600080600080600060c0888a031215610f0f578283fd5b873596506020880135955060408801359450610f2d60608901610dfd565b9350608088013567ffffffffffffffff80821115610f49578485fd5b818a0191508a601f830112610f5c578485fd5b813581811115610f6a578586fd5b8b60208260051b8501011115610f7e578586fd5b6020830195508094505060a08a0135915080821115610f9b578283fd5b50610fa88a828b01610e14565b91505092959891949750929550565b6000815180845260208085019450808401835b83811015610fe657815187529582019590820190600101610fca565b509495945050505050565b6002811061100f57634e487b7160e01b600052602160045260246000fd5b9052565b60008151808452815b818110156110385760208185018101518683018201520161101c565b818111156110495782602083870101525b50601f01601f19169290920160200192915050565b60208152815160208201526020820151604082015260408201516060820152606082015160808201526000608083015161109b60a0840182610ff1565b5060a08301516001600160a01b03811660c08401525060c08301516001600160a01b03811660e08401525060e083015161012061010081818601526110e4610140860184610fb7565b90860151858203601f1901838701529092506111008382611013565b9695505050505050565b60006101008b83528a60208401528960408401528860608401526001600160a01b03808916608085015280881660a0850152508060c08401528481840152506101207f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851115611178578182fd5b8460051b8087838601378301818101838152848203830160e086015261119e8187611013565b9e9d5050505050505050505050505050565b60006101008a83528960208401528860408401528760608401526111d76080840188610ff1565b6001600160a01b0386811660a0850152851660c084015260e0830181905261120181840185611013565b9b9a5050505050505050505050565b600082198211156112235761122361127e565b500190565b600181811c9082168061123c57607f821691505b6020821081141561125d57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156112775761127761127e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000804000a";

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
