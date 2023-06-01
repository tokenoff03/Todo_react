import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import si from "./SignIn.module.css";
import { Container } from "react-bootstrap";
function SignIn({ setIsAuth }) {
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  let Navig = useNavigate();
  const checkUser = (usersArray, existLogin, existPassword) => {
    for (let i = 0; i < usersArray.length; i++) {
      if (
        usersArray[i].login == existLogin &&
        usersArray[i].password == existPassword
      ) {
        usersArray[i].isAuth = true;
        logInfo.users[i] = {
          login: existLogin,
          password: existPassword,
          isAuth: true,
        };
        localStorage.setItem("logInfo", JSON.stringify(logInfo));
        setIsAuth(true);
        return true;
      }
    }
    return false;
  };

  const clickButton = () => {
    if (logInfo) {
      if (checkUser(logInfo.users, login, password)) {
        alert("Welcome " + login);
        Navig("/main");
      } else alert("Incorrect password or User does not exist");
    } else {
      alert("Incorrect password or User does not exist");
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") clickButton();
  };
  return (
    <div className={si.container}>
      <div className={si.sign_left}>
        <div className={si.sign_left_block}>
          <span className={si.left_text1}>ToDo</span>

          <div>
            <span className={si.left_text2}>List</span>
            <span className={si.left_text3}>
              will help you focus on any activity — from work to play.
            </span>
          </div>
        </div>
      </div>

      <div className={si.form}>
        <div className={si.sign_title}>Sign in</div>

        <div className={si.sign_block}>
          <label className={si.sign_label}>Name or Email</label>
          <input
            className={si.sign_inp}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <div className={si.sign_block}>
          <label className={si.sign_label}>Password</label>
          <input
            onKeyUp={(e) => handleKeyUp(e)}
            type="password"
            className={si.sign_inp}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={si.signButton} onClick={clickButton}>
          Log in
        </button>
        <p className={si.sign_subtext}>
          Don't have an account?
          <NavLink
            to="/signUp"
            className={(navData) => (navData.isActive ? si.active : "")}
          >
            {""}
            <label className={si.sign_subbtn}>Register</label>
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
