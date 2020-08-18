import styled from 'styled-components';
import { colors, transparencyColors } from '../configs/colors';

interface IAddItemButtonProps {
    dark?: boolean;
}

export const AppContainer = styled.div`
    align-items: flex-start;
    background-color: ${colors.blue};
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 20px;
    width: 100%;
`;

export const ColumnContainer = styled.div`
    background-color: ${colors.gray};
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px;
    flex-grow: 0;
`;

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: 600;
`;

export const CardContainer = styled.div`
    background-color: ${colors.white};
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: ${transparencyColors.prussianBlue25} 0 1px 0 0;
`;

export const NewItemFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`;

export const AddItemButton = styled.button<IAddItemButtonProps>`
    background-color: ${transparencyColors.white25};
    border-radius: 3px;
    border: none;
    color: ${(props) => (props.dark ? colors.black : colors.white)};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;

    &:hover {
        background-color: ${transparencyColors.white35};
    }
`;

export const NewItemButton = styled.button`
    background-color: ${colors.green};
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: ${colors.white};
    padding: 6px 12px;
    text-align: center;
`;

export const NewItemInput = styled.input`
    border-radius: 3px;
    border: none;
    box-shadow: ${transparencyColors.prussianBlue25} 0 1px 0 0;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`;
