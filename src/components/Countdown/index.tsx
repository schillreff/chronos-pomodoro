import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export const Countdown = () => {
  const { state } = useTaskContext();

  return (
    <div className={styles.countdown}>{state.formattedSecondsRemaining}</div>
  );
};
