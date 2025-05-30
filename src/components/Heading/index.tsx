import type React from 'react';
import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
  id?: string;
};

export const Heading = ({ id, children }: HeadingProps) => {
  return (
    <h1 id={id} className={styles.heading}>
      {children}
    </h1>
  );
};
