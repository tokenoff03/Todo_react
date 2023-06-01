import React, { useEffect, useState } from "react";
import Clock from "../Clock/Clock";
import demon from "../icons/demon1.png";
import Header from "./TodoHeader/Header";
import ms from "./Main.module.css";
import { Navigate } from "react-router-dom";
import TodoList from "./TodoList/TodoList";

const Main = ({ todo, setTodo, search, setSearch }) => {
  const [wmode, setWmode] = useState(false);

  function dark_mode() {
    let main = document.querySelector(".main");
    setWmode(false);
    if (wmode == false) {
      main.classList.add("darkmode");
    }
  }

  let main = document.querySelector(".main");
  if (wmode == true) {
    main.classList.remove("darkmode");
  }

  const [time, setTime] = useState("00:00:00");
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  if (!logInfo) return <Navigate to="/signUp" />;
  return (
    <div className="main">
      <Header
        todo={todo}
        setTodo={setTodo}
        search={search}
        setSearch={setSearch}
      />
      <div className="container">
        <TodoList
          todo={todo}
          setTodo={setTodo}
          search={search}
          setSearch={setSearch}
        />
        <div onClick={dark_mode} className={ms.shadowBlock}>
          <img src={demon} alt="" />
        </div>

        <Clock
          wmode={wmode}
          setWmode={setWmode}
          time={time}
          setTime={setTime}
        />
      </div>
    </div>
  );
};

export default Main;
