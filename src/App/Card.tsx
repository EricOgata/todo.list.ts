import React, { ReactElement } from 'react';
import { CardContainer } from './styles';

interface ICardProps {
    text?: string;
}

const Card = ({ text }: ICardProps): ReactElement => (
    <CardContainer>{text}</CardContainer>
);

export { Card };
