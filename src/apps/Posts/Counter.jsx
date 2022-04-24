import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, increment } from "./CounterSlice";

function Counter() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.posts);
  const count = useSelector((state) => state.post.value);
  
  
  console.log(post);
  return (
    <div>
      Counter
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(getPost())}>kjhgfghj</button>
    </div>
  );
}

export default Counter;
