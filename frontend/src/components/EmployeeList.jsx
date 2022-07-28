import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Cards } from "./styled";


const  EmployeeList = () => {
 
  const [info, setInfo]=useState()



const getEmps = () => {
  axios.get("http://127.0.0.1:3456/a/emps")
  .then((res) => {
    setInfo(res.data.emps)
    console.log(info)
  })
}
useEffect(() => {
  getEmps()
},[])


  return (
    <Cards className="list_container">

      {info.map(e=><div className="employee_card" key={e.id}>
        <img className="employee_image" src={e.image} width="90%" height="75%"/>
        <span className="employee_name">{e.employee_name}</span><br/>
        <span className="employee_id">{e.employee_id}</span>
      </div>)}

    </Cards>
  );
};

export default EmployeeList;