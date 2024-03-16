import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ReactGA from 'react-ga';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills/Skills";
import Courses from "./pages/Courses"
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID)
}


function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <br />
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" exact element={<Home/>}/>
                    <Route path="/projects" exact element={<Projects/>}/>
                    <Route path="/courses" exact element={<Courses/>}/>
                    <Route path="/skills" exact element={<Skills/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}
export default App;
