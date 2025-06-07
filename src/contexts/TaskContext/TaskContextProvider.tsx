import { useMemo, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [taskState, setTaskState] = useState(initialTaskState);
  const value = useMemo(() => ({ taskState, setTaskState }), [taskState]);
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
