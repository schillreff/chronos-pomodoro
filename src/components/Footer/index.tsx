import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='/about-pomodoro'
        rel='noopener noreferrer'
        aria-label='Learn more about the Pomodoro Technique.'>
        Learn how the Pomodoro Technique works
      </a>

      <a
        href='https://github.com/schillreff/chronos-pomodoro'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chronos Pomodoro project repository on GitHub. Opens in a new tab.'>
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
};
