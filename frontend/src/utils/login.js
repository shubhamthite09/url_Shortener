import axios from "axios";
export const LoginFunction = async(email,password)=>{
    try{
        const responce = await axios.post(`${process.env.REACT_APP_HOST_URL}user/login`,{email, password});
        console.log(responce);
        if(!responce.data.isError){
            return responce.data.Token
        }else{
            return false;
        }
    }catch(e){
        return false;
    }
}