// const redux = require("redux")


// const counterReducer = (state = { count:0 }, { type }) => {
//     if (type == "inc") {
//         return {
//             count: state.count + 1,
//         }
//     } else if(type == "dec") {
//         return {
//         count :state.count-1,
//         }
//     }
    
//     return state

// }
// const store = redux.legacy_createStore(counterReducer)
// console.log(store.getState())

// const countersubscribe = () => {
//     const latestState = store.getState()
//     console.log(latestState)
// }
// store.subscribe(countersubscribe)
// store.dispatch({ type: "inc" })
// store.dispatch({type:"dec"})


import { legacy_createStore } from "redux"
const counterReducer = (state={count:0},action) => {
    if (action.type == "inc") {
        return {
            count: state.count + 1,
            
        }
    } else if (action.type == "dec") {
        return {
            count: state.count - 1,
        }
    }else if (action.type == "incrementBy2") {
        return {
            count: state.count + 2,
        }
    }else if (action.type == "decrementBy2") {
        return {
            count: state.count - 2,
        }
    }else if (action.type == "incrementBy5") {
        return {
            count: state.count + 5,
        }
    }else if (action.type == "decrementBy5") {
        return {
            count: state.count - 5,
        }
    }
    else {
        return state;
    }
}

const store = legacy_createStore(counterReducer)
export default store
