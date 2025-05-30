import type React from 'react';
import styles from './styles.module.css';

type GenericHtmlProps = {
  children: React.ReactNode;
};

export const GenericHtml = ({ children }: GenericHtmlProps) => {
  return <main className={styles.genericHtml}>{children}</main>;
};
