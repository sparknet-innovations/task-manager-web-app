import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import default toast styles
import './TaskForm.css'; // Import your custom styles

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    name: '',
    category: 'work',
    dueDate: '',
    reminder: false,
    details: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate task name
    if (!task.name.trim()) {
      toast.error('Task name cannot be empty!'); // Error notification
      return;
    }

    // Add task to the list
    setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
    toast.success('Task added successfully!'); // Success notification

    // Reset the form
    setTask({ name: '', category: 'work', dueDate: '', reminder: false, details: '' });
  };

  // Handle task deletion
  const handleDelete = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    toast.info('Task deleted successfully!'); // Info notification
  };

  return (
    <div className="task-form-wrapper">
      <div className="task-form">
        <h2 id ='task-form-header'>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChange}
            placeholder="Task Name"
            required
          />
          <select name="category" value={task.category} onChange={handleChange}>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
          <input
            type="datetime-local"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
          <textarea
            name="details"
            value={task.details}
            onChange={handleChange}
            placeholder="Task Details"
          />
          <div>
            <input
              type="checkbox"
              name="reminder"
              checked={task.reminder}
              onChange={handleChange}
            />
            <label>Set Reminder</label>
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className="task-list">
        <h2>Task List</h2>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((t) => (
              <li key={t.id} className="task-item">
                <div>
                  <h3>{t.name}</h3>
                  <p>
                    <strong>Category:</strong> {t.category}
                  </p>
                  <p>
                    <strong>Due Date:</strong> {t.dueDate || 'N/A'}
                  </p>
                  {t.details && <p><strong>Details:</strong> {t.details}</p>}
                  {t.reminder && <span className="reminder-badge">Reminder Set</span>}
                </div>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskForm;
