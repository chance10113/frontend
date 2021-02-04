import { useEffect, useState } from "react"
import Card from "./Card.js"
import axiosWithAuth from '../Util/axiosWithAuth';
import CreatePlant from './CreatePlant';
import { useHistory } from "react-router-dom";
export default function Cardlist(props) {

    const [plants, setPlants] = useState([])
    const {push} = useHistory()

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
    
    //Unfinished Use effect Hook.

    return(
        <div>
          <div>
          <button onClick={(()=>{
            <CreatePlant plants={plants} setPlants={setPlants}/>
            push('/createplant')
          })}>Create Plant</button>
          </div>
            
            {plants.map((elem,idx) => {
                return <Card key = {idx} id={elem.id} name={elem.name} species={elem.species} image={elem.image} h2o={elem.h2o} setPlants={setPlants} plants={plants}/>
            })}
        </div>
    )

};