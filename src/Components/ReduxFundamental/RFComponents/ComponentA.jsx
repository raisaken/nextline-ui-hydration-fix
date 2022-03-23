import { useState } from "react";
import { useDispatch } from "react-redux";
import { submit } from "../RFredux/actions";
import ComponentC from "./ComponentC";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";

const ComponentA = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch(submit(e.target.value));
  };
  return (
    <>
      <p>Enter value to change through redux</p>
      <input type="text" value={value} onChange={changeHandler} />
      <ComponentB text={value} />
      <ComponentC text={value} />
      <ComponentD text={value} />
    </>
  );
};

export default ComponentA;
