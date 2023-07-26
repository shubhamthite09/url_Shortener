import {Login,LogOut} from "./actionType";
import { setInLocal } from '../../utils/localStorege';
export const loginAction = (token)=>{
    setInLocal("Url_Token",token);
    setInLocal("isLogin",true);
    return {type:Login,payload:true};
}
export const logoutAction = ()=>{
    setInLocal("Url_Token","");
    setInLocal("isLogin",false);
    return {type:LogOut,payload:false};
}