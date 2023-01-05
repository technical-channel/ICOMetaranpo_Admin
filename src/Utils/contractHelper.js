import Web3 from "web3";

import { ICOTokenContract } from "../Config/Contract/Contract";
import { USDTToken } from "../Config/Contract/Contract";
import { USDTTokenABI } from "../Config/ABI/USDTToken";
import { ICO_ABI } from "../Config/ABI/ICO_ABI";
import { RPC } from "../Config/constant";
import { RanpoToken } from "../Config/Contract/Contract";
import { RanpoTokenABI } from "../Config/ABI/PayoutTokenABI";

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

// updatePreSaleRate

export const PresaleRate = (provider, preSaleRate1, preSaleRate2) => {
  return getContract(ICOTokenContract, ICO_ABI, provider
  ).methods.updatePreSaleRate(preSaleRate1, preSaleRate2);
}

// retrieveStuckedERC20Token
export const Tokenretrive = (provider, tokenAddr, ammount, address,) => {
  return getContract(
    ICOTokenContract,
    ICO_ABI,
    provider
  ).methods.retrieveStuckedERC20Token(tokenAddr, ammount, address);
};

export const GetICOStatus = (provider) => {
  return getContract(ICOTokenContract, ICO_ABI, provider)
    .methods.isICOOver()
    .call();
};

// Decimal value
export const GetDecimalStatus = async (tokenAddress) => {
  let decimal = await getContract(tokenAddress, RanpoTokenABI, RPC)
    .methods.decimals()
    .call();
  console.log(decimal);
  return decimal;
};
// close here

export const GetTokenomics = (provider, address) => {
  getContract(ICOTokenContract, ICO_ABI, provider)
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
