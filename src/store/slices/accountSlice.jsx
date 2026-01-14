import { createSlice } from "@reduxjs/toolkit"


const initialAccountState = {
    isLogged : false,
    userData : null,

}

export const accountSlice = createSlice(
    {
        name : 'account',
        initialState : initialAccountState,
        reducers : {
            
        }
    }
);


export default accountSlice.reducer;