import { useHistory } from "react-router-dom";
import PlantCard from './PlantCard';
import styled from "styled-components";

function Cardlist({ plants, setPlants}) {

  const { push } = useHistory();
  return (
    <StyledPlantList>
      <div>
        <button className='create-btn' onClick={() => push("/createplant")}>Create Plant</button>
      </div>
      <div>
        <h1>Water My Plants</h1>
        {plants.map((elem) => {
          return <PlantCard key={elem.id} plant={elem} setPlants={setPlants} />;
        })}
      </div>
    </StyledPlantList>
  );
}

export default Cardlist

const StyledPlantList = styled.div`
@media(max-width: 1920px){
background-color: rgb(228, 253, 225);
h1{
 color: darkcyan;
}
& .create-btn{
     padding: 1% 2.5% ;
     text-align:center;
     font-family: arial;
     color: white;
     background-color: 	rgb(136, 221, 136);
     font-size: 1.5rem;
     opacity: 0.9;
}
}
@media(max-width: 1000px){
   background-color: rgb(228, 253, 225);
  h1{
    color: darkcyan;
  }
   & .create-btn{
        padding: 1.5% 3.5% ;
        text-align:center;
        font-family: arial;
        color: white;
        background-color: 	rgb(136, 221, 136);
        font-size: 1.5rem;
        opacity: 0.9;
   }
  }
`