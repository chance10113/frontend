import React, { useEffect, useState } from "react";
import axiosWithAuth from "../Util/axiosWithAuth";

const Home = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://water-my-plants-four.herokuapp.com/plants")
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => {
        console.log("Home, fetching data error", err.response);
      });
  }, []);
  return (
    <div>
      <h2>Water My Plants</h2>

      {plants.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item.nickname}</h2>
            <p>Species: {item.species}</p>
            <span>H20 Frequency: {item.h2o_frequency}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
