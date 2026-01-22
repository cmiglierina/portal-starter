import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import authservice from '../../service/authservice'

const initialState = {
    useData : {
        username : null,
        token : null
    },
    isLogged : false,
    error : null
}

export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkApi) => {
        try {
            const response = await authservice.login(userData);
            if (!response.esito) {
                return thunkApi.rejectWithValue({message:response.message});
            }
            localStorage.setItem('token',response.data.token);

            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const authslice = createSlice(
    {
        name : 'auth',
        initialState :initialState,
        reducers : {
            logout : (state)=> {
                state.isAuthenticated = false;
                state.user = null;
                state.error = null;
                localStorage.removeItem('token');
            },
            loginFailure(state, action) {
                state.user = null;
                state.isAuthenticated = false;
                state.error = action.payload;
                toast.error(action.payload);
                localStorage.removeItem('token');
            },
           
           
            registrationFailure(state, action) {
                state.user = null;
                state.isAuthenticated = false;
                state.error = action.payload;
                localStorage.removeItem('token');
            }
        },
        extraReducers : (builder) => {
            builder.addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            }
            ).addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload.data.user;
                state.token = action.payload.data.token;
                state.isAuthenticated = true;
            }).addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.error.message || 'Login failed';
                state.token = null;
                localStorage.removeItem('token');
            });
        }
    }
);

export const {logout, loginFailure,registrationFailure} = authslice.actions;
export default authslice.reducer;