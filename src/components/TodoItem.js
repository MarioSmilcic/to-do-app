import React, { useState } from 'react';
import '../app.css';
import styles from '../TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#F7FF00',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>
          Delete
        </button>

        <span style={props.todo.completed ? completedStyle : null}>
          {props.todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        value={props.todo.title}
        className={styles.textInput}
        onChange={(e) => {
          props.setUpdate(e.target.value, props.todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
