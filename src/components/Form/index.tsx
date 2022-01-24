import React from 'react';
import Button from '../Button';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">What do you want to study?</label>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div>
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
        <Button />
      </form>
    );
  }
}

export default Form;
