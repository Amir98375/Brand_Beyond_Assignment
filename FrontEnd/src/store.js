import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"


import thunk from "redux-thunk"
import { signupReducer } from "./Redux/SignUp/reducer";
import { userReducer } from "./Redux/GetUser/reducer";
import { authReducer } from "./Redux/Login/reducer";


const root = combineReducers({
  signup:signupReducer,
  user:userReducer,
  login:authReducer
})

const composeEnhancer= window._REDUX_DEV_TOOLS_EXTENSION_COMPOSE||compose;
export const store=legacy_createStore(root,composeEnhancer(applyMiddleware(thunk)))
console.log(store.getState())