// import React from "react";
// import Web3 from "web3";
// import {
//   ConnectWallet,
//   UpdateAddress,
//   UpdateWalletBalance,
//   WalletDisconnect,
// } from "../Redux/Action";
// import { store } from "../Redux/store";
// import { provider } from "./WalletConnect";
// export var web3_ = new Web3(
//   "https://binance.infura.io/v3/7157cc1a7c4446ab9260643e2c2c0b47"
// );

// export const ConnectMetamask = async () => {
//   if (window.ethereum) {
//     web3_ = new Web3(window.ethereum);
//     await window.ethereum
//       .request({ method: "eth_requestAccounts" })
//       .then((res) => {
//         store.getState().ConnectWallet.address = res[0];
//         store.getState().ConnectWallet.isConnect = true;

//         ConnectWallet(res[0]);
//         localStorage.setItem(
//           "WalletConnect",
//           JSON.stringify({
//             isConnect: true,
//             address: res[0],
//           })
//         );
//       });
//   } else {
//     alert("Please connect via Wallet Connect");
//     store.getState().ConnectWallet.isConnect = false;
//   }
//   if (window.ethereum) {
//     window.ethereum.on("connect", (connect) => {
//       console.log(connect);
//     });

//     window.ethereum.on("accountsChanged", (accounts) => {
//       console.log(accounts[0]);
//       UpdateAddress(accounts[0]);
//       UpdateWalletBalance(accounts[0]);
//       ConnectWallet(accounts[0]);
//       store.getState().ConnectWallet.isConnect = true;
//       localStorage.setItem(
//         "WalletConnect",
//         JSON.stringify({
//           isConnect: true,
//           address: accounts[0],
//         })
//       );
//     });

//     // Subscribe to chainId change
//     window.ethereum.on("chainChanged", (chainId) => {
//       console.log(chainId);
//     });

//     // Subscribe to session disconnection
//     window.ethereum.on("disconnect", (code, reason) => {
//       console.log(code, reason);
//     });
//   }
// };

// // Wallect Connnect Funcitonltiy
// export const ConnectWeb3Wallet = async () => {
//   await provider.enable();
//   web3_ = new Web3(provider);
//   console.log(web3_, provider);
//   let address = await web3_.eth.getAccounts();
//   store.getState().ConnectWallet.address = address[0];
//   store.getState().ConnectWallet.isConnect = true;
//   ConnectWallet(address[0]);
//   localStorage.setItem(
//     "WalletConnect",
//     JSON.stringify({
//       isConnect: true,
//       address: address[0],
//     })
//   );
//   provider.on("accountsChanged", async (accounts) => {
//     console.log(accounts);
//     UpdateAddress(accounts[0]);
//     UpdateWalletBalance(accounts[0]);
//     store.getState().ConnectWallet.isConnect = true;
//     localStorage.setItem(
//       "WalletConnect",
//       JSON.stringify({
//         isConnect: true,
//         address: accounts[0],
//       })
//     );
//   });

//   // Subscribe to chainId change
//   provider.on("chainChanged", (chainId) => {
//     console.log("bakjdsfbkafafasdf", chainId);
//   });

//   // Subscribe to session disconnection
//   provider.on("disconnect", (code, reason) => {
//     console.log(code, reason);
//   });
// };

// export const DisconnectWallet = () => {
//   localStorage.setItem(
//     "WalletConnect",
//     JSON.stringify({
//       isConnect: false,
//       address: "",
//     })
//   );
//   if (!window.ethereum) {
//     web3_.currentProvider.disconnect();
//   } else {
//     WalletDisconnect();
//     provider.disconnect();
//   }
//   store.getState().ConnectWallet.address = "";
//   store.getState().ConnectWallet.isConnect = false;
// };

// export const NetworkChanged = async () => {
//   if (window.ethereum) {
//     let chainID = await web3_.eth.getChainId();
//     if ((chainID = 97)) {
//       await window.ethereum.request({
//         method: "wallet_switchEthereumChain",
//         params: [{ chainId: "0x61 " }], // chainId must be in hexadecimal numbers
//       });
//     }
//     window.ethereum.on("networkChanged", async (res) => {
//       if ((res = 97)) {
//         await window.ethereum.request({
//           method: "wallet_switchEthereumChain",
//           params: [{ chainId: "0x61 " }], // chainId must be in hexadecimal numbers
//         });
//       }
//     });
//   }
// };
