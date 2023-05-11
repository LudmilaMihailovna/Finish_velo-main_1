import axios from "axios";

export const instance = axios.create({
  baseURL: "https://sf-final-project-be.herokuapp.com/api",
});


const token = localStorage.getItem("token")
if(token){
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
