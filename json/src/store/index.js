



import { createSlice ,configureStore} from "@reduxjs/toolkit"

let initialState = {
    count: 0,
    showCounter:false,
}
const counterSlice=createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        incermentBy2(state) {
         state.count=state.count+2;
        },
        decrementBY2(state) {
        state.count=state.count-2;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
        
    }
})


const store = configureStore({
    reducer: counterSlice.reducer,
    
    
})
export const counterAction = counterSlice.actions
export default store
