import { useSelector } from "react-redux";
const ComponentC = () => {
  const text = useSelector((state) => state.text);
  return (
    <>
      <h1>Normal</h1>
      <h2>{text}</h2>
    </>
  );
};
export default ComponentC;
