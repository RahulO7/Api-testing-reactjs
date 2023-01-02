import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function Home() {
const [getData, setGetData] = useState([]);

const getapi = async()=>{
    await axios 
    .get("https://reqres.in/api/users?page=2")
    .then(function(res){
       setGetData(res.data.data)
       console.log(res.data.data)

    });
}
useEffect(()=>{
    getapi()

},[])

  return (

    <Hom>
        {getData.map((elem,i)=>{
return (
  <div className="card">
  <img src={elem.avatar} alt="Avatar" style={{width:'100%'}}/>
  <div className="container">
    <h4><b>{elem.first_name} {elem.last_name}</b></h4>
    <p>{elem.email}</p>
    <p>{elem.id}</p>
  </div>
</div>
)


        })}
        
    </Hom>
  )
}

const Hom = styled.div`
width: 100vw;
height: 100vh;
/* background-color: aqua; */
display: flex;
flex-wrap: wrap;
justify-content: center;


.card {
  /* Add shadows to create the "card" effect */
 min-width:260px;
  flex-basis:100px;
  height: 400px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 5px 6px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transform: scale(1.1);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

`