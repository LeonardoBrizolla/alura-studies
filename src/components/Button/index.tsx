import React from 'react';

import styles from './Button.module.scss';

class Button extends React.Component<{
  type?: 'button' | 'submit' | 'reset' | undefined;
}> {
  render() {
    const { type = 'button' } = this.props;
    return (
      <button type={type} className={styles.botao}>
        {' '}
        {this.props.children}{' '}
      </button>
    );
  }
}

export default Button;
