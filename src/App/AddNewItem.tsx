import React, { ReactElement, useState } from 'react';
import { AddItemButton } from './styles';
import { NewItemForm } from './NewItemForm';

interface IAddNewItemProps {
    onAdd(text: string): void;
    toggleButtonText: string;
    dark?: boolean;
}

const AddNewItem = (props: IAddNewItemProps): ReactElement => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;

    if (showForm) {
        return (
            <NewItemForm
                onAdd={(text) => {
                    onAdd(text);
                    setShowForm(false);
                }}
            />
        );
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    );
};

export { AddNewItem };
