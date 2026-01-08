import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{loggedIn: false},
    reducers: {
        loggedInSuccess:(state)=>{
            state.loggedIn = true
        },
        loggedOutSuccess: (state) => {
            state.loggedIn = false
        },
    },
})

export const {loggedInSuccess, loggedOutSuccess} = authSlice.actions;
export default authSlice.reducer;