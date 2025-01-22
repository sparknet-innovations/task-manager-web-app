// src/components/TaskList.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './TaskList.css';

const TaskItem = ({ task, index, moveTask, handleDeleteTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'TASK',
    hover: (item) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="task-item"
      style={{
        opacity: isDragging ? 0.5 : 1,
        transform: isDragging ? 'scale(1.05)' : 'none',
      }}
    >
      <p>{task.name}</p>
      <span className="task-category">{task.category}</span>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

const TaskList = ({ tasks, moveTask, handleDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          moveTask={moveTask}
          handleDeleteTask={handleDeleteTask} // Now using the prop to handle deletion
        />
      ))}
    </div>
  );
};

export default TaskList;
