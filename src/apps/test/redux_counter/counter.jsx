import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementbyasyncvalue, incrementbyvalue } from "./counterSlice";

function Testcounter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setValue] = useState();

  return (
    <div>
      count:{count}
      <button onClick={() => dispatch(increment())}>+</button>
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(incrementbyvalue(Number(num) || 0))}>+</button>
      <button onClick={() => dispatch(incrementbyasyncvalue(Number(num) || 0))}>aysnc +</button>
    </div>
  );
}

export default Testcounter;
