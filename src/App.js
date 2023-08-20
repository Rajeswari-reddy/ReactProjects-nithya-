import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/header/Dashboard";
import JobsOpen from "./components/header/JobsOpen";
import AiSearch from "./components/header/AiSearch";
import AccountManage from "./components/header/AccountManage";
import Notification from "./components/header/Notification";
import User from "./components/header/User";
import Complete from "./Complete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/job-posting" element={<JobsOpen />}></Route>
          <Route path="/ai-search" element={<AiSearch />}></Route>
          <Route path="/account-management" element={<AccountManage />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
        <Complete />
      </BrowserRouter>
    </div>
  );
}

export default App;
