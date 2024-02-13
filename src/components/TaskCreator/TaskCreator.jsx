import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createTask } from "../../store/tasksSlice";

import s from "./TaskCreator.module.scss";

function TaskCreator() {
  const dispatch = useDispatch();

  const [header, setHeader] = useState("");
  const [note, setNote] = useState("");
  const [selectedColor, setSelectedColor] = useState("#00c41e");

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
    console.log("Selected color:", newColor);
  };

  const submit = (e) => {
    e.preventDefault();

    dispatch(createTask({ title: header, text: note, color: selectedColor }));
    setHeader("");
    setNote("");
    setSelectedColor("#00c41e");
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
      <select
        className={s.colorSelect}
        value={selectedColor}
        onChange={handleColorChange}
      >
        <option value="#00c41e">Зеленый</option>
        <option value="#c40000">Красный</option>
        <option value="#0074e4">Синий</option>
      </select>
      <button onClick={submit} type="submit" className={s.button}>
        СОХРАНИТЬ
      </button>
    </form>
  );
}

export default TaskCreator;
