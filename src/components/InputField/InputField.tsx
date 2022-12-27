import React, { useRef } from 'react';
import './InputField.css';

interface Props {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ newTask, setNewTask, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
          <form
              className='input'
              onSubmit={(e) => {
                  handleAdd(e);
                  inputRef.current?.blur();
              }}>
              <input
                  type="text"
                  ref={inputRef}
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  className="input-box"
                  placeholder='Create a task' />
              <button type='submit' className='input-submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField;
