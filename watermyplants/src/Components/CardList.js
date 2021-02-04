import { useEffect, useState } from "react";
import Card from "./Card.js";
import axiosWithAuth from "../Util/axiosWithAuth";
import CreatePlant from "./CreatePlant";
import { useHistory } from "react-router-dom";
export default function Cardlist(props) {
  const [plants, setPlants] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get("https://water-my-plants-four.herokuapp.com/plants")
      .then((res) => {
        setPlants(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.log("Home, fetching data error", err.response);
      });
  }, []);

  //Unfinished Use effect Hook.

  return (
    <div>
      <div>
        <button onClick={push("/createplant")}>Create Plant</button>
      </div>
      <CreatePlant plants={plants} setPlants={setPlants} />
      <div>
        {plants.map((elem) => {
          return <Card key={elem.id} plant={elem} setPlants={setPlants} />;
        })}
      </div>
    </div>
  );
}
