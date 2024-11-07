import React, { useState } from 'react';
import API from '../api';

const TaskItem = ({ task, fetchTasks }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const toggleCompletion = async () => {
    try {
      await API.put(`/${task._id}`, { isCompleted: !isCompleted });
      setIsCompleted(!isCompleted);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async () => {
    try {
      await API.delete(`/${task._id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={toggleCompletion}>
        {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;

