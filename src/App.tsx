import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';

const App: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('')
  return (
    <div className="App">
      <span className="heading">Task-Master</span>
      <InputField newTask={newTask} setNewTask={setNewTask} />
    </div>
  );
}

export default App;
