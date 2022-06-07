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
      {
        indexed: false,
        internalType: "string[12]",
        name: "_datas",
        type: "string[12]",
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
      {
        internalType: "string[12]",
        name: "_datas",
        type: "string[12]",
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
        internalType: "uint256",
        name: "resultIndex",
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
            internalType: "uint256",
            name: "resultIndex",
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
          {
            internalType: "string[12]",
            name: "_datas",
            type: "string[12]",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c10806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063715018a61161005b578063715018a6146101055780638129fc1c1461010d5780638da5cb5b14610115578063f2fde38b1461013057600080fd5b80630b7914301461008d5780632960ddc3146100bd5780632e340599146100d257806355d90b52146100f2575b600080fd5b6100a061009b3660046113e7565b610143565b6040516100b4989796959493929190611946565b60405180910390f35b6100d06100cb3660046113ff565b61021f565b005b6100e56100e03660046113e7565b610491565b6040516100b4919061172a565b6100d0610100366004611444565b6107ec565b6100d0610bbd565b6100d0610c23565b6033546040516001600160a01b0390911681526020016100b4565b6100d061013e3660046113c6565b610c98565b60656020526000908152604090208054600182015460028301546003840154600485018054949593949293919261017990611b81565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590611b81565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b5050506005840154600690940154929360ff8116936001600160a01b036101009092048216935016905088565b6000828152606560209081526040808320600781018054835181860281018601909452808452919493610309939290859084015b828210156102ff57838290600052602060002001805461027290611b81565b80601f016020809104026020016040519081016040528092919081815260200182805461029e90611b81565b80156102eb5780601f106102c0576101008083540402835291602001916102eb565b820191906000526020600020905b8154815290600101906020018083116102ce57829003601f168201915b505050505081526020019060010190610253565b5050505084610d77565b60068301549091506001600160a01b0316331461036d5760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064015b60405180910390fd5b42826002015411156103c15760405162461bcd60e51b815260206004820152601560248201527f656e645f74696d65203c3d2074696d657374616d7000000000000000000000006044820152606401610364565b4282600201546202a3006103d59190611ab0565b10156104235760405162461bcd60e51b815260206004820152601e60248201527f656e645f74696d65202b20322064617973203e3d2074696d657374616d7000006044820152606401610364565b825161043890600484019060208601906110dc565b506003820181905560058201805460ff191660011790556040517fa3c262ffbf369b7ce5804dd0381ee64854a6df80812ec62f785877f99646fd3e90610483903390879087906116f9565b60405180910390a150505050565b610499611160565b6065600083815260200190815260200160002060405180610160016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820180546104f090611b81565b80601f016020809104026020016040519081016040528092919081815260200182805461051c90611b81565b80156105695780601f1061053e57610100808354040283529160200191610569565b820191906000526020600020905b81548152906001019060200180831161054c57829003601f168201915b5050509183525050600582015460209091019060ff16600181111561059e57634e487b7160e01b600052602160045260246000fd5b60018111156105bd57634e487b7160e01b600052602160045260246000fd5b815260058201546001600160a01b0361010090910481166020808401919091526006840154909116604080840191909152600784018054825181850281018501909352808352606090940193919290919060009084015b828210156106c057838290600052602060002001805461063390611b81565b80601f016020809104026020016040519081016040528092919081815260200182805461065f90611b81565b80156106ac5780601f10610681576101008083540402835291602001916106ac565b820191906000526020600020905b81548152906001019060200180831161068f57829003601f168201915b505050505081526020019060010190610614565b5050505081526020016008820180548060200260200160405190810160405280929190818152602001828054801561071757602002820191906000526020600020905b815481526020019060010190808311610703575b505050918352505060408051610180810190915260209091019060098301600c6000835b828210156107de57838201805461075190611b81565b80601f016020809104026020016040519081016040528092919081815260200182805461077d90611b81565b80156107ca5780601f1061079f576101008083540402835291602001916107ca565b820191906000526020600020905b8154815290600101906020018083116107ad57829003601f168201915b50505050508152602001906001019061073b565b505050915250909392505050565b84861061083b5760405162461bcd60e51b815260206004820152601a60248201527f646561646c696e655f74696d65203e2073746172745f74696d650000000000006044820152606401610364565b83851061088a5760405162461bcd60e51b815260206004820152601860248201527f656e645f74696d65203e20646561646c696e655f74696d6500000000000000006044820152606401610364565b61089760208301836119f7565b90506108a383806119a8565b9050146108f25760405162461bcd60e51b815260206004820152601b60248201527f6e6f742d6d617463682d6c656e6774682d6f7074696f6e2d6f646400000000006044820152606401610364565b6000878152606560205260409020600601546001600160a01b03161561095a5760405162461bcd60e51b815260206004820152600f60248201527f616c7265616479206578697374656400000000000000000000000000000000006044820152606401610364565b60405180610160016040528087815260200186815260200185815260200160008152602001604051806020016040528060008152508152602001600060018111156109b557634e487b7160e01b600052602160045260246000fd5b81526001600160a01b03851660208201523360408201526060016109d984806119a8565b6109e291611ac8565b81526020018380602001906109f791906119f7565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201829052509385525050506020918201849052898152606582526040908190208351815583830151600182015590830151600282015560608301516003820155608083015180519192610a7a926004850192909101906110dc565b5060a082015160058201805460ff191660018381811115610aab57634e487b7160e01b600052602160045260246000fd5b021790555060c08201516005820180547fffffffffffffffffffffff0000000000000000000000000000000000000000ff166101006001600160a01b0393841681029190911790915560e084015160068401805473ffffffffffffffffffffffffffffffffffffffff191691909316179091558201518051610b379160078401916020909101906111dd565b506101208201518051610b54916008840191602090910190611236565b50610140820151610b6b906009830190600c611270565b509050507f2828956644a25a53dbf1e61c09e0a2651c0f2a7fbbda3f549a3d3c58d4cb4ca98787878787338888604051610bac98979695949392919061181c565b60405180910390a150505050505050565b6033546001600160a01b03163314610c175760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610364565b610c216000610e22565b565b6000610c2f6001610e81565b90508015610c47576000805461ff0019166101001790555b610c4f610f9c565b8015610c95576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6033546001600160a01b03163314610cf25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610364565b6001600160a01b038116610d6e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610364565b610c9581610e22565b6000805b8351811015610dd357610db5848281518110610da757634e487b7160e01b600052603260045260246000fd5b60200260200101518461100f565b15610dc1579050610e1c565b80610dcb81611bbc565b915050610d7b565b5060405162461bcd60e51b815260206004820152601160248201527f63616e6e6f742d66696e642d696e6465780000000000000000000000000000006044820152606401610364565b92915050565b603380546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff1615610f0f578160ff166001148015610ea45750303b155b610f075760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610364565b506000919050565b60005460ff808416911610610f7d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610364565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166110075760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610364565b610c21611068565b60008160405160200161102291906116dd565b604051602081830303815290604052805190602001208360405160200161104991906116dd565b6040516020818303038152906040528051906020012014905092915050565b600054610100900460ff166110d35760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610364565b610c2133610e22565b8280546110e890611b81565b90600052602060002090601f01602090048101928261110a5760008555611150565b82601f1061112357805160ff1916838001178555611150565b82800160010185558215611150579182015b82811115611150578251825591602001919060010190611135565b5061115c9291506112b0565b5090565b6040518061016001604052806000815260200160008152602001600081526020016000815260200160608152602001600060018111156111b057634e487b7160e01b600052602160045260246000fd5b815260006020820181905260408201526060808201819052608082015260a0016111d86112c5565b905290565b82805482825590600052602060002090810192821561122a579160200282015b8281111561122a578251805161121a9184916020909101906110dc565b50916020019190600101906111fd565b5061115c9291506112ed565b8280548282559060005260206000209081019282156111505791602002820182811115611150578251825591602001919060010190611135565b82600c810192821561122a579160200282015b8281111561122a57825180516112a09184916020909101906110dc565b5091602001919060010190611283565b5b8082111561115c57600081556001016112b1565b604051806101800160405280600c905b60608152602001906001900390816112d55790505090565b8082111561115c576000611301828261130a565b506001016112ed565b50805461131690611b81565b6000825580601f10611326575050565b601f016020900490600052602060002090810190610c9591906112b0565b80356001600160a01b0381168114610f9757600080fd5b600082601f83011261136b578081fd5b813567ffffffffffffffff81111561138557611385611bed565b611398601f8201601f1916602001611a37565b8181528460208386010111156113ac578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156113d7578081fd5b6113e082611344565b9392505050565b6000602082840312156113f8578081fd5b5035919050565b60008060408385031215611411578081fd5b82359150602083013567ffffffffffffffff81111561142e578182fd5b61143a8582860161135b565b9150509250929050565b600080600080600080600060e0888a03121561145e578283fd5b8735965060208801359550604088013594506060880135935061148360808901611344565b925060a088013567ffffffffffffffff8082111561149f578384fd5b908901906040828c0312156114b2578384fd5b90925060c089013590808211156114c7578283fd5b818a0191508a601f8301126114da578283fd5b6114e2611a0d565b80838d610180860111156114f4578586fd5b855b600c81101561152e57848235111561150c578687fd5b6115198f8335880161135b565b845260209384019391909101906001016114f6565b50508094505050505092959891949750929550565b600082610180810183835b600c81101561157d5783830387526115678383516116b1565b602097880197909350919091019060010161154e565b509095945050505050565b600082825180855260208086019550808260051b840101818601855b848110156115d257601f198684030189526115c08383516116b1565b988401989250908301906001016115a4565b5090979650505050505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611610578081fd5b8260051b80836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b8381101561165b5781518752958201959082019060010161163f565b509495945050505050565b6002811061168457634e487b7160e01b600052602160045260246000fd5b9052565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600081518084526116c9816020860160208601611b51565b601f01601f19169290920160200192915050565b600082516116ef818460208701611b51565b9190910192915050565b6001600160a01b038416815282602082015260606040820152600061172160608301846116b1565b95945050505050565b6020815281516020820152602082015160408201526040820151606082015260608201516080820152600060808301516101608060a08501526117716101808501836116b1565b915060a085015161178560c0860182611666565b5060c08501516001600160a01b03811660e08601525060e08501516101006117b7818701836001600160a01b03169052565b80870151915050601f196101208187860301818801526117d78584611588565b9450808801519250506101408187860301818801526117f6858461162c565b9088015187820390920184880152935090506118128382611543565b9695505050505050565b60006101008a835260208a818501528960408501528860608501526001600160a01b03808916608086015280881660a0860152508160c085015261014084016118658788611a68565b60408588015282945080835261016092508287019450828160051b880101925081865b828110156118f55788850361015f19018752813536859003601e190181126118ae578889fd5b8401803567ffffffffffffffff8111156118c657898afd5b8036038613156118d457898afd5b6118e187828a8501611688565b988801989650505090850190600101611888565b5050505061190582880188611a68565b86830360ff1901610120880152935091506119218184846115df565b9250505082810360e08401526119378185611543565b9b9a5050505050505050505050565b60006101008a8352896020840152886040840152876060840152806080840152611972818401886116b1565b91505061198260a0830186611666565b6001600160a01b0380851660c084015280841660e0840152509998505050505050505050565b6000808335601e198436030181126119be578283fd5b83018035915067ffffffffffffffff8211156119d8578283fd5b6020019150600581901b36038213156119f057600080fd5b9250929050565b6000808335601e198436030181126119be578182fd5b604051610180810167ffffffffffffffff81118282101715611a3157611a31611bed565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611a6057611a60611bed565b604052919050565b6000808335601e19843603018112611a7e578283fd5b830160208101925035905067ffffffffffffffff811115611a9e57600080fd5b8060051b36038313156119f057600080fd5b60008219821115611ac357611ac3611bd7565b500190565b600067ffffffffffffffff80841115611ae357611ae3611bed565b8360051b6020611af4818301611a37565b8681528181019086368582011115611b0a578687fd5b8694505b88851015611b4557803586811115611b24578788fd5b611b3036828b0161135b565b84525060019490940193918301918301611b0e565b50979650505050505050565b60005b83811015611b6c578181015183820152602001611b54565b83811115611b7b576000848401525b50505050565b600181811c90821680611b9557607f821691505b60208210811415611bb657634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611bd057611bd0611bd7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000804000a";

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
