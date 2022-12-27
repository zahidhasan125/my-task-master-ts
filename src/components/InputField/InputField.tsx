import React from 'react';
import './InputField.css';

interface Props {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({newTask, setNewTask}) => {
  return (
    <div>
          <form className='input'>
              <input type="text" className="input-box" placeholder='Create a task' />
              <button type='submit' className='input-submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField;
