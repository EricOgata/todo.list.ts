import React, { useState, ReactElement } from 'react';
import { useFocus } from '../utils/useFocus';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';

interface INewItemFormProps {
    onAdd(text: string): void;
}

const NewItemForm = (props: INewItemFormProps): ReactElement => {
    const { onAdd } = props;
    const [text, setText] = useState('');
    const inputRef = useFocus();

    return (
        <NewItemFormContainer>
            <NewItemInput
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
        </NewItemFormContainer>
    );
};

export { NewItemForm };
