import { useState } from "react";
import NotFound from "./components/NotFound";
import Addactivity from "./components/Addactivity";
import Exercise from "./components/Exercise";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup"; //usman
import Login from "./components/Login"; //usman
import App from "./components/App";

function Apps() {

  
  return (

    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<App />} />
          <Route path="/addactivity" element={<Addactivity />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default Apps;
