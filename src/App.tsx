import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import { Task } from './utilities/model';

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
      {
        tasks.map(t => <li key={t.id}>{ t.taskName }</li>)
      }
    </div>
  );
}

export default App;
