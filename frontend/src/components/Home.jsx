import axios from "axios";
import React,  {useState , useEffect} from "react";
import  {useSelector}  from 'react-redux'
import  addEmp  from "../Redux/action";

export default function Home() {
  
  const [formData, setFormData] = useState( {
    employee_name: "",
    employee_id: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: ""
  });
 
  const emps = useSelector(store => store.emps);

  const [info, setInfo]=useState()






function handleSubmit(event){
    event.preventDefault();
    axios.post("http://127.0.0.1:3456/a/empAdd", formData) 
    // .then(() => { getEmps() });
    }


  return (
    <div>
      <h1>Employee Form</h1>
      {/* value={formData.employee_name} */}

      <form className="createEmployee" onSubmit={handleSubmit} autoComplete="off" >
        <input type="text" placeholder="Employee Name"  onChange={(e) => setFormData({...formData, employee_name: e.target.value})} />
        <br />
        <input type="text" placeholder="Employee id" name="employee_id" value={formData.employee_id} onChange={(e) => setFormData({...formData, employee_id: e.target.value})}/>
        <br />
        <input type="text" placeholder="Salary" name="salary" onChange={(e) => setFormData({...formData, salary: e.target.value})} value={formData.salary}/>
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
    
      {/* <div>{info.map((e)=> <div>{e.username}</div> )}</div> */}
    </div>
  );
  }
