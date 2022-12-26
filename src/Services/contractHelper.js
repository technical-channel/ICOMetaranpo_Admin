// import Web3 from "web3";
// import {
//   ICOContractAddress,
//   USDTTokenAddress,
// } from "../config/Contracts/contract";
// import ICO_ABI from "../config/ABI/ICO_ABI";
// import { USDT_ABI } from "../config/ABI/USDT_ABI";

// const getContract = (contractAddress, ABI, provider) => {
//   const web3_ = new Web3(provider);
//   return new web3_.eth.Contract(ABI, contractAddress);
// };

// export const metacadeBuyContract = (provider) => {
//   return getContract(
//     ICOContractAddress,

//     ICO_ABI,
//     provider
//   ).methods.SaleICOToken("100000000000000000");
// };

// export const usdtContractApprove = (provider) => {
//   return getContract(USDTTokenAddress, USDT_ABI, provider).methods.approve(
//     ICOContractAddress,
//     "100000000000000000"
//   );
// };
