import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function Home() {
const [getData, setGetData] = useState([]);

const getapi = async()=>{
    await axios 
    .get("https://reqres.in/api/users?page=2")
    .then(function(res){
    //    setGetData(res.data.data)
       console.log(res.data.data)

    });
}
useEffect(()=>{
    getapi()

})

  return (

    <Hom>
        {getData.map((elem,i)=>{
return (
    <div> <p>{elem.first_name}</p></div>

)


        })}
        
    </Hom>
  )
}

const Hom = styled.div`
width: 100vw;
height: 100vh;
/* background-color: aqua; */

`