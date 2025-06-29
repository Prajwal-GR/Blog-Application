import { createSlice } from "@reduxjs/toolkit";
// creating reducers

const initialState = {
    status :false,
    userData :null
}

const authSlice = createSlice({
    name :"auth",
    initialState ,
    reducers :{
        login : (state,action) =>{
            state.status  = true;
            state.userData = action.payload.userData
        },
        logout :(state,action) =>{
            state.status = false;
            state.userData = null;
        }
    }
})


export const {login,logout} = authSlice.actions;//inside the reducers are the actions
export default authSlice.reducer;//can use without 's'