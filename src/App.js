import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./apps";
import Users from "./apps/dynamic_route/pages/Users";
import User from "./apps/dynamic_route/pages/User";
import ErrorPage from "./apps/ErrorPage";
import ProtectedRoutes from "./apps/protected_routes/pages/ProtectedRoutes";
import Dashboard from "./apps/protected_routes/pages/Dashboard";
import Profile from "./apps/protected_routes/pages/Profile";
import { Login } from "./apps/protected_routes/pages/Login";
import { Auth } from "./apps/protected_routes/config/Auth";
import Testcounter from "./apps/test/redux_counter/counter";

function App() {
  return (
    <Auth>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/counter" element={<Counter />} /> */}
          
          <Route path="/testcounter" element={<Testcounter />} />

          <Route path="users">
            <Route index={true} element={<Users />}></Route>
            <Route index={false} path=":id" element={<User />} />
          </Route>
          {/* <Route path="users/:id" element={<User />} />  */}

          <Route path="protectedroutes" element={<ProtectedRoutes />} />
          <Route path="protectedroutes/dashboard" element={<Dashboard />} />
          <Route path="protectedroutes/profile" element={<Profile />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Auth>
  );
}

export default App;
