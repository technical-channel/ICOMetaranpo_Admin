import Web3 from "web3";

import { ICOTokenContract } from "../Config/Contract/Contract";
import { USDTToken } from "../Config/Contract/Contract";
import { USDTTokenABI } from "../Config/ABI/USDTToken";
import { ICO_ABI } from "../Config/ABI/ICO_ABI";
import { RPC } from "../Config/constant";

const getContract = (contractAddress, ABI, provider) => {
  const web3_ = new Web3(provider);
  return new web3_.eth.Contract(ABI, contractAddress);
};

// tokonomicsTransfere

export const GetFundtransfer = (provider, address, amount) => {
  console.log(address, amount);
  return getContract(
    ICOTokenContract,
    ICO_ABI,
    provider
  ).methods.tokenomicsTransfer(address, amount);
};

// retrieveStuckedERC20Token
export const Tokenretrive = (provider, amount, address) => {
  return getContract(
    ICOTokenContract,
    ICO_ABI,
    provider
  ).methods.retrieveStuckedERC20Token();
};

export const GetICOStatus = (provider) => {
  return getContract(ICOTokenContract, ICO_ABI, provider)
    .methods.isICOOver()
    .call();
};

export const GetTokenomics = (provider, address) => {
  return getContract(ICOTokenContract, ICO_ABI, provider)
    .methods.Tokonomics()
    .call();
};

export const GetUserToken = () => {
  return getContract(USDTToken, USDTTokenABI, RPC)
    .methods.balanceOf(ICOTokenContract)
    .call();
};

export const Getowneraddres = async () => {
  let data = await getContract(ICOTokenContract, ICO_ABI, RPC)
    .methods.owner()
    .call();
  console.log(data);
  return data;
};
