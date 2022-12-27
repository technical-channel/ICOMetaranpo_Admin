import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { a } from "react-router-dom";
import {
  IoCloseCircleSharp,
  IoWallet,
  IoExitOutline,
  IoLogIn,
} from "react-icons/io5";
// import { spliceString } from "../../Helpers/utils";
// import { connect } from "react-redux";
// import useAuth from "../../Hooks/useAuth";
import useAuth from "../Hooks/useAuth";
import { useWeb3React } from "@web3-react/core";

function Header(props) {
  const [model, setModel] = useState(false);
  const [isConnetModalOpen, setisConnetModalOpen] = useState(false);
  const [isBurger, setisBurger] = useState(false);

  const { login, logout } = useAuth();
  const { active, account } = useWeb3React();

  const handleModel = () => {
    console.log("in this model");
    setModel(!model);
  };

  function handleBurger() {
    setisBurger(!isBurger);
  }

  function handleCloseConnectModal() {
    setisConnetModalOpen(false);
  }
  // For Open Connect Modal
  function handleOpenConnectModal() {
    setisConnetModalOpen(true);
  }

  return (
    <>
      <div className="fixed top-0 w-full px-5 border-b-2 border-[#FFD51E]  top-0 z-[1000] bg-black">
        <div className="flex justify-between h-[105px] items-center">
          {/* Logo of header */}
          <div>
            <div className="cursor-pointer max-w-[150px]">
              <img
                src={process.env.PUBLIC_URL + "assets/images/logo.png"}
                width="75%"
              ></img>
            </div>
            <div></div>
          </div>
          {/* Navigation  as  */}
          <div className=" md:flex gap-4  hidden">
            {NavasData.map((item, key) => (
              <a href={item.link}>
                <div className="hover:text-[#f4e9b0] cursor-pointer" key={key}>
                  {item.name}
                </div>
              </a>
            ))}
          </div>

          {/*  Social as  */}
          <div className="flex gap-3">
            <div className=" lg:flex gap-4 cursor-pointer hidden"></div>

            {/* //Connect Wallet and Address  */}
            {/* {active && (
              <div className="hidden md:block group">
                <div className=" hidden md:flex gap-3 px-[16px] py-[8px] bg-gradient-to-r from-[#f4e9b0] to-[#cca143] rounded-md text-black cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20">
                  <span>
                    <IoWallet size={20} />
                  </span>{" "}
                  {console.log(props.address)}
                  <span>{spliceString(account).toUpperCase()}</span>
                </div>
                <ul class="absolute hidden text-gray-700 pt-1  group-hover:block shadow-xl bg-[#fff] shadow-[#060b27]/20 rounded-md hover: ">
                  <li
                    class=" flex text-black gap-3 px-[16px] py-[8px] cursor-pointer hover:bg-[#f7f9fc] rounded-md"
                    onClick={handleWalletDisconnect}
                  >
                    <span>
                      <IoExitOutline size={20} />
                    </span>
                    <span>Disconnect Wallet</span>
                  </li>
                </ul>
              </div>
            )} */}
            <div
              onClick={!active ? login : logout}
              className="hidden font-bold md:block px-[16px] py-[8px] bg-[#FFD51E] rounded-md text-black cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20"
            >
              {!active ? "Connect Wallet" : "Disconnect Wallet"}
            </div>
          </div>
          <div className="block md:hidden" onClick={handleBurger}>
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </div>
      {isBurger && (
        <div className="fixed z-[10000] bg-black py-[10px] w-full top-[82px]">
          <div className="flex flex-col items-center w-full  drop-shadow-xl">
            <a
              href="/"
              onClick={() => setisBurger(false)}
              className="hover:bg-black w-full border-b-2 rounded-lg cursor-pointer transition duration-250 ease-out hover:ease-in"
            >
              {/* <div className="px-[16px] py-[16px] text-white">HOME</div> */}
            </a>
            <a
              href="#tokenomics"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 ease-out hover:ease-in"
            >
              <div className="px-[16px] py-[16px] text-white">TOKENOMICS</div>
            </a>
            <a
              href="#roadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white">ROADMAP</div>
            </a>

            <div className="hover:bg-[#f0f7ff] w-full border-b-2 rounded-lg cursor-pointer transition duration-250">
              {!active && (
                <div
                  onClick={() => {
                    setisBurger(false);
                    handleOpenConnectModal();
                  }}
                  className=" font-bold px-[16px] py-[8px] bg-gradient-to-r bg-[#FFD51E]  rounded-md text-black cursor-pointer ease-in duration-300  "
                >
                  Connect Wallet
                </div>
              )}
            </div>
            <div className="hover:bg-[#f0f7ff] w-full border-b-2 rounded-lg cursor-pointer transition duration-250 ease-out hover:ease-in">
              {" "}
              {active && (
                <div className="group ">
                  <div className="flex gap-3 px-[16px] py-[8px] bg-[#FFD51E] rounded-md text-black justify-center cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20">
                    <span>
                      <IoWallet size={20} />
                    </span>{" "}
                    {/* <span>{spliceString(account).toUpperCase()}</span> */}
                  </div>
                  <ul class="absolute hidden font-bold text-gray-700 pt-1  group-hover:block shadow-xl bg-[#FFD51E]  shadow-[#060b27]/20 rounded-md hover: ">
                    <li
                      class=" flex text-black gap-3 px-[16px] py-[8px] cursor-pointer  rounded-md"
                      // onClick={handleWalletDisconnect}
                    >
                      <span>
                        <IoExitOutline size={20} />
                      </span>
                      <span>Disconnect Wallet</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Wallect Connect option */}
      {isConnetModalOpen && (
        <div className="block fixed overflow-hidden top-0 z-[1000] h-full w-full">
          <div className="flex justify-center flex-col h-full items-center bg-[#00000052]    ">
            <div className=" rounded-lg  max-h-[500px] max-w-[500px] w-full  ">
              <div
                className="mb-[20px] cursor-pointer"
                onClick={handleCloseConnectModal}
              >
                <IoCloseCircleSharp
                  size={40}
                  color={"#f4e9b0"}
                  className="ml-auto hover:opacity-90"
                />
              </div>
              <div className="border-2 border-[#cca143] rounded-lg ">
                {" "}
                <div className="rounded-tl-lg rounded-tr-lg  py-[25px] bg-gradient-to-r from-[#f4e9b0] to-[#cca143]">
                  <h3 className=" text-black text-2xl m-0">Connect Wallet</h3>
                </div>
                <div className="">
                  <div className=" flex flex-col gap-5 font-semibold text-xl  bg-[#000] p-[16px] pb-[32px]  rounded-lg">
                    <div
                      onClick={async () => {
                        login();

                        handleCloseConnectModal();
                      }}
                      className="  flex p-3 items-center border border-[#e8ecf4] cursor-pointer hover:shadow-xl hover:shadow-[#060b27]/10 rounded ease-out duration-300"
                    >
                      <span>
                        <img
                          src={process.env.PUBLIC_URL + "/assets/metamask.svg"}
                          alt="metamask"
                          width="32px"
                        ></img>
                      </span>
                      <span className="ml-3">Metamask</span>
                    </div>
                    <div
                      onClick={() => {
                        login();
                        handleCloseConnectModal();
                      }}
                      className="flex p-3 items-center border border-[#FFD51E] cursor-pointer hover:shadow-xl hover:shadow-[#060b27]/10 rounded ease-out duration-300"
                    >
                      <span>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/walletconnect.png"
                          }
                          alt="wallet_Connect"
                          width="32px"
                        ></img>
                      </span>
                      <span className="ml-3">Wallet Connect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const NavasData = [
  // {
  //   id:"home",
  //   link: "/",
  //   name: "Home",
  // },
  {
    link: "#tokenomics",
    name: "Tokenomics",
  },
  {
    link: "#roadmap",
    name: "Roadmap",
  },
  // {
  //   link: "/",
  //   name: "Team",
  // },
];
const SocialasData = [
  {
    link: "/",
    name: "Discord",
    path: process.env.PUBLIC_URL + "assets/images/discord.svg",
  },
  {
    link: "/",
    name: "Twitter",
    path: process.env.PUBLIC_URL + "assets/images/twitter.svg",
  },
  {
    link: "/",
    name: "Telegram",
    path: process.env.PUBLIC_URL + "assets/images/telegram.svg",
  },
  {
    link: "/",
    name: "Facebook",
    path: process.env.PUBLIC_URL + "assets/images/facebook.svg",
  },
];

export default Header;
