import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// Components
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

// Pages
import Home from "./Pages/Home";
import Review from "./Pages/Review";
import Akhir from "./Pages/Akhir";

function App() {
  const isLogin = JSON.parse(localStorage.getItem("statusLogin"));
  console.log(isLogin);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/review">
          {isLogin ? <Review /> : <Redirect to="/login" />}
        </Route>
        <Route path="/akhir">
          {isLogin ? <Akhir /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
