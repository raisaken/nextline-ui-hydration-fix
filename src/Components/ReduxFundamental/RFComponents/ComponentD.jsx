import { useSelector } from "react-redux";
const ComponentD = () => {
  const text = useSelector((state) => state.text);
  return (
    <>
      <h1>Lowercase</h1>
      <h2>{text && text.toLowerCase()}</h2>
    </>
  );
};

export default ComponentD;