import Card from "./PlantCard.js";
import { useHistory } from "react-router-dom";
import PlantCard from './PlantCard';
function Cardlist(props) {
// Passing plants and setPlants through props
console.log(props.plants);
  const { push } = useHistory();
  return (
    <div>
      <div>
        <button onClick={() => push("/createplant")}>Create Plant</button>
      </div>
      <div>
        <h1>Water My Plants</h1>
        {props.plants.map((elem) => {
          return <PlantCard key={elem.id} plant={elem} setPlants={props.setPlants} />;
        })}
      </div>
    </div>
  );
}

export default Cardlist
