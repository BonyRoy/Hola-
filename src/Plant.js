import React from "react";
import './Login.css';
import List from "./List";

const Plant =()=>{
  return(
    <>
    <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">
      <div className="mx-auto">
        <div className="row">
      <div className=" pt-2 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h1 className="mx-auto">What kind of plant you would like to grow ?</h1> 
    <div className="container contact_div">
       <div className="row">
         <div className="mx-auto">
           
         <List/>

         </div>
       </div>
    </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      </section>
    </>
      );
};

export default Plant;
