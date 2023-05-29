import React from "react";
import App from "./App";
import Card from './Card'

const Exercise = () => {
  
  return (

    <>
    
   <App/>
   
  
<div  style={ { backgroundImage: "url(./images/login.jpg)"}}>

  
  
    <div style={{ marginTop:"4rem" }} className="container">
      <div className="row">
        {/* <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-bicycle fa-3x mb-3" style={{color:"#5f1010"}}></i>
              <h5 className="card-title">Cycling</h5>
              <p className="card-text">Duration: 1 hour</p>
              <button className="btn btn-dark"><i class="fa-solid fa-pen-to-square"></i></button>
              <button className="btn " style={{backgroundColor:"#5f1010",color:"#fff"}}><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-walking fa-3x mb-3" style={{color:"#5f1010"}}></i>
              <h5 className="card-title">Walking</h5>
              <p className="card-text">Duration: 45 minutes</p>
              <button className="btn btn-dark"><i class="fa-solid fa-pen-to-square"></i></button>
              <button className="btn" style={{backgroundColor:"#5f1010",color:"#fff"}}><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-hiking fa-3x mb-3" style={{color:"#5f1010"}}></i>
              <h5 className="card-title">Hiking</h5>
              <p className="card-text">Duration: 30 minutes</p>
              <button className="btn btn-dark"><i class="fa-solid fa-pen-to-square"></i></button>
              <button className="btn" style={{backgroundColor:"#5f1010",color:"#fff"}}><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div> */}

        {/* <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-swimmer fa-3x mb-3" style={{color:"#5f1010"}}></i>
              <h5 className="card-title">Swimming</h5>
              <p className="card-text">Duration: 1 hour</p>
              <button className="btn btn-dark"><i class="fa-solid fa-pen-to-square"></i></button>
              <button className="btn" style={{backgroundColor:"#5f1010",color:"#fff"}}><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6" style={{backgroundColor:"#5F1010"}}>
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-running fa-3x mb-3" style={{color:"#5f1010"}}></i>
              <h5 className="card-title">Running</h5>
              <p className="card-text">Duration: 45 minutes</p>
              <button className="btn btn-dark"><i class="fa-solid fa-pen-to-square"></i></button>
              <button className="btn "style={{backgroundColor:"#5f1010",color:"#fff"}}><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div> */}
        <Card />
        {/* <div className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <i className="fa fa-motorcycle fa-3x mb-3"style={{color:"#5f1010"}}></i>
              <h5 className="card-title">dfskljdfkljdf Riding</h5>
              <p className="card-text">Duration: 30 minutes</p>
              <button className="btn btn-dark"><i class="fa-solid fa-pen-to-square"></i></button>
              <button className="btn" style={{backgroundColor:"#5f1010",color:"#fff"}}><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div> */}
      </div>
         
    </div>

</div>
 
    </>
  );
};

export default Exercise;
  