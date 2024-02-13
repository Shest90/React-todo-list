import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./Header.module.scss";

function Header() {
  const { completedTasksCount, processedTasksCount } = useSelector(
    (state) => state.tasks
  );

  return (
    <div className={s.container}>
      <Link className={s.h2} to="/">
        Keeper
      </Link>
      <Link className={s.h2} to="/dashboard">
        Dashboard
      </Link>
      <h2 className={s.h2}>
        Выполнено: {completedTasksCount}, В процессе: {processedTasksCount}
      </h2>
    </div>
  );
}

export default Header;
