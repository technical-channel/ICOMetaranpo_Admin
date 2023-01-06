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
  return (
    <>
      {/* {Address.map((item, key) => (
   
                
              */}
      <div className="flex-col form-group bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <CSVUpload />
      </div>
    </>
  );
}
export default Wallet;
