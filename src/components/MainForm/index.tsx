import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import styles from './styles.module.css';

export const MainForm = () => {
  return (
    <form className={styles.form} action=''>
      <div className={styles.formRow}>
        <Input
          id='myInput'
          type='text'
          labelText='Task:'
          placeholder='Enter a task'
          aria-label='Task input'
        />
      </div>
      <div className={styles.formRow}>
        <p>Next break is in 25 minutes.</p>
      </div>
      <div className={styles.formRow}>
        <Cycles /> 
        <p>0 0 0 0 0 0 0</p>
      </div>
      <div className={styles.formRow}>
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};
