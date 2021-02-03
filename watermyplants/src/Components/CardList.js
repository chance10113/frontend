import { useEffect, useState } from "react"
import Card from "./Card"
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

    //Unfinished Use effect Hook.

    return(
        <div>
            {plants.map((elem) => {
                return <Card key = {elem.id} card = {elem}/>
            })}
        </div>
    )

};