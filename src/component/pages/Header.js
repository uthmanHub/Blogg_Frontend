import React, { useContext, useState } from "react";
import "./../assets/css/Header.css";
import images from "../assets/images/images";
import { Link } from "react-router-dom";
import { Ctx } from "../context/AuthContext";

const Header = () => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [auth, setAuth] = useContext(Ctx);

  const logOut = () => {
    setAuth("");
  };

  return (
    <>
      <div className="header">
        <div>
          <img src={images[0]} alt="" className="book" />
        </div>
        <h2 style={{color: 'white'}}>{auth.role}</h2>
        <div className="profile">
          <img src={images[1]} alt="" className="bell" />
          <img
            src={images[2]}
            alt=""
            onClick={() => setDisplayDropdown(!displayDropdown)}
          />
        </div>
      </div>

      <div className={displayDropdown ? "dropdown" : "hide"}>
        <ul>
          <p>Welcome <strong>{auth.name}</strong> </p>
          <hr/>
          <Link to={"/Dashboard"} className="gg">
            {" "}
            <li>Dashboard</li>
          </Link>
          <Link to={"/Dashboard/about"} className="gg">
            {" "}
            <li>Profile</li>
          </Link>
          <Link to={"/Dashboard/post"} className="gg">
            {" "}
            <li>Create Post</li>
          </Link>
          <hr/>
          <li onClick={logOut}>Logout</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
