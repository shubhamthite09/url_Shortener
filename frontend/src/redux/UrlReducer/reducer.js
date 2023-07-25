import {DELETE_URL,ADD_URL,NEW_URL} from "./actionType";

const initialState ={
    urls:[],
}
export const reducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case ADD_URL:
            return {...state,urls:[...state.urls,payload]};
        case DELETE_URL:
            return {...state,urls:state.urls.filter((ele) => ele._id !== payload)};
        case NEW_URL:
            return {...state,urls:payload}
        default:
            return state
    }
}