import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./Components/Button/Button";
import MapReduceFilter from "./Components/MapReduceFilter/MapReduceFilter";
import RealTimeSearch from "./Components/RealTimeSearch/RealTimeSearch";
import ComponentA from "./Components/ReduxFundamental/RFComponents/ComponentA";
import Home from "./Container/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
