/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ELPToken, ELPTokenInterface } from "../../contracts/ELPToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nav",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBuy",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "TokenAction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "_class",
        type: "uint256",
      },
    ],
    name: "buyNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "_elpAmt",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "capacity",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "classes",
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
    name: "counter",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "counts",
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
    name: "currentNav",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "efunToken",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "elpAmtOfClass",
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
    name: "elpAmtOfNft",
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
    name: "erc721Token",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_efunToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_feeCollector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_elpAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_oneHundredPrecent",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_erc721Token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeStamp",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "limits",
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
    name: "maxSellAmount",
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
    name: "maxSellAmountPerAddress",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oneHundredPrecent",
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
        name: "",
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
    name: "poolAddress",
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
    inputs: [],
    name: "sellFee",
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
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "sellNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_elpAmt",
        type: "uint256",
      },
    ],
    name: "sellToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_counts",
        type: "uint256[]",
      },
    ],
    name: "setCounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_elpAmtOfClass",
        type: "uint256[]",
      },
    ],
    name: "setElpAmtOfClass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc721Token",
        type: "address",
      },
    ],
    name: "setErc721Token",
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
        internalType: "uint256[]",
        name: "_limits",
        type: "uint256[]",
      },
    ],
    name: "setLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sellFee",
        type: "uint256",
      },
    ],
    name: "setSellFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalSellAmount",
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
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x608060405234801561001057600080fd5b5061293b806100206000396000f3fe608060405234801561001057600080fd5b50600436106102ff5760003560e01c80635cfc1a511161019c578063992da963116100ee578063c415b95c11610097578063dd62ed3e11610071578063dd62ed3e14610640578063e9f468a714610679578063f2fde38b1461068257600080fd5b8063c415b95c14610612578063c5c2521614610625578063dc715d1b1461062d57600080fd5b8063a9059cbb116100c8578063a9059cbb146105d9578063addf001e146105ec578063b6fba3af146105ff57600080fd5b8063992da963146105a0578063a42dce80146105b3578063a457c2d7146105c657600080fd5b806370a08231116101505780638b4cee081161012a5780638b4cee08146105745780638da5cb5b1461058757806395d89b411461059857600080fd5b806370a0823114610523578063715018a61461054c578063817dbe9f1461055457600080fd5b806361bc221a1161018157806361bc221a146104f057806366d602ae146104f95780636e04ff0d1461050257600080fd5b80635cfc1a51146104d45780635f2d6bcd146104dd57600080fd5b80632b025e2a1161025557806339509351116102095780634585e33b116101e35780634585e33b1461049b57806351ed8288146104ae5780635919ffb2146104c157600080fd5b8063395093511461046c5780633f3b3b271461047f5780634081eead1461048857600080fd5b80632d296bf11161023a5780632d296bf114610437578063313ce5671461044a57806338c1a0e31461045957600080fd5b80632b025e2a1461041b5780632b14ca561461042e57600080fd5b80631755ff21116102b75780632397e4d7116102915780632397e4d7146103e257806323b872dd146103f5578063280dac671461040857600080fd5b80631755ff211461039c57806318160ddd146103c757806320e9daf1146103cf57600080fd5b8063095ea7b3116102e8578063095ea7b3146103375780630cd927a11461035a578063120b088b1461039357600080fd5b80630551b6e71461030457806306fdde0314610319575b600080fd5b610317610312366004612501565b610695565b005b61032161070b565b60405161032e91906127b9565b60405180910390f35b61034a6103453660046124d6565b61079d565b604051901515815260200161032e565b610385610368366004612732565b60ac60209081526000928352604080842090915290825290205481565b60405190815260200161032e565b61038560a85481565b60a6546103af906001600160a01b031681565b6040516001600160a01b03909116815260200161032e565b603554610385565b6103856103dd366004612702565b6107b5565b6103176103f0366004612702565b6107d6565b61034a610403366004612496565b6107e4565b610317610416366004612501565b61080a565b610317610429366004612636565b610877565b61038560ad5481565b610317610445366004612702565b610a67565b6040516012815260200161032e565b60af546103af906001600160a01b031681565b61034a61047a3660046124d6565b610a73565b61038560ab5481565b610317610496366004612442565b610ab2565b6103176104a93660046125c9565b610b2e565b6103856104bc366004612702565b610b8a565b6103176104cf366004612501565b610d67565b61038560b35481565b60ae546103af906001600160a01b031681565b61038560aa5481565b61038560a75481565b6105156105103660046125c9565b610dd4565b60405161032e92919061279e565b610385610531366004612442565b6001600160a01b031660009081526033602052604090205490565b610317610df5565b610385610562366004612702565b60b06020526000908152604090205481565b610317610582366004612702565b610e5b565b6065546001600160a01b03166103af565b610321610eba565b6103176105ae366004612702565b610ec9565b6103176105c1366004612442565b610f76565b61034a6105d43660046124d6565b610ff2565b61034a6105e73660046124d6565b6110a7565b6103856105fa366004612702565b6110b5565b60a5546103af906001600160a01b031681565b60a9546103af906001600160a01b031681565b6103856110c5565b61038561063b366004612702565b611155565b61038561064e36600461245e565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b61038560b25481565b610317610690366004612442565b611165565b6065546001600160a01b031633146106f45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b80516107079060b5906020840190612270565b5050565b60606036805461071a90612897565b80601f016020809104026020016040519081016040528092919081815260200182805461074690612897565b80156107935780601f1061076857610100808354040283529160200191610793565b820191906000526020600020905b81548152906001019060200180831161077657829003601f168201915b5050505050905090565b6000336107ab818585611244565b5060019392505050565b60b481815481106107c557600080fd5b600091825260209091200154905081565b6107e1816000611369565b50565b6000336107f28582856115a1565b6107fd85858561162d565b60019150505b9392505050565b6065546001600160a01b031633146108645760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106eb565b80516107079060b1906020840190612270565b6000610883600161182a565b9050801561089b576000805461ff0019166101001790555b6108a3611945565b6108ad8a8a6119b8565b6108b5611a2d565b60a680546001600160a01b03808b166001600160a01b03199283161790925560a580548a841690831617905560a980549288169290911691909117905560b28390556064610904846002612835565b61090e9190612815565b60ad5560ae80546001600160a01b0319166001600160a01b0384161790556040805160a08101825268056bc75e2d631000008152681b1ae4d6e2ef5000006020820152683635c9adc5dea000009181019190915269010f0cf064dd59200000606082015269021e19e0c9bab240000060808201526109909060b19060056122bb565b506040805160a08101825260c88152601e6020820152600f9181019190915260046060820152600360808201526109cb9060b4906005612304565b506040805160a081018252600080825260208201819052918101829052606081018290526080810191909152610a059060b5906005612304565b5060b3849055610a158685611b37565b8015610a5b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050505050565b6107e181600080611c16565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091906107ab9082908690610aad9087906127fd565b611244565b6065546001600160a01b03163314610b0c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106eb565b60ae80546001600160a01b0319166001600160a01b0392909216919091179055565b6201517660ab5442610b409190612854565b10610707576014610b5060355490565b610b5a9190612815565b60a7819055610b6b90600590612815565b60a85560aa8054600090610b7e906128d2565b909155504260ab555050565b60008060b18381548110610bae57634e487b7160e01b600052603260045260246000fd5b600091825260208220015460ae546040516335313c2160e11b81523360048201529193506001600160a01b031690636a62784290602401602060405180830381600087803b158015610bff57600080fd5b505af1158015610c13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c37919061271a565b600081815260b06020526040902085905560b480549192509085908110610c6e57634e487b7160e01b600052603260045260246000fd5b906000526020600020015460b58581548110610c9a57634e487b7160e01b600052603260045260246000fd5b906000526020600020015410610cf25760405162461bcd60e51b815260206004820152600d60248201527f6578636565642d6c696d6974730000000000000000000000000000000000000060448201526064016106eb565b60b58481548110610d1357634e487b7160e01b600052603260045260246000fd5b9060005260206000200160008154610d2a906128d2565b91905081905550610803828260b58781548110610d5757634e487b7160e01b600052603260045260246000fd5b9060005260206000200154611c16565b6065546001600160a01b03163314610dc15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106eb565b80516107079060b4906020840190612270565b600060606201517660ab5442610dea9190612854565b101591509250929050565b6065546001600160a01b03163314610e4f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106eb565b610e596000611ce1565b565b6065546001600160a01b03163314610eb55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106eb565b60ad55565b60606037805461071a90612897565b600081815260b0602052604081205460b180549091908110610efb57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015460ae54604051633f34d4cf60e21b8152600481018590523360248201529192506001600160a01b03169063fcd3533c90604401600060405180830381600087803b158015610f5457600080fd5b505af1158015610f68573d6000803e3d6000fd5b505050506107078183611369565b6065546001600160a01b03163314610fd05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106eb565b60a980546001600160a01b0319166001600160a01b0392909216919091179055565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091908381101561108f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016106eb565b61109c8286868403611244565b506001949350505050565b6000336107ab81858561162d565b60b181815481106107c557600080fd5b60b35460a65460408051635cfc1a5160e01b81529051600093926001600160a01b031691635cfc1a51916004808301926020929190829003018186803b15801561110e57600080fd5b505afa158015611122573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611146919061271a565b6111509190612815565b905090565b60b581815481106107c557600080fd5b6065546001600160a01b031633146111bf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106eb565b6001600160a01b03811661123b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016106eb565b6107e181611ce1565b6001600160a01b0383166112a65760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106eb565b6001600160a01b0382166113075760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106eb565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60a7548211156113bb5760405162461bcd60e51b815260206004820152601860248201527f6578636565642d746f74616c2d73656c6c2d616d6f756e74000000000000000060448201526064016106eb565b60a85460aa54600090815260ac602090815260408083203384529091529020546113e69084906127fd565b11156114345760405162461bcd60e51b815260206004820152601660248201527f6578636565642d616d6f756e742d7065722d757365720000000000000000000060448201526064016106eb565b8160a760008282546114469190612854565b909155505060aa54600090815260ac60209081526040808320338452909152812080548492906114779084906127fd565b90915550600090506114876110c5565b905060006114958483612835565b60a65460b25460ad549293506114e6926001600160a01b03909216913391906114be9082612854565b6114c89086612835565b6114d29190612815565b60a5546001600160a01b0316929190611d33565b60a65460a95460b25460ad5461150f936001600160a01b03908116931691906114c89086612835565b60ad546040805133815260208101859052808201879052606081019290925260808201859052600060a0830181905260c08301524260e0830152517f1f985a01c095dbda1faaa5630d4f158c9360afe9222806457b3b8ec78460a819918190036101000190a18360b360008282546115879190612854565b90915550508261159b5761159b3385611da2565b50505050565b6001600160a01b03838116600090815260346020908152604080832093861683529290522054600019811461159b57818110156116205760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106eb565b61159b8484848403611244565b6001600160a01b0383166116a95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016106eb565b6001600160a01b03821661170b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106eb565b6001600160a01b0383166000908152603360205260409020548181101561179a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016106eb565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906117d19084906127fd565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161181d91815260200190565b60405180910390a361159b565b60008054610100900460ff16156118b8578160ff16600114801561184d5750303b155b6118b05760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106eb565b506000919050565b60005460ff8084169116106119265760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106eb565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166119b05760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016106eb565b610e59611eed565b600054610100900460ff16611a235760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016106eb565b6107078282611f61565b600054610100900460ff16611a985760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016106eb565b670de0b6b3a7640000609755600160a38190556000609855609980546001600160a01b0319908116909155609a919091556002609b557f90430203e2d9ce04f00738d355173358b054545ecb52218de9c6fb01cbd9aeaf609c557f89cbf5af14e0328a3cd3a734f92c3832d729d431da79b7873a62cbeebd37beb6609d55609e805490911673c89bd4e1632d3a43cb03aaad5262cbe4038bc571179055565b6001600160a01b038216611b8d5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106eb565b8060356000828254611b9f91906127fd565b90915550506001600160a01b03821660009081526033602052604081208054839290611bcc9084906127fd565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6000611c206110c5565b90506000611c2e8583612835565b60a65460a554919250611c50916001600160a01b039081169133911684611d33565b60408051338152602081018490529081018690526000606082015260808101859052600160a082015260c081018490524260e08201527f1f985a01c095dbda1faaa5630d4f158c9360afe9222806457b3b8ec78460a819906101000160405180910390a18460b36000828254611cc691906127fd565b909155505083611cda57611cda3386611b37565b5050505050565b606580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b17905261159b908590611ff3565b6001600160a01b038216611e025760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016106eb565b6001600160a01b03821660009081526033602052604090205481811015611e765760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016106eb565b6001600160a01b0383166000908152603360205260408120838303905560358054849290611ea5908490612854565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161135c565b505050565b600054610100900460ff16611f585760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016106eb565b610e5933611ce1565b600054610100900460ff16611fcc5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016106eb565b8151611fdf906036906020850190612344565b508051611ee8906037906020840190612344565b6000612048826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166120d89092919063ffffffff16565b805190915015611ee8578080602001905181019061206691906125a9565b611ee85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106eb565b60606120e784846000856120ef565b949350505050565b6060824710156121675760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106eb565b6001600160a01b0385163b6121be5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106eb565b600080866001600160a01b031685876040516121da9190612782565b60006040518083038185875af1925050503d8060008114612217576040519150601f19603f3d011682016040523d82523d6000602084013e61221c565b606091505b509150915061222c828286612237565b979650505050505050565b60608315612246575081610803565b8251156122565782518084602001fd5b8160405162461bcd60e51b81526004016106eb91906127b9565b8280548282559060005260206000209081019282156122ab579160200282015b828111156122ab578251825591602001919060010190612290565b506122b79291506123b7565b5090565b8280548282559060005260206000209081019282156122ab579160200282015b828111156122ab578251829069ffffffffffffffffffff169055916020019190600101906122db565b8280548282559060005260206000209081019282156122ab579160200282015b828111156122ab578251829060ff16905591602001919060010190612324565b82805461235090612897565b90600052602060002090601f01602090048101928261237257600085556122ab565b82601f1061238b57805160ff19168380011785556122ab565b828001600101855582156122ab57918201828111156122ab578251825591602001919060010190612290565b5b808211156122b757600081556001016123b8565b803561194081612919565b600082601f8301126123e7578081fd5b813567ffffffffffffffff81111561240157612401612903565b612414601f8201601f19166020016127cc565b818152846020838601011115612428578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215612453578081fd5b813561080381612919565b60008060408385031215612470578081fd5b823561247b81612919565b9150602083013561248b81612919565b809150509250929050565b6000806000606084860312156124aa578081fd5b83356124b581612919565b925060208401356124c581612919565b929592945050506040919091013590565b600080604083850312156124e8578182fd5b82356124f381612919565b946020939093013593505050565b60006020808385031215612513578182fd5b823567ffffffffffffffff8082111561252a578384fd5b818501915085601f83011261253d578384fd5b81358181111561254f5761254f612903565b8060051b91506125608483016127cc565b8181528481019084860184860187018a101561257a578788fd5b8795505b8386101561259c57803583526001959095019491860191860161257e565b5098975050505050505050565b6000602082840312156125ba578081fd5b81518015158114610803578182fd5b600080602083850312156125db578182fd5b823567ffffffffffffffff808211156125f2578384fd5b818501915085601f830112612605578384fd5b813581811115612613578485fd5b866020828501011115612624578485fd5b60209290920196919550909350505050565b60008060008060008060008060006101208a8c031215612654578485fd5b893567ffffffffffffffff8082111561266b578687fd5b6126778d838e016123d7565b9a5060208c013591508082111561268c578687fd5b506126998c828d016123d7565b98505060408a01356126aa81612919565b965060608a01356126ba81612919565b95506126c860808b016123cc565b94506126d660a08b016123cc565b935060c08a0135925060e08a013591506126f36101008b016123cc565b90509295985092959850929598565b600060208284031215612713578081fd5b5035919050565b60006020828403121561272b578081fd5b5051919050565b60008060408385031215612744578182fd5b82359150602083013561248b81612919565b6000815180845261276e81602086016020860161286b565b601f01601f19169290920160200192915050565b6000825161279481846020870161286b565b9190910192915050565b82151581526040602082015260006120e76040830184612756565b6020815260006108036020830184612756565b604051601f8201601f1916810167ffffffffffffffff811182821017156127f5576127f5612903565b604052919050565b60008219821115612810576128106128ed565b500190565b60008261283057634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561284f5761284f6128ed565b500290565b600082821015612866576128666128ed565b500390565b60005b8381101561288657818101518382015260200161286e565b8381111561159b5750506000910152565b600181811c908216806128ab57607f821691505b602082108114156128cc57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156128e6576128e66128ed565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146107e157600080fdfea164736f6c6343000804000a";

type ELPTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ELPTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ELPToken__factory extends ContractFactory {
  constructor(...args: ELPTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ELPToken> {
    return super.deploy(overrides || {}) as Promise<ELPToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ELPToken {
    return super.attach(address) as ELPToken;
  }
  override connect(signer: Signer): ELPToken__factory {
    return super.connect(signer) as ELPToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ELPTokenInterface {
    return new utils.Interface(_abi) as ELPTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ELPToken {
    return new Contract(address, _abi, signerOrProvider) as ELPToken;
  }
}
