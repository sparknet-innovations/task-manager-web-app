import React from 'react';
import { useDrag } from 'react-dnd';

const Task = ({ task, onDelete, onEdit }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="task"
    >
      <div>
        <strong>{task.name}</strong>
        <span> ({task.category})</span>
        <p>{task.dueDate ? `Due: ${task.dueDate}` : 'No due date'}</p>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
