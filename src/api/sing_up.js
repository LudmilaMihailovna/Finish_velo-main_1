import {instance} from "./config";

export const signUp = async (data) => {
  try{
    const response = await instance.post("auth/sign_up", data)
    console.log(response)
  }catch(e){
    console.log(e)
  }
}
