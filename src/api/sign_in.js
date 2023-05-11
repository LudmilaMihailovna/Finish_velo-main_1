import {instance} from "./config";

export const signIn = async (data) => {
  try{
    const response = await instance.post("auth/sign_in", data)
    console.log(response)
    localStorage.setItem('token', response.data.data.token)
  }catch(e){
    console.log(e)
  }
}
