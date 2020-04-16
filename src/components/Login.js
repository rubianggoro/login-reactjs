import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const Login = (props) => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  //   console.log(props);

  const handleChange = (event) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (users.email === user.email && users.password === user.password) {
      localStorage.setItem("statusLogin", true);
      props.history.push("/");
    }
    //  else if (users.email !== user.email && users.password !== user.password) {
    //   alert("Anda harus Daftar!");
    // }
    else {
      alert("salah");
    }
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <input
        type="email"
        name="email"
        value={users.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={users.password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Login</button>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default withRouter(Login);
