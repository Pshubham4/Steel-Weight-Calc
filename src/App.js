import React from 'react';
import { Navbar , Container, NavItem } from 'react-bootstrap'
import { Routes, Route, BrowserRouter , Link } from 'react-router-dom';
import './App.css';
import Calculator from './Component/Calculator';
import Home from './Component/Home';
import {Myprovider} from "./Context/context"

function App() {

  return (
    <BrowserRouter>
    <Myprovider>
      
    <header>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">
    <i className="fas fa-ruler-combined">Steel Weight Calculator</i>
    </Navbar.Brand>
  </Container>
  </Navbar>
  </header>

  <Navbar bg="dark" variant="dark">
  <NavItem>
    <Link  to='/steel-weight-calc' className='link'> Home </Link>
    <Link  to='/Calc' className='link'> Calculator </Link>
    </NavItem>
    </Navbar>

      <div className='container'>
        <Routes>

        <Route path="/steel-weight-calc" element={<Home/>}/>
        <Route path="/Calc" element={<Calculator/>}/>

        </Routes>
      </div>
     
    </Myprovider>
    </BrowserRouter>
  );
}

export default App;
