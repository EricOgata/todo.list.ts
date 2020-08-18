import React, { ReactElement } from 'react';
import { ColumnContainer, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';

import { useAppState } from './AppStateContext';

interface IColumnProps {
    id: string;
    text?: string;
    index: number;
}

const Column = ({ text, index, id }: IColumnProps): ReactElement => {
    const { state, dispatch } = useAppState();

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {state.lists[index].tasks.map((task) => (
                <Card text={task.text} key={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={(itemText) =>
                    dispatch({
                        type: 'ADD_TASK',
                        payload: {
                            text: itemText,
                            taskId: id,
                        },
                    })
                }
                dark
            />
        </ColumnContainer>
    );
};

export { Column };
