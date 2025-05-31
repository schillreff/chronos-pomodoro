import { TaskContextProvider } from './contexts/TaskContext';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
};
