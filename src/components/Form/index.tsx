import React from 'react';
import Button from '../Button';

import styles from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={styles.novaTarefa}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">What do you want to study?</label>
          <input
            type="text"
            id="task"
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
