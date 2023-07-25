import {legacy_createStore,combineReducers} from "redux";
import {reducer as AuthReducer} from "./auth/reducer"
import {reducer as UrlReducer} from "./UrlReducer/reducer"
const reducer = combineReducers({AuthReducer,UrlReducer})
//if don't want to use middleware then just pass reducer

export const store = legacy_createStore(reducer)