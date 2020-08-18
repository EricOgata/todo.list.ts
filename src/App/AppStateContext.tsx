import React, {
    createContext,
    ReactElement,
    useContext,
    useReducer,
} from 'react';
import { v1 as uuid } from 'uuid';
import { findItemIndexById } from '../utils/findItemIndexById';

interface Task {
    id: string;
    text: string;
}

interface List {
    id: string;
    text: string;
    tasks: Task[];
}

export interface AppState {
    lists: List[];
}

type Action =
    | {
          type: 'ADD_LIST';
          payload: string;
      }
    | {
          type: 'ADD_TASK';
          payload: { text: string; taskId: string };
      };

interface IAppStateContextProps {
    state: AppState;
    dispatch: React.Dispatch<Action>;
}

const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'To Do',
            tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [
                { id: 'c2', text: 'Learn TypeScript' },
                { id: 'c1', text: 'Start a Trello Project' },
            ],
        },
        {
            id: '2',
            text: 'Done',
            tasks: [{ id: 'c3', text: 'Begin with static typing' }],
        },
    ],
};

const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case 'ADD_TASK': {
            const targetLaneIndex = findItemIndexById(
                state.lists,
                action.payload.taskId,
            );
            state.lists[targetLaneIndex].tasks.push({
                id: uuid(),
                text: action.payload.text,
            });
            return { ...state };
        }
        case 'ADD_LIST': {
            return {
                ...state,
                lists: [
                    ...state.lists,
                    { id: uuid(), text: action.payload, tasks: [] },
                ],
            };
        }
        default: {
            return { ...state };
        }
    }
};

const AppStateContext = createContext<IAppStateContextProps>(
    {} as IAppStateContextProps,
);

const AppStateProvider = ({
    children,
}: // eslint-disable-next-line @typescript-eslint/ban-types
React.PropsWithChildren<{}>): ReactElement => {
    const [state, dispatch] = useReducer(appStateReducer, appData);

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};

const useAppState = (): IAppStateContextProps => {
    return useContext(AppStateContext);
};

export { AppStateProvider, useAppState };
