import React, { useEffect, useState } from "react";
import axiosWithAuth from "../Util/axiosWithAuth";
import Cardlist from "./CardList";

const Home = () => { 
  return (
    <div>
      <h2>Water My Plants</h2>
      <Cardlist />
    </div>
  );
};
export default Home;
