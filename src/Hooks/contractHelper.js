import Web3 from "web3";

import { ICO_ABI } from "../Config/ABI/ICO_ABI";
import { ICOTokenContract } from "../Config/Contract/Contract";
export const getContract = (abi, address, provider) => {
  const web3 = new Web3(provider);
  let contract = new web3.eth.Contract(ICO_ABI, ICOTokenContract);
  return contract.buy();
};
