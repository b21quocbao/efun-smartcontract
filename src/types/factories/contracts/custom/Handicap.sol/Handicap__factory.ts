/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Handicap,
  HandicapInterface,
} from "../../../../contracts/custom/Handicap.sol/Handicap";

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
        internalType: "uint256",
        name: "_predictOptionStats",
        type: "uint256",
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
    ],
    name: "calculateReward",
    outputs: [
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sponsorReward",
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
        internalType: "uint256",
        name: "_predictOptionStats",
        type: "uint256",
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
  "0x608060405234801561001057600080fd5b50610ad5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063dc5e10981461003b578063fa29edd914610068575b600080fd5b61004e610049366004610694565b61008b565b604080519283526020830191909152015b60405180910390f35b61007b61007636600461071e565b610319565b604051901515815260200161005f565b60008060008a73ffffffffffffffffffffffffffffffffffffffff16632e3405998b6040518263ffffffff1660e01b81526004016100cb91815260200190565b60006040518083038186803b1580156100e357600080fd5b505afa1580156100f7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261011f9190810190610785565b9050600061017682610160015189806040019061013c91906108f3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061045f92505050565b905080158015610187575084600414155b8061019c575080600414801561019c57508415155b6101ec5760405162461bcd60e51b815260206004820152600960248201527f6e6f2d7265776172640000000000000000000000000000000000000000000000604482015260640160405180910390fd5b801580156101f8575084155b8061020e575080600114801561020e5750846004145b1561022c578561021f888a356109f6565b61022991906109d6565b93505b8015801561023a5750846001145b8061025057508060011480156102505750846003145b156102845785600261026289836109be565b61026d908b356109f6565b61027791906109d6565b61028191906109d6565b93505b801580156102925750846002145b806102a857508060011480156102a85750846002145b156102b257873593505b801580156102c05750846003145b806102d657508060011480156102d65750846001145b156102ea576102e7600289356109d6565b93505b61012082015189906102fe908a35906109f6565b61030891906109d6565b925050509850989650505050505050565b6000808385610328898c6109be565b61033291906109be565b61033c91906109f6565b9050600061034a888a6109be565b905060006103588a8c610a15565b9050600061036689846109f6565b905060006002610376898c6109be565b61038090866109f6565b61038a91906109d6565b905060006103996002866109d6565b9050600060026103a98b8e6109be565b6103b390876109f6565b6103bd91906109d6565b905060006103cc6002876109d6565b90506000806103db878b610a15565b10159050600080836103ed888d610a15565b6103f79190610a15565b1015905060008086610409878e610a15565b6104139190610a15565b1015905060008d158061042657508d6004145b90508380156104325750825b801561043b5750815b80156104445750805b9c505050505050505050505050509998505050505050505050565b6000805b83518110156104bb5761049d84828151811061048f57634e487b7160e01b600052603260045260246000fd5b6020026020010151846104c3565b156104a95790506104bd565b806104b381610a5c565b915050610463565b505b92915050565b6000816040516020016104d691906108d7565b60405160208183030381529060405280519060200120836040516020016104fd91906108d7565b6040516020818303038152906040528051906020012014905092915050565b805161052781610aa3565b919050565b600082601f83011261053c578081fd5b8151602061055161054c8361099a565b610969565b80838252828201915082860187848660051b8901011115610570578586fd5b855b858110156105b157815167ffffffffffffffff811115610590578788fd5b61059e8a87838c010161062a565b8552509284019290840190600101610572565b5090979650505050505050565b600082601f8301126105ce578081fd5b815160206105de61054c8361099a565b80838252828201915082860187848660051b89010111156105fd578586fd5b855b858110156105b1578151845292840192908401906001016105ff565b80516002811061052757600080fd5b600082601f83011261063a578081fd5b815167ffffffffffffffff81111561065457610654610a8d565b610667601f8201601f1916602001610969565b81815284602083860101111561067b578283fd5b61068c826020830160208701610a2c565b949350505050565b600080600080600080600080610100898b0312156106b0578384fd5b88356106bb81610aa3565b9750602089013596506040890135955060608901359450608089013567ffffffffffffffff8111156106eb578485fd5b89016080818c0312156106fc578485fd5b979a969950949793969560a0850135955060c08501359460e001359350915050565b60008060008060008060008060006101208a8c03121561073c578081fd5b893561074781610aa3565b9b60208b01359b5060408b01359a60608101359a506080810135995060a0810135985060c0810135975060e081013596506101000135945092505050565b600060208284031215610796578081fd5b815167ffffffffffffffff808211156107ad578283fd5b908301906101a082860312156107c1578283fd5b6107c961093f565b825181526020830151602082015260408301516040820152606083015160608201526080830151828111156107fc578485fd5b6108088782860161062a565b60808301525061081a60a0840161061b565b60a082015261082b60c0840161051c565b60c082015260e083015182811115610841578485fd5b61084d8782860161062a565b60e08301525061010061086181850161051c565b90820152610120838101519082015261014061087e81850161051c565b908201526101608381015183811115610895578586fd5b6108a18882870161052c565b82840152505061018080840151838111156108ba578586fd5b6108c6888287016105be565b918301919091525095945050505050565b600082516108e9818460208701610a2c565b9190910192915050565b6000808335601e19843603018112610909578283fd5b83018035915067ffffffffffffffff821115610923578283fd5b60200191503681900382131561093857600080fd5b9250929050565b6040516101a0810167ffffffffffffffff8111828210171561096357610963610a8d565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561099257610992610a8d565b604052919050565b600067ffffffffffffffff8211156109b4576109b4610a8d565b5060051b60200190565b600082198211156109d1576109d1610a77565b500190565b6000826109f157634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610a1057610a10610a77565b500290565b600082821015610a2757610a27610a77565b500390565b60005b83811015610a47578181015183820152602001610a2f565b83811115610a56576000848401525b50505050565b6000600019821415610a7057610a70610a77565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610ac557600080fd5b5056fea164736f6c6343000804000a";

type HandicapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HandicapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Handicap__factory extends ContractFactory {
  constructor(...args: HandicapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Handicap> {
    return super.deploy(overrides || {}) as Promise<Handicap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Handicap {
    return super.attach(address) as Handicap;
  }
  override connect(signer: Signer): Handicap__factory {
    return super.connect(signer) as Handicap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HandicapInterface {
    return new utils.Interface(_abi) as HandicapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Handicap {
    return new Contract(address, _abi, signerOrProvider) as Handicap;
  }
}
