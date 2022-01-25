import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';

import styles from './Form.module.scss';

import { ITasks } from '../../types/tasks';

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}> {
  state = {
    title: '',
    time: '00:00:00',
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, done: false, id: uuidv4() },
    ]);

    this.setState({
      title: '',
      time: '00:00:00',
    });
  }

  render() {
    return (
      <form className={styles.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">What do you want to study?</label>
          <input
            type="text"
            id="task"
            value={this.state.title}
            onChange={(event) =>
              this.setState({ ...this.state, title: event.target.value })
            }
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
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            name="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    );
  }
}

export default Form;
