import { Provider } from 'react-redux';
import { store } from '../src/Redux/store';
import './App.css'
import Home from "./components/Home"
import  Navbar  from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import EmployeeList from "./components/EmployeeList"
import React from "react";


function App() {


  return (
    <div className="App">
      
      <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employees" element={<EmployeeList/>}/>
      </Routes>
      </Provider>
      
    </div>
  )
}

export default App;
