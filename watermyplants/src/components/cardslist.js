import { useEffect, useState } from "react"
import Card from "./cards.js"
import axios from "axios"
export default function Cardlist(props) {

    const [plants, setPlants] = useState([])

    useEffect( () => {
        axios.get()
        .then((res) => {
            setPlants(res.data)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [] )

    return(
        <div>
            {plants.map((elem) => {
                return <Card key = {elem.id}  name={props.name} species={props.species}/>
            })}
        </div>
    )

}