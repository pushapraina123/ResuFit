import axios from "axios";

const isntance = axios.create({
  baseURL: "/", // Replace with your backend API URL
 
  
}); 

export default isntance;