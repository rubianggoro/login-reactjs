import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    // console.log("Props", props);
    props.history.push("/login");
  };

  return (
    <div>
      <h1>Silahkan Daftar</h1>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Daftar</button>
    </div>
  );
};

export default withRouter(Register);
