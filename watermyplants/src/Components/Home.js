import React, { useEffect, useState } from "react";
import Cardlist from "./CardList";
import styled from "styled-components";

const Home = () => { 
  return (
    <StyledHome>
    <div>
      <h1>Water My Plants</h1>
      <Cardlist />
    </div>
    </StyledHome>
  );
};
export default Home;

const StyledHome = styled.div`

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