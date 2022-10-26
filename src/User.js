import React from "react";

const User =()=>{
  return(
    <>
    <div className="align-item-centre">
      <h1>Progress Bar</h1>

<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={ {width: "10%",}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Water Level</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={ {width: "10%",}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Temperature</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={ {width: "10%",}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Humidity</div>
</div>
    
    <br></br><br></br>
    <div className="mx-auto">
    <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-1 mx-auto">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-outline-primary">Automate</button>

  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Manual
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><button type="button" class="btn btn-outline-info">💧 Water Level</button></li>
      <li><button type="button" class="btn btn-outline-warning">🌡️ Temperature</button></li>
      <li><button type="button" class="btn btn-outline-danger">♨️ Humidity</button></li>
    </ul>
  </div>
</div>
</div>
</div>
</div>
    </div>
    
    
    
    </div>
    </>
      );
};

export default User;
