import  ADD_EMP  from "./action";


const initState = {  employees: [] };

export default function reducer (store = initState, { type, payload })  {
    // console.log("store", store);
    switch (type) {
            
        case ADD_EMP:
            return { ...store, employees: [...payload] };
        default:
            return store;
    }
}