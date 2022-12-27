import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import {
  GetWalletAddress,
  GetICOStatus,
  Getowneraddres,
  GetTokenomics,
} from "../Utils/contractHelper";
import Web3 from "web3";
import Swal from "sweetalert2";
import { useWeb3React } from "@web3-react/core";

function Wallet() {
  const { library, account, active, chainId } = useWeb3React();
  const [Team, setTeam] = useState();
  const [Development, setDevelopment] = useState();
  const [crew, setCrew] = useState();
  const [Charitable, setCharitable] = useState();
  const [Media, setMedia] = useState();
  const [GameNFT, setGameNFT] = useState();
  const [Projects, setProjects] = useState();
  const [Code, setCode] = useState();
  const [ManualBurning, setManualBurning] = useState();
  const [Stake, setStake] = useState();
  const [ICOstatus, setICOstatus] = useState();
  const [Owneraddtess, setOwneraddtess] = useState();
  const [tokonomics, setTokonomics] = useState();

  useEffect(async () => {
    if (active) {
      setOwneraddtess(await Getowneraddres(library.provider));
      console.log(Owneraddtess, "this is the owner address");
      console.log(account, "this is the wallet address");
      console.log(tokonomics, "tokenomics  details");
      // setTokonomics(await GetTokenomics(library.provider));
      setTokonomics(await GetTokenomics(library.provider));
      setICOstatus(
        await GetICOStatus("https://data-seed-prebsc-1-s1.binance.org:8545/")
      );
    }
  }, [active, account]);
  // Wallet transition
  const Wallettransition = async () => {
    if (!active) {
      Swal.fire("Please connect to the wallet");
    } else if (Owneraddtess !== account) {
      Swal.fire("You are not owner");
    } else if (tokonomics > 0) {
      Swal.fire("Already transition completed");
    } else if (ICOstatus == false) {
      Swal.fire("Please wait for ICO to Over");
    } else {
      await GetWalletAddress(
        library.provider,
        Team,
        Development,
        crew,
        Charitable,
        Media,
        GameNFT,
        Projects,
        Code,
        ManualBurning,
        Stake
      )
        .send({
          from: account,
        })
        .then((res) => {
          console.log(res);
          Swal.fire("Transaction Successful", "", "success");
        });
    }
  };
  return (
    <>
      <div className="flex-col">
        <div
          className="w-[600px] mx-auto mt-5 p-3 rounded-lg"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-2xl font-bold">Wallet Address</h1>
          <Form layout="vertical">
            <div className="my-3 ">
              <Form.Item
                className="mt-3"
                label="Team"
                name="team"
                rules={[
                  {
                    required: true,
                    message: "Please fill Presale Rate !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setTeam(e.target.value)}
                  placeholder="team"
                />
              </Form.Item>

              <Form.Item
                className="mt-3"
                label="Development"
                name="development"
                rules={[
                  {
                    required: true,
                    message: "Please fill Wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setDevelopment(e.target.value)}
                  placeholder="development"
                />
              </Form.Item>

              <Form.Item
                className="mt-3"
                label="Crew"
                name="crew"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setCrew(e.target.value)}
                  placeholder="crew"
                />
              </Form.Item>

              <Form.Item
                className="mt-3"
                label="Charitable"
                name="charitable"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setCharitable(e.target.value)}
                  placeholder="charitable"
                />
              </Form.Item>
              <Form.Item
                className="mt-3"
                label="Media"
                name="media"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setMedia(e.target.value)}
                  placeholder="media"
                />
              </Form.Item>
              <Form.Item
                className="mt-3"
                label="GameNFT"
                name="gamenft"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setGameNFT(e.target.value)}
                  placeholder="gamenft"
                />
              </Form.Item>
              <Form.Item
                className="mt-3"
                label="Projects"
                name="project"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setProjects(e.target.value)}
                  placeholder="project"
                />
              </Form.Item>
              <Form.Item
                className="mt-3"
                label="Code"
                name="code"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="code"
                />
              </Form.Item>
              <Form.Item
                className="mt-3"
                label="ManualBurning"
                name="manualburning"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setManualBurning(e.target.value)}
                  placeholder="Burning"
                />
              </Form.Item>
              <Form.Item
                className="mt-3"
                label="Stake"
                name="stake"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setStake(e.target.value)}
                  placeholder="stake"
                />
              </Form.Item>
            </div>
            <div
              class=" max-w-[150px] mt-5 text-center hidden md:block px-[16px] py-[8px] bg-[#FFD51E] font-bold  rounded-md text-black cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20"
              onClick={Wallettransition}
            >
              Submit
            </div>
          </Form>
        </div>

        {/* <div
          className="w-[600px] mx-auto mt-5 p-3 rounded-lg mb-4"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-2xl font-bold">RetrieveStuckedERC20Token</h1>
          <Form layout="vertical">
            <div className="my-3 ">
              <Form.Item
                className="mt-3"
                label="Token Address"
                name="token"
                rules={[
                  {
                    required: true,
                    message: "Please fill Presale Rate !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setTeam(e.target.value)}
                  placeholder="team"
                />
              </Form.Item>

              <Form.Item
                className="mt-3"
                label="Amount"
                name="amount"
                rules={[
                  {
                    required: true,
                    message: "Please fill Wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setDevelopment(e.target.value)}
                  placeholder="development"
                />
              </Form.Item>

              <Form.Item
                className="mt-3"
                label="Wallet Address"
                name="wallet"
                rules={[
                  {
                    required: true,
                    message: "Please fill wallet address !",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="border border-red-500 py-2 hover:border border-[#d9d9d9] mt-5 rounded-lg"
                  style={{ width: "100%" }}
                  onChange={(e) => setCrew(e.target.value)}
                  placeholder="wallet"
                />
              </Form.Item>
            </div>
            <div
              class=" max-w-[150px] mt-5 text-center hidden md:block px-[16px] py-[8px] bg-gradient-to-r from-[#f4e9b0] to-[#cca143] rounded-md text-black cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20"
              onClick={Wallettransition}
            >
              Submit
            </div>
          </Form>
        </div> */}
      </div>
    </>
  );
}
export default Wallet;
