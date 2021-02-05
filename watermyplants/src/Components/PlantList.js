import { useHistory } from "react-router-dom";
import PlantCard from './PlantCard';

function Cardlist({ plants, setPlants}) {

  const { push } = useHistory();
  return (
    <div>
      <div>
        <button onClick={() => push("/createplant")}>Create Plant</button>
      </div>
      <div>
        <h1>Water My Plants</h1>
        {plants.map((elem) => {
          return <PlantCard key={elem.id} plant={elem} setPlants={setPlants} />;
        })}
      </div>
    </div>
  );
}

export default Cardlist
