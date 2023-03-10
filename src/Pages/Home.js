import React from "react";

import Wallet from "../Component/Wallet";
import { Rate } from "./Rate";
import Retrivetoken from "./Retrivetoken";

const Home = () => {
  return (
    <div>
      <h1 className="flex justify-center text-2xl mt-[10rem] font-bold">
        Admin Features
      </h1>
      <div className="max-w-[900px] mx-auto mt-[2rem] flex justify-center gap-5">
        <Wallet />
        <Rate />
        <Retrivetoken />
      </div>
    </div>
  );
};

export default Home;
