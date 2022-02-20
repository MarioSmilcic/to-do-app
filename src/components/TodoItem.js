import React, { useState } from "react";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <li className="text-lg text-gray-500 list-none py-4 px-0 border-b border-solid border-gray-300">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className="mr-4"
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        <button
          onClick={() => props.deleteTodoProps(props.todo.id)}
          className="delete"
        >
          Delete
        </button>

        <span
          className={
            props.todo.completed
              ? "italic text-gray-400 line-through opacity-40"
              : null
          }
        >
          {props.todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        value={props.todo.title}
        className="w-full p-2.5 border border-solid border-gray-300 text-black"
        onChange={(e) => {
          props.setUpdate(e.target.value, props.todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
