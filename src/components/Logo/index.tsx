import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <a
        className={styles.logoLink}
        href='/'
        aria-label='Go to home page - Chronos Pomodoro timer'>
        <TimerIcon aria-hidden='true' />
        <span>Chronos</span>
      </a>
    </h1>
  );
};
