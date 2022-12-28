import React from 'react';
import { Task } from '../../utilities/model';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import './SingleTask.css';
import { useState } from 'react';


interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.taskName);

    const handleComplete = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task))
    }

    const handleDelete = (id: number) => {
        setTasks(tasks.filter(task=>task.id !== id))
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();
        setTasks(tasks.map(task => task.id === id ? { ...task, taskName: editTask } : task));
        setEdit(false);
    }

    return (
        <form className='single-task' onSubmit={(e)=>handleEdit(e, task.id)}>
            {
                edit ? 
                    <input type="text" value={editTask} onChange={(e)=>setEditTask(e.target.value)} />
                    :
                    task.isCompleted ?
                    <s className="task-name">{task.taskName}</s>
                    :
                    <span className="task-name">{task.taskName}</span>
            }
            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !task.isCompleted) {
                        setEdit(!edit);
                    }
                }}>
                    <FaEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(task.id)}>
                    <FaTrashAlt />
                </span>
                <span className="icon" onClick={() => handleComplete(task.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTask
