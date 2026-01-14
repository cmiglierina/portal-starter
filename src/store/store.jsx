import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from './slices/accountSlice'



const store = configureStore(
    {
        reducer : {
            account : AccountReducer
        }
    }
);


export default store;