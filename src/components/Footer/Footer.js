import React from "react";
import "../CSS/footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i
                  className="fa fa-facebook"
                  style={{ fontSize: "40px", color: "#3b5998" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa fa-twitter"
                  style={{ fontSize: "40px", color: "#55acee" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa fa-instagram"
                  style={{ fontSize: "40px", color: "#f07355" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
