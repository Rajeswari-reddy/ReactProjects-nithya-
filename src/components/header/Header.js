import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "./Images/job.png";

import logo2 from "./Images/woman.png";
import "../CSS/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" style={{ height: "80px" }} />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>

        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : " "}>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/job-posting">Job Openings</Link>
        </li>
        <li>
          <Link to="/ai-search">AI Search</Link>
        </li>
        <li>
          <Link to="/account-management">Account Management</Link>
        </li>
        <li>
          <Link to="/notification">
            <i className="fa fa-bell-o"></i>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <img src={logo2} alt="log2" style={{ height: "30px" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
