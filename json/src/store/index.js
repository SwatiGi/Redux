



import { configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counter"
import authSlice from "./Auth"


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth:authSlice.reducer
    },
    
    
})
export const counterAction = counterSlice.actions
export const authAction = authSlice.actions
export default store
