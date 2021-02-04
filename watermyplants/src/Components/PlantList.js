import Card from "./Plant.js";
import { useHistory } from "react-router-dom";

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
          return <Card key={elem.id} plant={elem} setPlants={props.setPlants} />;
        })}
      </div>
    </div>
  );
}

export default Cardlist
