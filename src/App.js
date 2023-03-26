import {useState, useEffect} from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from './components/Footer'
import About from "./components/About"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/Home';
import Pomodoro from "./components/Pomodoro"
import NavbarComp from "./components/NavbarComp"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Settings from "./components/Settings"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarComp />
		  <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/tasks' element={<Tasks/>} />
        {/* <Route path='/projects' element={<Projects/>} /> */}
        <Route path='/pomo' element={<Pomodoro/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
 }

export default App;
