import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { completeTask, updateTask } from "../../store/tasksSlice";
// import { startEditing } from "../../store/taskEditorSlice";
import TaskEditor from "../../components/TaskEditor";
import s from "./Task.module.scss";

function Task({ id, title, text, date, isDone, color }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedColor, setSelectedColor] = useState(color);

  console.log("selectedColor:", selectedColor);

  const checkIsDone = () => {
    dispatch(completeTask(id));
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  const handleUpdateTask = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    setIsEditing(false);
  };
  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
    dispatch(updateTask({ id, title, text, color: newColor }));
  };

  return (
    <div
      id={id}
      className={isDone ? s.taskIsDone : s.task}
      style={{ backgroundColor: selectedColor }}
    >
      {isEditing ? (
        <TaskEditor
          id={id}
          title={title}
          text={text}
          color={color}
          onCancel={handleCancelEdit}
          onUpdate={handleUpdateTask}
        />
      ) : (
        <>
          <h3 className={isDone ? s.titleIsDone : s.title}>{title}</h3>
          <p className={isDone ? s.textIsDone : s.text}>{text}</p>
          <h5 className={isDone ? s.dateIsDone : s.date}>{date}</h5>
          <button
            onClick={checkIsDone}
            className={isDone ? s.buttonIsDone : s.button}
          >
            {isDone ? "ВЫПОЛНЕНО" : "ВЫПОЛНИТЬ"}
          </button>
          <button onClick={handleEditClick} className={s.buttonEdit}>
            Редактировать
          </button>
          <select
            className={s.colorSelect}
            value={selectedColor}
            onChange={(e) => handleColorChange(e.target.value)}
          >
            <option value="#00c41e" style={{ backgroundColor: "#00c41e" }}>
              Зеленый
            </option>
            <option value="#c40000" style={{ backgroundColor: "#c40000" }}>
              Красный
            </option>
            <option value="#0074e4" style={{ backgroundColor: "#0074e4" }}>
              Синий
            </option>
          </select>
        </>
      )}
    </div>
  );
}

export default Task;
