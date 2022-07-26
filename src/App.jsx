
import './App.css'
import Home from "./components/Home"
import  Navbar  from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import EmployeeList from "./components/EmployeeList"

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employees" element={<EmployeeList/>}/>
      </Routes>
    </div>
  )
}

export default App;
