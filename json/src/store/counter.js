import { createSlice ,configureStore} from "@reduxjs/toolkit"

let initialCouterState = {
    count: 0,
    showCounter:false,
}
const counterSlice=createSlice({
    name: "counter",
    initialState:initialCouterState,
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
        decrementBy2(state) {
        state.count=state.count-2;
        },
         incermentBy5(state,aciton) {
        state.count=state.count+aciton.payload;
        },
      
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
        
    }
})
export default counterSlice