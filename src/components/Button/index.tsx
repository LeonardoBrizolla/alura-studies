import React from 'react';

class Button extends React.Component {
  render() {
    const isActive = false;
    const styles = {
      background: isActive ? 'green' : 'red',
    };
    return (
      <button style={{ backgroundColor: styles.background }}>
        Hello im a button
      </button>
    );
  }
}

export default Button;
