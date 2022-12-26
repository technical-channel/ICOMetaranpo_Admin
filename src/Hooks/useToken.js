// import { useWeb3React } from "@web3-react/core";
// import { USDTToken } from "../Config/Contract/Contract";

// import { ICOTokenContract } from "../Config/Contract/Contract";

// import { getContract, getErc720Contract } from "./contractHelper";
// import JSBI from "jsbi";
// import { ICO_ABI } from "../Config/ABI/ICO_ABI";
// import Web3 from "web3";

// function useToken() {
//   const { library } = useWeb3React();

//   const BuyToken = (number, provider) => {
//     console.log(number);
//     const web3 = new Web3(provider);
//     let contract = new web3.eth.Contract(ICO_ABI, ICOTokenContract);
//     console.log(contract);
//     return contract.methods.buy(number);
//   };

//   return {
//     BuyToken,
//   };
// }

// export default useToken;
