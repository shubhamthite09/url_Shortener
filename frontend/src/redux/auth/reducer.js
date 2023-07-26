import { getFromInLocal } from "../../utils/localStorege";
import {Login,LogOut} from "./actionType";

const initialState ={
    isAuth: getFromInLocal("isLogin") || false,
}
export const reducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case Login:
            return {...state,isAuth:payload}
        case LogOut:
            return {...state,isAuth:payload}
        default:
            return state
    }
}