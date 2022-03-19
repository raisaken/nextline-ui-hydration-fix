import { useState } from "react";
import { useDispatch } from "react-redux";
import { submit } from "../RFredux/actions";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch(submit(e.target.value));
  };
  return (
    <>
      <input type="text" value={value} onChange={changeHandler} />
      <ComponentB text={value} />
    </>
  );
};

export default ComponentA;
