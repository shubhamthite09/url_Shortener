import {DELETE_URL,ADD_URL,NEW_URL} from "./actionType";

export const addUrl = (url_obj)=>{
    return {type:ADD_URL, payload:url_obj }
}

export const deleteUrl = (id)=>{
    return {type:DELETE_URL, payload:id}
}

export const newState = (data) =>{
    return {type:NEW_URL, payload:data}
}