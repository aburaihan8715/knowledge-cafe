import React from "react";
import "./Header.css";
import userPhoto from "../../assets/user.jpg";

const Header = () => {
  return (
    <header className="container header_area">
      <nav className="navbar">
        <a className="logo_link" href="#">
          <h1 className="heading_primary logo_heading">Knowledge Cafe</h1>
        </a>

        <ul className="nav_list">
          <li className="nav_item">
            <a href="#" className="nav_link">
              Blogs
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              About
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Others
            </a>
          </li>
        </ul>

        <div className="user_box">
          <img className="user" src={userPhoto} alt="user photo" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
