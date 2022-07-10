import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/users'
});

const addUsers=(user)=>axiosInstance.post('',user);
export {addUsers}