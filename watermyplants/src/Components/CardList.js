import { useEffect, useState } from "react"
import Card from "./Card.js"
import axiosWithAuth from '../Util/axiosWithAuth';
export default function Cardlist(props) {

    const [plants, setPlants] = useState([])

    useEffect(() => {
        axiosWithAuth()
          .get("https://water-my-plants-four.herokuapp.com/plants")
          .then((res) => {
            setPlants(res.data);
            console.log(res.data)
          })
          .catch((err) => {
            console.log("Home, fetching data error", err.response);
          });
      }, []);

    return(
        <div>
            {plants.map((elem) => {
                return <Card key = {elem.id}  plant={elem}/>
            })}
        </div>
    )

};

//Done With card list