import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Multipleusers from "./apps/dynamic_route/pages/Multipleusers";
import Singleuser from "./apps/dynamic_route/pages/Singleuser";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Multipleusers />}></Route>
          <Route path=":id" element={<Singleuser />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
