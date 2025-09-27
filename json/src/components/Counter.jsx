import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css"
const Counter = () => {
  let count = useSelector(state => state.count);
    let dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({type:"inc"})
  };

  const handleDecrement = () => {
   dispatch({type:"dec"})
    };
    const handleIncrementBy2 = () => {
   dispatch({type:"incrementBy2"})
  }; const handleDecrementBy2 = () => {
   dispatch({type:"decrementBy2"})
  };

  return (
    <div className='container'>
      <h1>Redux Counter</h1>
      <div className='value'>{count}</div>
      <button onClick={handleIncrement} className='btn'>Increment</button>
          <button onClick={handleDecrement} className='btn'>Decrement</button>
          
           <button onClick={handleIncrementBy2} className='btn'>Increment By 2</button>
      <button onClick={handleDecrementBy2} className='btn'>Decrement By 2</button>
    </div>
  );
};

export default Counter;
