import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm fetchTasks={() => window.location.reload()} />
      <TaskList />
    </div>
  );
};

export default App;

