import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
const SingleProduct = () => {
const [data,setData] = useEffect([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/view")
    .then((response)=>{
      setData(response.data);
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);

  return (
    <div>
      <p>SINGLE</p>
    </div>
  )
}

export default SingleProduct
