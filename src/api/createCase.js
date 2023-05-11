import {instance} from "./config";

export const createCase = async (data) => {
  try{
    const response = await instance.post("cases", data)
    console.log(response)
  }catch(e){
    console.log(e)
  }
}
