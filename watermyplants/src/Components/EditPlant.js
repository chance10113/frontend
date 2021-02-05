import React, { useEffect , useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../Util/axiosWithAuth';
import "./style.css";
import styled from "styled-components";


// Why all divs?
const StyledContainer = styled.div`
  color: black;
  height: 43rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto auto auto auto;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledH1 = styled.div`
  font-weight: bold;
  color: black;
`;

const StyledForm = styled.div`
  height: auto;
  background-color: #e4fde1;
`;

const StyledInputs = styled.div`
  color: black;
  height: auto;
  width: 120%;
  background-color: #6ba292;
  display: flex;
  border: 4.5px solid #223f36;
  box-shadow: 0.8rem 0.8rem gray;
  align-items: center;
  justify-content: space-evenly;
  text-align: match-parent;
  padding: 5% 5% 5% 5%;
  margin: 0% 0% 0% 0%;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledLabel = styled.div`
  color: black;
  margin: 0% auto 0% auto;
`;


const initialItem = {
    id:'',
    user_id:'',
    nickname:'',
    species:'',
    h2o_frequency:'',
    image_url:'',



}

const EditPlant = ({ setPlants }) => {
    let {id} = useParams();
    const newID = id.replace(/:/g, ''); 
   

    
    const {push} = useHistory();
    const [item,setItem] = useState(initialItem)
    console.log(item)
   
   
    useEffect(()=>{
        axiosWithAuth()
        .get(`https://water-my-plants-four.herokuapp.com/plants/${newID}`)
        .then(res=>{
            console.log(res)
            setItem(res.data)
        })
        .catch(err=>{
            console.log('Grab item error', err.response)
        })
    },[newID])
 
  
  
    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://water-my-plants-four.herokuapp.com/plants/${newID}`, item)
        .then(res=>{
            return axiosWithAuth().get("https://water-my-plants-four.herokuapp.com/plants")
        })
        .then(res => {
            setPlants(res.data)
            push('/plantlist')
        })
        .catch(err=>{
            console.log('edit error', err.response)
        })

    }
    return (
        <StyledContainer>
          <StyledForm>
            <form onSubmit={handleSubmit}>
              <StyledInputs>
                <StyledH1> Edit Your Plant Here </StyledH1>
                <StyledLabel>
                  <label>
                    Nickname:
                    <br></br>
                    <input
                      type="text"
                      name="nickname"
                      value={item.nickname}
                      onChange={handleChange}
                    />
                  </label>
                </StyledLabel>
                <StyledLabel>
                  <label>
                    Species:
                    <br></br>
                    <input
                      type="text"
                      name="species"
                      value={item.species}
                      onChange={handleChange}
                    />
                  </label>
                </StyledLabel>
                <StyledLabel>
                  <label>
                    H2O
                    <br></br>
                    <input
                      type="text"
                      name="h2o_frequency"
                      value={item.h2o_frequency}
                      onChange={handleChange}
                    />
                  </label>
                </StyledLabel>
                <StyledLabel>
                  <label>
                    Image URL
                    <br></br>
                    <input
                      type="text"
                      name="image_url"
                      value={item.image_url}
                      onChange={handleChange}
                    />
                  </label>
                </StyledLabel>
                <button>Edit Plant</button>
              </StyledInputs>
            </form>
          </StyledForm>
        </StyledContainer>
      );
}
export default EditPlant;

