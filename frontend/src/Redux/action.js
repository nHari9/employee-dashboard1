//Action Types:

 const ADD_EMP = "ADD_EMP";


//Action creators:

 
const addEmp=(emp)=> { ({ type: ADD_EMP, payload: emp })};


export default {addEmp,ADD_EMP}