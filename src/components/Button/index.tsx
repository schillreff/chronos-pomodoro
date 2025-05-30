import type React from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export const Button = ({ icon, color = 'green', ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {icon}
    </button>
  );
};
