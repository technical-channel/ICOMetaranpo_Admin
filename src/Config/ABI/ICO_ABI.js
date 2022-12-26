export const ICO_ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hardCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTimeSale1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTimeSale1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTimeSale2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTimeSale2",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_TokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_USDTContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "MROtoken",
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
    name: "Tokonomics",
    outputs: [
      {
        internalType: "uint256",
        name: "team",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "development",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "crew",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "charitable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "media",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gameNFT",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "projects",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "code",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "manualBurning",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDTtoken",
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
    name: "allBuyerAddress",
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
        name: "_USDTToken",
        type: "uint256",
      },
    ],
    name: "buy",
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
        name: "",
        type: "address",
      },
    ],
    name: "buyerInformation",
    outputs: [
      {
        internalType: "uint256",
        name: "usdtAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "RanpoToken",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractMROToken",
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
    name: "contractUSDTToken",
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
    name: "hardCap",
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
    name: "isHardCapReach",
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
  {
    inputs: [],
    name: "isICOOver",
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
    name: "preSale",
    outputs: [
      {
        internalType: "uint256",
        name: "preSaleRate1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "preSaleRate2",
        type: "uint256",
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
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_toWallet",
        type: "address",
      },
    ],
    name: "retrieveStuckedERC20Token",
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
    name: "saleDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "startTimeSale1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimeSale1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTimeSale2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimeSale2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalTokenSale",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalUSDTToken",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenForsale",
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
        name: "_team",
        type: "address",
      },
      {
        internalType: "address",
        name: "_development",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crew",
        type: "address",
      },
      {
        internalType: "address",
        name: "_charitable",
        type: "address",
      },
      {
        internalType: "address",
        name: "_media",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gameNFT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_projects",
        type: "address",
      },
      {
        internalType: "address",
        name: "_code",
        type: "address",
      },
      {
        internalType: "address",
        name: "_manualBurning",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stake",
        type: "address",
      },
    ],
    name: "tokonomicsTransfere",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hardCap",
        type: "uint256",
      },
    ],
    name: "updateHardCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_preSaleRate1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_preSaleRate2",
        type: "uint256",
      },
    ],
    name: "updatePreSaleRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startTimeSale1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTimeSale1",
        type: "uint256",
      },
    ],
    name: "updateStartEndTimeSale1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startTimeSale2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTimeSale2",
        type: "uint256",
      },
    ],
    name: "updateStartEndTimeSale2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
