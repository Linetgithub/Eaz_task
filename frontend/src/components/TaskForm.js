import React, { useState } from 'react';
import API from '../api';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await API.post('/', { title });
      setTitle('');
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

