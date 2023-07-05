import {useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import data from './data.js';
import './App.css';
import {Navbar} from './Navbar.js';
import SingleProduct from './SingleProduct.js';
function App() {

  const [data,setData]=useState([]);
  const [toggle,setToggle] = useState(true);

  useEffect(()=>{
    axios.get("http://localhost:3001/trains")
    .then((response)=>{
      setData(response.data);
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);
  

  const view=(id)=>{
    var id=window.localStorage.setItem("data",id);
    setToggle(!toggle);
    console.log(dt);
  }
  var dt=window.localStorage.getItem("data");

  return (
    <div className="App">
   {toggle?<div className="container">
   {
    data.map((datas,i)=>{
    return <div className="colored">
    <div style={{marginLeft:"130px"}}>
    <p>NAME:{datas.trainName}</p>
    <p>NO:{datas.trainNumber}</p>
    </div>
    <div className='dep' style={{marginLeft:"40px"}}>
      <p>DEPATURETIME</p>
         <p>HOUR:{datas.departureTime.Hours}</p>
         <p>MIN:{datas.departureTime.Minutes}</p>
         <p>SEC:{datas.departureTime.Seconds}</p>
         </div>
         <div className="seats" style={{marginLeft:"70px"}}>
         <p>SEATSAVAILABLE</p>
         <p>SLEEPER:{datas.seatsAvailable.sleeper}</p>
         <p>AC:{datas.seatsAvailable.AC}</p>
         </div>
         <div className="price" style={{marginLeft:"100px"}}>
         <p>PRICE</p>
         <p>SLEEPER:{datas.price.sleeper}</p>
         <p>AC:{datas.price.AC}</p>
         </div>
         <div className="delay" style={{marginLeft:"130px"}}>
         <p>DELAY</p>
         <p>{datas.delayedBy}</p>
         </div>
         <button onClick={()=>view(i)}>VIEW</button>
    </div>
    })
   }
   </div>:
   <div>
   {
     data.map((d)=>{
      if(dt==data.indexOf(d))
      {
        return(
          <div className="low-style">
          <div style={{marginLeft:"130px"}}>
          <p>NAME:{d.trainName}</p>
          <p>NO:{d.trainNumber}</p>
          </div>
          <div className='dep' style={{marginLeft:"40px"}}>
      <p>DEPATURETIME</p>
         <p>HOUR:{d.departureTime.Hours}</p>
         <p>MIN:{d.departureTime.Minutes}</p>
         <p>SEC:{d.departureTime.Seconds}</p>
         </div>
         <div className="seats" style={{marginLeft:"70px"}}>
         <p>SEATSAVAILABLE</p>
         <p>SLEEPER:{d.seatsAvailable.sleeper}</p>
         <p>AC:{d.seatsAvailable.AC}</p>
         </div>
         <div className="price" style={{marginLeft:"100px"}}>
         <p>PRICE</p>
         <p>SLEEPER:{d.price.sleeper}</p>
         <p>AC:{d.price.AC}</p>
         </div>
         <div className="delay" style={{marginLeft:"130px"}}>
         <p>DELAY</p>
         <p>{d.delayedBy}</p>
         </div>
         <button onClick={()=>setToggle(!toggle)}>back</button>
          </div>
        )
      }
     })
   }
   </div>
  }
    </div>
  );

  }
export default App;
