import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./counterslice";

function Counter() {
  const dispatch = useDispatch();

  const { todos, status } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div>
      Counter
      <input type="text" />
      {console.log(todos)}
      {todos.map((todo) => {
        return <h2>{todo.title}</h2>;
      })}
    </div>
  );
}

export default Counter;
