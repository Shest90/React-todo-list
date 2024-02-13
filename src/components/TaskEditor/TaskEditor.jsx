import React, { useState } from "react";
import s from "./TaskEditor.module.scss";

function TaskEditor({ id, title, text, color, onCancel, onUpdate }) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedText, setEditedText] = useState(text);

  const handleUpdateClick = () => {
    onUpdate({
      id,
      title: editedTitle,
      text: editedText,
      color,
    });
  };

  return (
    <div className={s.taskEditor}>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className={s.input}
      />
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        className={s.input}
      />
      <button onClick={handleUpdateClick} className={s.buttonUpdate}>
        Обновить
      </button>{" "}
      {/* Примените класс для стилизации кнопки */}
      <button onClick={onCancel} className={s.buttonCancel}>
        Отмена
      </button>{" "}
      {/* Примените класс для стилизации кнопки */}
    </div>
  );
}

export default TaskEditor;
