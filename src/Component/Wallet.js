import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";

import {
  
  GetICOStatus,
  Getowneraddres,
  GetTokenomics,
} from "../Utils/contractHelper";
import Web3 from "web3";
import Swal from "sweetalert2";
import { useWeb3React } from "@web3-react/core";
import CSVUpload from "../Pages/AddBulk";

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
  const [Owneraddtess, setOwneraddtess] = useState();

  useEffect(async () => {
    if (active) {
      setOwneraddtess(await Getowneraddres(library.provider));
      console.log(Owneraddtess, "this is the owner address");
      console.log(account, "this is the wallet address");
    }
  }, [active, account]);
  // Wallet transition
  
  return (
    <>
      {/* {Address.map((item, key) => (
   
                
              */}
      <div className="flex-col">
      <CSVUpload />
      </div>
    </>
  );
}
export default Wallet;
