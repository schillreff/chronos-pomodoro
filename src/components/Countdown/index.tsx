import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

export const Countdown = () => {
  const { taskState } = useTaskContext();

  return (
    <div className={styles.countdown}>
      {taskState.formattedSecondsRemaining}
    </div>
  );
};
