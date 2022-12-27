import React from 'react';
import { Task } from '../../utilities/model';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import './SingleTask.css';


interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
    return (
        <form className='single-task'>
            <span className="task-name">{task.taskName}</span>
            <div>
                <span className="icon">
                    <FaEdit />
                </span>
                <span className="icon">
                    <FaTrashAlt />
                </span>
                <span className="icon">
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTask
