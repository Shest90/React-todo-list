import React from "react";
import { useSelector } from "react-redux";
import {
  selectCompletedTasksCount,
  selectProcessedTasksCount,
} from "../../store/tasksSlice";
import s from "./Dashboard.module.scss";
import Header from "../../components/Header";

function Dashboard() {
  const countIsDone = useSelector(selectCompletedTasksCount);
  const countInProcess = useSelector(selectProcessedTasksCount);
  return (
    <div>
      <Header countIsDone={countIsDone} countInProcess={countInProcess} />
      <div className={s.dashboard}>
        <h1 className={s.h1} style={{ color: "#00c41e" }}>
          {countIsDone}
        </h1>
        <h1 className={s.h1} style={{ color: "#c40000" }}>
          {countInProcess}
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
