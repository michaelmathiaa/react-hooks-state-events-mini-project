import React from "react";
import Task from "./Task";
function TaskList({ tasks, handleClick }) {
  return (
    <div className="tasks">
      {tasks.map((task) => <Task key={task.text} category={task.category} text={task.text} handleClick={handleClick} />)}
    </div>
  );
}

export default TaskList;
