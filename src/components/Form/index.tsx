import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../Button';
import { ITasks } from '../../types/tasks';

import styles from './Form.module.scss';

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}

export const Form = ({ setTasks }: FormProps) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('00:00:00');

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTasks((oldTasks) => [
      ...oldTasks,
      { 
        id: uuidv4(),
        title: title, 
        time: time, 
        selected: false, 
        done: false,
      },
    ]);

    setTitle('');
    setTime('');
  }

  return (
    <form className={styles.novaTarefa} onSubmit={addTask}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">What do you want to study?</label>
          <input
            type="text"
            id="task"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            name="task"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            id="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            name="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
  )
}
