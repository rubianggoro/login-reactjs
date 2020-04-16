import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/review">
        <li>Review</li>
      </Link>
      <Link to="/akhir">
        <li>Akhir</li>
      </Link>
    </div>
  );
};

export default Header;
