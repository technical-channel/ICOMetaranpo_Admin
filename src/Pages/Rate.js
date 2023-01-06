import React, { useState } from 'react'
import { PresaleRate } from '../Utils/contractHelper'
import Swal from "sweetalert2";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

export const Rate = () => {
    const { library, account, active, chainId } = useWeb3React();
    const [firstRate, setFirstRate] = useState();
    const [secondRate, setSecondRate] = useState();

    const ChangeRate = async () => {
        if (active) {
            if (firstRate > 0 || secondRate > 0) {
                await PresaleRate(
                    library.provider,
                    new Web3().utils.toWei(firstRate.toString(), "ether"),
                    new Web3().utils.toWei(secondRate.toString(), "ether"),
                )
                    .send({
                        from: account,
                    })
                    .then((res) => {
                        console.log(res);
                        Swal.fire("Transaction Successful", "", "success");
                    });
            } else {
                Swal.fire("Please input value is grater then zero")
            }

        } else {
            Swal.fire("Please connct to the wallet")
        }
        console.log(firstRate, secondRate, "this is the new presale rate");
    };
    return (
        <>
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className='text-xl font-bold py-2'>Change Presale Rate</h1>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-xl" for="username">
                            PresaleRate 1
                        </label>
                        <input
                            onChange={(e) => {
                                setFirstRate(e.target.value)
                            }}
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="presalerate1" type="number2" placeholder="Presalerate1" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2 text-xl" for="password">
                            PresaleRate 2
                        </label>
                        <input
                            onChange={(e) => {
                                setSecondRate(e.target.value);
                            }}
                            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="presalerate2" type="nuber" placeholder="Presalerate2" />

                    </div>
                    <div class="flex items-center justify-between">
                        <button onClick={ChangeRate}
                            class="bg-[#FFD51E] hover:bg-[#FFD51E] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}
