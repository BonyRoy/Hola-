import React, {useState, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Navbar from "./Navbar";
import Plant from "./Plant";
import Support from "./Support";
import User from "./User";
import Admin from "./Admin";
import Login from "./Login";
import SignUp from "./SignUp";
import { Routes ,Route } from 'react-router-dom';



const App =()=>{

    const [data, setData] = useState([{}])

useEffect(()=>{
    fetch("/members").then(
        res => res.json()
    ).then(
        data =>{setData(data)
        console.log(data)
    }
    )
},[])

    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Navbar" element={<Navbar/>}/>
            <Route path="/Plant" element={<Plant/>}/>
            <Route path="/Support" element={<Support/>}/>
            <Route path="/User" element={<User/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        
        <div>
            {(typeof data.members === 'undefined')?(
                <p>Loading...</p>
                ):(
                    data.members.map((member, i) => (
                        <p key={i}>{member}</p>
                    ))
                )}
        </div>
        </>
        );
};

export default App;

