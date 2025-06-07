import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';

type TaskContextProps = {
  taskState: TaskStateModel;
  setTaskState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  taskState: initialTaskState,
  setTaskState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
