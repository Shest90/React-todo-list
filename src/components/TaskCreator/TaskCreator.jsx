import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { createTask } from "../../store/tasksSlice";

import s from "./TaskCreator.module.scss";

function TaskCreator() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [header, setHeader] = useState("");
  const [note, setNote] = useState("");

  const submit = (e) => {
    try {
      e.preventDefault();

      // throw new Error("Coudn't create new task!");

      dispatch(createTask({ title: header, text: note }));
      enqueueSnackbar({
        message: "Task has been created!",
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar({
        message: error.message,
        variant: "error",
      });
    }
  };

  return (
    <form className={s.taskCreator}>
      <input
        className={s.header}
        value={header}
        onChange={(e) => {
          setHeader(e.target.value);
        }}
        type="text"
        placeholder="Заголовок"
      />
      <input
        className={s.note}
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
        type="text"
        placeholder="Ваша заметка"
      />
      <button onClick={submit} type="submit" className={s.button}>
        СОХРАНИТЬ
      </button>
    </form>
  );
}

export default TaskCreator;
