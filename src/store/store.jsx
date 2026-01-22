import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from './slices/accountSlice'
import AuthReducer from './slices/authSlice'


const store = configureStore(
    {
        reducer : {
            account : AccountReducer,
            auth: AuthReducer
        }
    }
);


export default store;