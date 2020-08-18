import React, { useReducer, ReactElement } from 'react';

type Action =
    | {
          type: 'increment';
      }
    | {
          type: 'decrement';
      };

interface State {
    count: number;
}

const counterReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('');
    }
};

const CounterExemple = (): ReactElement => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
};

export { CounterExemple };
