import { legacy_createStore, combineReducers } from "redux"
import { applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
 
import ClothReducer from "./cloths.js/reducer"
 import { authReducer } from "./auth/reducer";


const rootReducer = combineReducers({ clothData: ClothReducer, authReducer })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
    rootReducer,
 composeEnhancers(applyMiddleware(thunk))
)