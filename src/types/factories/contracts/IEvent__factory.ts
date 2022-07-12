/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEvent, IEventInterface } from "../../contracts/IEvent";

const _abi = [
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
];

export class IEvent__factory {
  static readonly abi = _abi;
  static createInterface(): IEventInterface {
    return new utils.Interface(_abi) as IEventInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IEvent {
    return new Contract(address, _abi, signerOrProvider) as IEvent;
  }
}
