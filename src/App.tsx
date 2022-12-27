import React, { useState } from 'react';
import './App.css';
import { Task } from './utilities/model';
import InputField from './components/InputField/InputField';
import TaskList from './components/TaskList/TaskList';

const App: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);


  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), taskName: newTask, isCompleted: false }]);
      setNewTask('')
    }
  };
  console.log(tasks);
  return (
    <div className="App">
      <span className="heading">Task-Master</span>
      <InputField newTask={newTask} setNewTask={setNewTask} handleAdd={handleAdd} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
