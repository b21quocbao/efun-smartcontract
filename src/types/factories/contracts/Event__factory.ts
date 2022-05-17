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
        name: "sToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sTotal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string[]",
            name: "data",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "odds",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct EDataTypes.Option",
        name: "options",
        type: "tuple",
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
        internalType: "string",
        name: "result",
        type: "string",
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
        internalType: "enum EDataTypes.EventStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "EventStatusUpdated",
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
        name: "_idx",
        type: "uint256",
      },
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
        internalType: "address",
        name: "_sToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_sTotal",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string[]",
            name: "data",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "odds",
            type: "uint256[]",
          },
        ],
        internalType: "struct EDataTypes.Option",
        name: "_options",
        type: "tuple",
      },
    ],
    name: "createSingleEvent",
    outputs: [],
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
        internalType: "string",
        name: "result",
        type: "string",
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
        name: "sToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sTotal",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
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
            internalType: "string",
            name: "result",
            type: "string",
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
            name: "sToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sTotal",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "options",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "odds",
            type: "uint256[]",
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
        internalType: "string",
        name: "_result",
        type: "string",
      },
    ],
    name: "updateEventResult",
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
        name: "_sTotal",
        type: "uint256",
      },
    ],
    name: "updateSToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b0b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80637d44afe4116100765780638da5cb5b1161005b5780638da5cb5b14610131578063f2fde38b1461014c578063fe7360411461015f57600080fd5b80637d44afe4146101165780638129fc1c1461012957600080fd5b80630b791430146100a85780632960ddc3146100d95780632e340599146100ee578063715018a61461010e575b600080fd5b6100bb6100b6366004611389565b610172565b6040516100d09998979695949392919061173a565b60405180910390f35b6100ec6100e73660046113d5565b610256565b005b6101016100fc366004611389565b6104fd565b6040516100d0919061164f565b6100ec61079c565b6100ec61012436600461141a565b610802565b6100ec610bc4565b6033546040516001600160a01b0390911681526020016100d0565b6100ec61015a366004611368565b610c39565b6100ec61016d3660046113a1565b610d18565b6065602052600090815260409020805460018201546002830154600384018054939492939192916101a290611a7c565b80601f01602080910402602001604051908101604052809291908181526020018280546101ce90611a7c565b801561021b5780601f106101f05761010080835404028352916020019161021b565b820191906000526020600020905b8154815290600101906020018083116101fe57829003601f168201915b505050600484015460058501546006860154600790960154949560ff8316956001600160a01b03610100909404841695509183169350911689565b6000828152606560209081526040808320600881018054835181860281018601909452808452919461033e9491929184015b828210156103345783829060005260206000200180546102a790611a7c565b80601f01602080910402602001604051908101604052809291908181526020018280546102d390611a7c565b80156103205780601f106102f557610100808354040283529160200191610320565b820191906000526020600020905b81548152906001019060200180831161030357829003601f168201915b505050505081526020019060010190610288565b5050505083610daa565b63014113b814156103965760405162461bcd60e51b815260206004820152601560248201527f726573756c742d6e6f742d696e2d6f7074696f6e73000000000000000000000060448201526064015b60405180910390fd5b60078101546001600160a01b031633146103e15760405162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b604482015260640161038d565b42816002015411156104355760405162461bcd60e51b815260206004820152601560248201527f656e645f74696d65203c3d2074696d657374616d700000000000000000000000604482015260640161038d565b4281600201546202a30061044991906119ab565b10156104975760405162461bcd60e51b815260206004820152601e60248201527f656e645f74696d65202b20322064617973203e3d2074696d657374616d700000604482015260640161038d565b81516104ac90600383019060208501906110cf565b5060048101805460ff191660011790556040517fa3c262ffbf369b7ce5804dd0381ee64854a6df80812ec62f785877f99646fd3e906104f09033908690869061161e565b60405180910390a1505050565b610505611153565b606560008381526020019081526020016000206040518061016001604052908160008201548152602001600182015481526020016002820154815260200160038201805461055290611a7c565b80601f016020809104026020016040519081016040528092919081815260200182805461057e90611a7c565b80156105cb5780601f106105a0576101008083540402835291602001916105cb565b820191906000526020600020905b8154815290600101906020018083116105ae57829003601f168201915b5050509183525050600482015460209091019060ff16600181111561060057634e487b7160e01b600052602160045260246000fd5b600181111561061f57634e487b7160e01b600052602160045260246000fd5b815260048201546001600160a01b03610100909104811660208084019190915260058401548216604080850191909152600685015460608501526007850154909216608084015260088401805483518184028101840190945280845260a090940193909160009084015b828210156107355783829060005260206000200180546106a890611a7c565b80601f01602080910402602001604051908101604052809291908181526020018280546106d490611a7c565b80156107215780601f106106f657610100808354040283529160200191610721565b820191906000526020600020905b81548152906001019060200180831161070457829003601f168201915b505050505081526020019060010190610689565b5050505081526020016009820180548060200260200160405190810160405280929190818152602001828054801561078c57602002820191906000526020600020905b815481526020019060010190808311610778575b5050505050815250509050919050565b6033546001600160a01b031633146107f65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161038d565b6108006000610e15565b565b8642106108515760405162461bcd60e51b815260206004820152601c60248201527f5f737461727454696d65203e20626c6f636b2e74696d657374616d7000000000604482015260640161038d565b8587106108a05760405162461bcd60e51b815260206004820152601a60248201527f646561646c696e655f74696d65203e2073746172745f74696d65000000000000604482015260640161038d565b8486106108ef5760405162461bcd60e51b815260206004820152601860248201527f656e645f74696d65203e20646561646c696e655f74696d650000000000000000604482015260640161038d565b6108fc602082018261191c565b905061090882806118cd565b9050146109575760405162461bcd60e51b815260206004820152601b60248201527f6e6f742d6d617463682d6c656e6774682d6f7074696f6e2d6f64640000000000604482015260640161038d565b604051806101600160405280888152602001878152602001868152602001604051806020016040528060008152508152602001600060018111156109ab57634e487b7160e01b600052602160045260246000fd5b81526001600160a01b038087166020830152851660408201526060810184905233608082015260a0016109de83806118cd565b6109e7916119c3565b81526020018280602001906109fc919061191c565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201829052509390945250508a8152606560209081526040918290208451815584820151600182015591840151600283015560608401518051929350610a7292600385019291909101906110cf565b50608082015160048201805460ff191660018381811115610aa357634e487b7160e01b600052602160045260246000fd5b021790555060a08201516004820180546001600160a01b039283166101009081027fffffffffffffffffffffff0000000000000000000000000000000000000000ff9092169190911790915560c084015160058401805491841673ffffffffffffffffffffffffffffffffffffffff1992831617905560e08501516006850155908401516007840180549190931691161790556101208201518051610b529160088401916020909101906111e7565b506101408201518051610b6f916009840191602090910190611240565b509050507fbd47c189df7da0cd79a86b3e255a0801ceb4765e8f7036b2e2d020dd0ee47f04888888888888883389604051610bb2999897969594939291906117a6565b60405180910390a15050505050505050565b6000610bd06001610e74565b90508015610be8576000805461ff0019166101001790555b610bf0610f8f565b8015610c36576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6033546001600160a01b03163314610c935760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161038d565b6001600160a01b038116610d0f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161038d565b610c3681610e15565b600083815260656020526040902060078101546001600160a01b03163314610d715760405162461bcd60e51b815260206004820152600c60248201526b1d5b985d5d1a1bdc9a5e995960a21b604482015260640161038d565b60058101805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03949094169390931790925560069091015550565b6000805b8351811015610e0657610de8848281518110610dda57634e487b7160e01b600052603260045260246000fd5b602002602001015184611002565b15610df4579050610e0f565b80610dfe81611ab7565b915050610dae565b5063014113b890505b92915050565b603380546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff1615610f02578160ff166001148015610e975750303b155b610efa5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161038d565b506000919050565b60005460ff808416911610610f705760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161038d565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16610ffa5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161038d565b61080061105b565b6000816040516020016110159190611602565b604051602081830303815290604052805190602001208360405160200161103c9190611602565b6040516020818303038152906040528051906020012014905092915050565b600054610100900460ff166110c65760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161038d565b61080033610e15565b8280546110db90611a7c565b90600052602060002090601f0160209004810192826110fd5760008555611143565b82601f1061111657805160ff1916838001178555611143565b82800160010185558215611143579182015b82811115611143578251825591602001919060010190611128565b5061114f92915061127a565b5090565b604051806101600160405280600081526020016000815260200160008152602001606081526020016000600181111561119c57634e487b7160e01b600052602160045260246000fd5b815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160608152602001606081525090565b828054828255906000526020600020908101928215611234579160200282015b8281111561123457825180516112249184916020909101906110cf565b5091602001919060010190611207565b5061114f92915061128f565b8280548282559060005260206000209081019282156111435791602002820182811115611143578251825591602001919060010190611128565b5b8082111561114f576000815560010161127b565b8082111561114f5760006112a382826112ac565b5060010161128f565b5080546112b890611a7c565b6000825580601f106112c8575050565b601f016020900490600052602060002090810190610c36919061127a565b80356001600160a01b0381168114610f8a57600080fd5b600082601f83011261130d578081fd5b813567ffffffffffffffff81111561132757611327611ae8565b61133a601f8201601f1916602001611932565b81815284602083860101111561134e578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611379578081fd5b611382826112e6565b9392505050565b60006020828403121561139a578081fd5b5035919050565b6000806000606084860312156113b5578182fd5b833592506113c5602085016112e6565b9150604084013590509250925092565b600080604083850312156113e7578182fd5b82359150602083013567ffffffffffffffff811115611404578182fd5b611410858286016112fd565b9150509250929050565b600080600080600080600080610100898b031215611436578384fd5b8835975060208901359650604089013595506060890135945061145b60808a016112e6565b935061146960a08a016112e6565b925060c0890135915060e089013567ffffffffffffffff81111561148b578182fd5b89016040818c03121561149c578182fd5b809150509295985092959890939650565b600082825180855260208086019550808260051b840101818601855b848110156114f757601f198684030189526114e58383516115d6565b988401989250908301906001016114c9565b5090979650505050505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611535578081fd5b8260051b80836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b8381101561158057815187529582019590820190600101611564565b509495945050505050565b600281106115a957634e487b7160e01b600052602160045260246000fd5b9052565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600081518084526115ee816020860160208601611a4c565b601f01601f19169290920160200192915050565b60008251611614818460208701611a4c565b9190910192915050565b6001600160a01b038416815282602082015260606040820152600061164660608301846115d6565b95945050505050565b602081528151602082015260208201516040820152604082015160608201526000606083015161016080608085015261168c6101808501836115d6565b915060808501516116a060a086018261158b565b5060a08501516001600160a01b03811660c08601525060c08501516001600160a01b03811660e08601525060e0850151610100858101919091528501516101206116f4818701836001600160a01b03169052565b80870151915050601f1961014081878603018188015261171485846114ad565b9088015187820390920184880152935090506117308382611551565b9695505050505050565b60006101208b83528a60208401528960408401528060608401526117608184018a6115d6565b915050611770608083018861158b565b6001600160a01b0380871660a084015280861660c08401528460e0840152808416610100840152509a9950505050505050505050565b60006101208b835260208b818501528a60408501528960608501526001600160a01b03808a16608086015280891660a08601528760c086015280871660e0860152508161010085015261016084016117fe8687611963565b60408588015282945080835261018092508287019450828160051b880101925081865b8281101561188e5788850361017f19018752813536859003601e19018112611847578889fd5b8401803567ffffffffffffffff81111561185f57898afd5b80360386131561186d57898afd5b61187a87828a85016115ad565b988801989650505090850190600101611821565b5050505061189e82870187611963565b86830361011f1901610140880152935091506118bb818484611504565b9e9d5050505050505050505050505050565b6000808335601e198436030181126118e3578283fd5b83018035915067ffffffffffffffff8211156118fd578283fd5b6020019150600581901b360382131561191557600080fd5b9250929050565b6000808335601e198436030181126118e3578182fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561195b5761195b611ae8565b604052919050565b6000808335601e19843603018112611979578283fd5b830160208101925035905067ffffffffffffffff81111561199957600080fd5b8060051b360383131561191557600080fd5b600082198211156119be576119be611ad2565b500190565b600067ffffffffffffffff808411156119de576119de611ae8565b8360051b60206119ef818301611932565b8681528181019086368582011115611a05578687fd5b8694505b88851015611a4057803586811115611a1f578788fd5b611a2b36828b016112fd565b84525060019490940193918301918301611a09565b50979650505050505050565b60005b83811015611a67578181015183820152602001611a4f565b83811115611a76576000848401525b50505050565b600181811c90821680611a9057607f821691505b60208210811415611ab157634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611acb57611acb611ad2565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000804000a";

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
