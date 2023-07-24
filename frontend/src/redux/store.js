import {legacy_createStore} from "redux";
import {reducer} from "./auth/reducer"


//if don't want to use middleware then just pass reducer

export const store = legacy_createStore(reducer)