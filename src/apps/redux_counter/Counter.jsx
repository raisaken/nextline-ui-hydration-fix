import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./CounterSlice";

function Counter() {
    const[input, setInput] = useState()
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    // console.log(state)
    
  return (
    <>
      <h1>Counter</h1>
      Count:{count}
      <br />
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <br />
      <input type="number" onChange={(e)=>setInput(e.target.value)}/>
      {/* <button onClick={()=>dispatch(incrementByAmount())}>add number</button> */}
      <button onClick={()=>dispatch(incrementByAmount(Number(input)))}>Add by number</button>
    </>
  );
}

export default Counter;
