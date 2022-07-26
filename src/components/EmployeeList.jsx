import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Cards } from "./styled";




const  EmployeeList = () => {


const [data,setData]=useState()

useEffect(()=>{
  const data = JSON.parse(localStorage.getItem("user"))

  
},[])
  return (
    <Cards className="list_container">
{/* 
      {data.map(e=><div className="employee_card" key={e.id}>
        <img className="employee_image" src={e.image} width="90%" height="75%"/>
        <span className="employee_name">{e.employee_name}</span><br/>
        <span className="employee_title">{e.title}</span>
      </div>)} */}
    </Cards>
  );
};

export default EmployeeList;