import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllVideo } from "./actions/video";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./pages/Navbar/Navbar";
import { AllRoutes } from "./AllRoutes";


function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllVideo())
  },[dispatch])

  return(
    <Router>
      <NavBar />
      <AllRoutes/>
    </Router>
  )
}

export default App;