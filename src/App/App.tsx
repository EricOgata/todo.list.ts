import React, { ReactElement } from 'react';
import { AppContainer } from './styles';
import { Column } from './Column';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';

const App = (): ReactElement => {
    const { state, dispatch } = useAppState();
    return (
        <AppContainer>
            {state.lists.map((list, i) => (
                <Column id={list.id} text={list.text} key={list.id} index={i} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
            />
        </AppContainer>
    );
};

export { App };
