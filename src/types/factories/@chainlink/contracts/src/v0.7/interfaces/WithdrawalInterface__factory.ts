/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  WithdrawalInterface,
  WithdrawalInterfaceInterface,
} from "../../../../../../@chainlink/contracts/src/v0.7/interfaces/WithdrawalInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
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
];

export class WithdrawalInterface__factory {
  static readonly abi = _abi;
  static createInterface(): WithdrawalInterfaceInterface {
    return new utils.Interface(_abi) as WithdrawalInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawalInterface {
    return new Contract(address, _abi, signerOrProvider) as WithdrawalInterface;
  }
}
