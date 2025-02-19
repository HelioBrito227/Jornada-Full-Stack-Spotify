import React from "react";
import "./Header.css";
import logoSpotify from "../../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={logoSpotify} alt="logo spotify" />
      </Link>
      <Link className="header__link" to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
