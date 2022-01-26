import React, { ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children: ReactNode
}

export const Button = ({ 
    type = 'button', 
    onClick, 
    children 
}: ButtonProps) => {
  return (
    <button 
      type={type} 
      className={styles.botao} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}
