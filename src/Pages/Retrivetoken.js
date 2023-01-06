import React, { useState, useEffect } from 'react'
import { Tokenretrive, GetDecimalStatus } from '../Utils/contractHelper'
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import Swal from "sweetalert2";

// Tokenretrive
const Retrivetoken = () => {
    const { library, account, active, chainId } = useWeb3React();

    const [Tokenaddress, setTokenaddress] = useState()
    const [Amount, setAmount] = useState()
    const [WalletAddress, setWalletAddress] = useState()
    const [DecimalStatus, setDecimalStatus] = useState("");

    useEffect(() => {
    }, []);


    const Token = async () => {
        console.log(DecimalStatus, "MRO TOKEN ");

        console.log(Tokenaddress, Amount, WalletAddress);
        if (active) {
            if (Tokenaddress !== "" || Amount !== "" || WalletAddress !== "") {
                await Tokenretrive(
                    library.provider,
                    Tokenaddress,
                    DecimalStatus === "14" ? (Amount * Math.pow(10, 14)).toString() : new Web3().utils.toWei(Amount.toString(), "ether"),
                    WalletAddress
                )
                    .send({
                        from: account,
                    })
                    .then((res) => {
                        console.log(res);
                        // setDecimalStatus(true);
                        Swal.fire("Transaction Successful", "", "success");
                    });
            } else {
                Swal.fire("Please fill input value")
            }

        } else {
            Swal.fire("Please connct to the wallet")
        }

    }
    return (
        <>
            <div class="w-full h-[350px] max-w-xs">
                <form class="h-[350px]  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className='text-xl font-bold py-2'>Retrive Token</h1>
                    <div class="mb-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-xl" for="Tokenaddress">
                            Token Address
                        </label>
                        <input
                            onChange={(e) => {
                                GetDecimalStatus(e.target.value).then((res) => {
                                    // console(res);
                                    setDecimalStatus((res));
                                });
                                setTokenaddress(e.target.value)
                            }}
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tokenaddress" type="text" placeholder="Tokenaddress" />
                    </div>
                    <div class="mb-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-xl" for="amount">
                            Amount
                        </label>
                        <input
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number" placeholder="Amount" />

                    </div>

                    <div class="mb-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-xl" for="username">
                            Wallet Address
                        </label>
                        <input
                            onChange={(e) => {
                                setWalletAddress(e.target.value)
                            }}
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="walletaddress" type="text" placeholder="WalletAddress" />
                    </div>
                    <div class="flex items-center justify-between mt-1">
                        <button
                            onClick={Token}
                            class="bg-[#FFD51E] hover:bg-[#FFD51E] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Retrivetoken