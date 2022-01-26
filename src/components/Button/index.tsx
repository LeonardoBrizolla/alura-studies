import React from 'react';

import styles from './Button.module.scss';

class Button extends React.Component<{
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}> {
  render() {
    const { type = 'button', onClick } = this.props;
    
    return (
      <button 
        type={type} 
        className={styles.botao} 
        onClick={onClick}
      >
        {' '}
        {this.props.children}{' '}
      </button>
    );
  }
}

export default Button;
