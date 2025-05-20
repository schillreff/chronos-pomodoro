import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export const App = () => {
  return (
    <Heading>
      "My App"{''}
      <button>
        <TimerIcon />
      </button>
    </Heading>
  );
};
