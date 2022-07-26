import axios from "axios";
import React, { useState , useEffect} from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    employee_name: "",
    employee_id: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: [],
  });

function handleSubmit(event){
    event.preventDefault();
    
    console.log(formData)
  }


  return (
    <div>
      <h1>Employee Form</h1>

      <form className="createEmployee" onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" value={formData.employee_name} onChange={(e) => setFormData({...formData, employee_name: e.target.value})} />
        <br />
        <input type="text" placeholder="Employee id" name="employee_id" value={formData.employee_id} onChange={(e) => setFormData({...formData, employee_id: e.target.value})}/>
        <br />
        <input type="number" placeholder="Salary" name="salary" onChange={(e) => setFormData({...formData, salary: e.target.value})} value={formData.salary}/>
        <br />
        <input type="text" placeholder="Image" name="image" onChange={(e) => setFormData({...formData, image: e.target.value})} value={formData.image}/>
        <br />
        <input type="text" placeholder="User Name" name="username" onChange={(e) => setFormData({...formData, username: e.target.value})} value={formData.username}/>
        <br />
        <input type="password" placeholder="Password" name="password" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} />
        <br />
        <input type="text" placeholder="work,work-task" name="tasks" onChange={(e) => setFormData({...formData, tasks: e.target.value})} value={formData.tasks} />
        <br />

        <input className="createUser" type="submit" value={"submit"} />
      </form>
    </div>
  );
}
