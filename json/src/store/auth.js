

import { createSlice } from "@reduxjs/toolkit"



const InitialAuthState = {
isAuthenticate:false
}

const authSlice = createSlice({
    name: "Authentication",
    initialState: InitialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticate = true;
        },
        logout(state) {
            state.isAuthenticate = false;
        }
    }
})



export default authSlice
