import React from "react";

function TodoItem({ task, index, toggleComplete, deleteTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span className="task-text">{task.text}</span>
<div className="btn-group">
  <button className="btn-complete" onClick={() => toggleComplete(index)}>
    ✓
  </button>
  <button className="btn-delete" onClick={() => deleteTask(index)}>
    🗑
  </button>
</div>
    </li>
  );
}

export default TodoItem;
