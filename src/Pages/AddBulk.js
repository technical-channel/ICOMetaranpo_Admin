import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { ICO_ABI } from "../Config/ABI/ICO_ABI";
import { ICOTokenContract } from "../Config/Contract/Contract";
import useAuth from "../Hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { GetFundtransfer, Getowneraddres } from "../Utils/contractHelper";
// GetUsdtStatus
import { GetUserToken } from "../Utils/contractHelper";

import Swal from "sweetalert2";

function CSVUpload(props) {
  const [ReadCsvData, setReadCsvData] = useState(null);
  const [isUploded, setUploded] = useState(false);
  const [Usdtstatus, setUsdtstatus] = useState(0);
  const [Owneraddres, setOwneraddress] = useState(null);
  const [AddressWalletlist, setAddressWalletlist] = useState([]);
  const [AddressPercentage, setAddressPercentage] = useState([]);
  const { library, active, account } = useWeb3React();

  useEffect(() => {
    GetUserToken().then((res) => {
      console.log(res);
      setUsdtstatus(parseFloat(res));
    });

    Getowneraddres().then((res) => {
      console.log(res);
      setOwneraddress(res);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 className="text-2xl text-center font-fond mb-[10px]">Transferfund</h3>

      <form
        class="form-inline  "
        onSubmit={async (e) => {
          e.preventDefault();
          if (active) {
            console.log(Owneraddres, account);
            if (Owneraddres === account) {
              if (parseInt(Usdtstatus)) {
                Papa.parse(document.getElementById("files").files[0], {
                  header: true,
                  complete: async (results) => {
                    console.log(results);
                    setReadCsvData(results.data);

                    if (results.data !== null) {
                      let Data = [];
                      let SecondData = [];
                      results.data.map((data) => {
                        console.log(data);
                        if (data.Address != "") {
                          Data.push(data.Address);
                          SecondData.push(data.Percentage);
                        }
                        setAddressWalletlist(Data);
                        setAddressPercentage(SecondData);
                      });
                      await GetFundtransfer(library.provider, Data, SecondData)
                        .send({
                          from: account,
                        })
                        .then((res) => {
                          console.log(res);
                          Swal.fire("Transaction Successful", "", "success");
                        });
                    } else {
                      Swal.fire("Please Select Correct File");
                    }
                  },
                });
              } else {
                Swal.fire("You dot have sufficient fund ");
              }
            } else {
              Swal.fire("You are not a owner");
            }
          } else {
            Swal.fire("Please connect  to the wallet");
          }
        }}
      >
        <div class="form-group">
          <input
            type="file"
            id="files"
            class="form-control"
            accept=".csv"
            required
          />
        </div>
        <div class="form-group bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <button
            style={{
              textAlign: "center",
              justifyContent: "center",
              padding: " 0.375rem 0.75rem",
              fontSize: "0.8rem",
              lineHeight: "1.5",
              borderRadius: "0.25rem",
              color: "#000",
              outline: "none",
              border: "none",
              margin: "20px 0",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.645,0.045,0.355,1)",
              background: "#FFD51E",
              borderColor: "#faa059ad",
              font: "bold",
            }}
            type="submit"
            // id="submit-file"
            class="btn btn-primary"
            onClick={() => {
              if (ReadCsvData === null) {
                // Swal.fire("Please Uploaded file");
              } else {
                setUploded(true);
                Swal.fire("File Uploaded Successfully");
              }
            }}
          >
            Submit File
          </button>
        </div>
      </form>
    </div>
  );
}

export default CSVUpload;
