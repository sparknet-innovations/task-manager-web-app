// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Notifications from './components/Notifications';
import { toast } from 'react-toastify';
import moment from 'moment';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Add Task
  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([...tasks, newTask]);
    toast.success('Task added successfully!');
  };

  // Edit Task
  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null);
    toast.success('Task updated successfully!');
  };

  // Delete Task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Remove task from state
    toast.error('Task deleted!');
  };

  // Reorder Tasks (for drag-and-drop functionality)
  const reorderTasks = (taskToMoveIndex, targetIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(taskToMoveIndex, 1); // Remove task at dragged index
    updatedTasks.splice(targetIndex, 0, movedTask); // Insert task at target index
    setTasks(updatedTasks); // Update the state with the new order
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Header />
        <TaskForm onAddTask={addTask} taskToEdit={taskToEdit} onEditTask={editTask} />
        <TaskList 
          tasks={tasks} 
          moveTask={reorderTasks} // Updated prop name to 'moveTask' for reordering tasks
          handleDeleteTask={handleDeleteTask} // Pass the delete handler down to TaskList
        />
        <Notifications />
      </div>
    </DndProvider>
  );
};

export default App;
