import React from "react";
import App from "./App";
import { useState  } from "react";
import axiosInstance from "../../public/axiosConfig";
import axios from "axios";
import { DOMAttributes } from "react";


const Addactivity = () => {
  // const changehandler=()=>{
  //   console.log({activityname, description, duration, date });
  //     saveToDb()
    
    
  //   }
  //   const saveToDb = async () => {
    
  //     const body = { activityname, description, duration, date };
  //     try {
  //       const res = await axiosInstance.post(
  //         "http://127.0.0.1:3000/api/users/createActivity",
  //         body
  //       );
  //       alert(res.data)
  //     } catch (e) {
  //       alert(e)
  
  //     }
  
    
  // };



  const [activityname, setactivityname] = useState('')
  const [description, setdescription] = useState('')
  const [duration, setduration] = useState('')
  const [date, setdate] = useState('')


  const changehandler=()=>{
    console.log({activityname, description, duration, date });
      saveToDb()
    
    
    }
    const saveToDb = async () => {
    
      const body = { activityname, description, duration, date };
      try {
        const res = await axiosInstance.post(
          "http://127.0.0.1:3000/api/users/createActivity",
          body
        );
        alert(res.data)
      } catch (e) {
        alert(e)
  
      }
  
    
  };
  return (
    <>
    <App/>
    <div
      style={{ marginTop: "4rem"}}
      className="container outline-border d-flex flex-column justify-content-center  p-3 w-50"
    >
      <div className="row">
        <div className="col-6">
        <h2>Enter Activity Details</h2>
      <hr />
      <form>
        <div className="form-group py-3">
          <label htmlFor="activityname">activityName</label>
          <input
            type="text"
            className="form-control"
            value={activityname}
            onChange={(e) => setactivityname(e.target.value)}
            id="activityname"
            placeholder="Enter ActivityName"
          />
          
        </div>
        <div className="form-group py-3">
          <label htmlFor="description">Description</label>
          <select className="form-control" id="description" value={description}
            onChange={(e) => setdescription(e.target.value)}>
            
            <option value="">Select description</option>
            <option value="Cycle">Cycle</option>
            <option value="Walk">Walk</option>
            <option value="Hike">Hike</option>
            <option value="Swim">Swim</option>
            <option value="Run">Run</option>
            <option value="Ride">Ride</option>
          </select>
        </div>
        <div className="form-group py-3">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            className="form-control"
            id="duration"
            placeholder="Enter duration"
            value={duration}
            onChange={(e) => setduration(e.target.value)}
            
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="datetime">Date & Time</label>
          <input type="datetime-local" className="form-control" id="datetime" 
          value={date}
          onChange={(e) => setdate(e.target.value)}
          />
          
        </div>
        <button onClick={changehandler} type="submit" className="btn"style={{backgroundColor:"#5f1010",color:"#fff"}}>
          Submit
        </button>
      </form>
        </div>
        
        
        <div style={{backgroundImage: "url(./images/giff.gif)", backgroundRepeat:"no-repeat", }} className="col-6" >
        </div>
      </div>
     
    </div>
    </>
  );
};

export default Addactivity;

