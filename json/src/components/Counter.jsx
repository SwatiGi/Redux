import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css"
import { counterAction } from "../store";
const Counter = () => {
  let count = useSelector(state => state.counter.count);
 
    let dispatch = useDispatch();
let showCounter = useSelector(state=>state.counter.showCounter)
  const handleIncrement = () => {
    dispatch(counterAction.increment())
  };

  const handleDecrement = () => {
   dispatch(counterAction.decrement())
    };
    const handleIncrementBy2 = () => {
   dispatch(counterAction.incermentBy2())
    }
    const handleDecrementBy2 = () => {
   dispatch(counterAction.decrementBy2())
    };
//     const handleDecrementBy5 = () => {
//    dispatch({type:"decrementBy5"})
//     };
    const handleIncrementBy5 = () => {
   dispatch(counterAction.incermentBy5(5))
    };
   const handleToggle = () => {
    dispatch(counterAction.toggle())
    }

  return (
    <div className='container'>
      <h1>Redux Counter</h1>
     {showCounter&&<div className='value'>{count}</div>}
             <button onClick={handleIncrement} className='btn'>Increment</button>
             <button onClick={handleDecrement} className='btn'>Decrement</button>
             <button onClick={handleIncrementBy2} className='btn'>Increment By 2</button>
             <button onClick={handleDecrementBy2} className='btn'>Decrement By 2</button>
             <button onClick={handleIncrementBy5} className='btn'>Increment By 5</button>
             {/* <button onClick={handleDecrementBy5} className='btn'>Decrement By 5</button> */}
            <button className='btn' onClick={handleToggle}>Toggle Counter</button>
    </div>
  );
};

export default Counter;
