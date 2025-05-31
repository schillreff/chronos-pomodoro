import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'light';
    return storageTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const nextThemeIcon = {
    dark: <SunIcon aria-hidden='true' />,
    light: <MoonIcon aria-hidden='true' />,
  };

  return (
    <nav className={styles.menu} aria-label='Main menu'>
      <a className={styles.menuLink} href='/' aria-label='Home' title='Home'>
        <HouseIcon aria-hidden='true' />
      </a>
      <a
        className={styles.menuLink}
        href='/history'
        aria-label='History'
        title='History'>
        <HistoryIcon aria-hidden='true' />
      </a>
      <a
        className={styles.menuLink}
        href='/settings'
        aria-label='Settings'
        title='Settings'>
        <SettingsIcon aria-hidden='true' />
      </a>
      <button
        type='button'
        className={styles.menuLink}
        onClick={toggleTheme}
        aria-label='Toggle theme'
        title='Toggle theme'>
        {nextThemeIcon[theme]}
      </button>
    </nav>
  );
};
