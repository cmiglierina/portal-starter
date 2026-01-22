import { createSlice } from "@reduxjs/toolkit"


const initialAccountState = {
    userData : {
        name: 'Carlo',
        surname : 'Rossi',
        email : 'carlo.rossi@unaemail.com',
        cellulare : '3401111111'
    },

}

export const accountSlice = createSlice(
    {
        name : 'account',
        initialState : initialAccountState,
        reducers : {
            setUser : (state,action) => {
                state.userData = action.payload;
            }
        }
    }
);

export const {setUser} = accountSlice.actions;
export default accountSlice.reducer;