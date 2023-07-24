import {Login,LogOut} from "./actionType";
export const loginAction = ()=>{
    return {type:Login,payload:true};
}
export const logoutAction = ()=>{
    return {type:LogOut,payload:false};
}