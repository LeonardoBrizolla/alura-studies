import React from 'react';
import Button from '../Button';

import styles from './Form.module.scss';

class Form extends React.Component {
  state = {
    title: '',
    time: '00:00:00',
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`State: `, this.state);
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
        <Button>Add</Button>
      </form>
    );
  }
}

export default Form;
