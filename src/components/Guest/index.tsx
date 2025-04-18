import { FC } from 'react';

import More from '../../ui/Icons/More';
import {
    FlexLeft,
    FlexRight,
    GreyContainer,
    GuestName,
    GuestPhoneNumber,
    GuestTotal,
} from './styles';

const Guest: FC<{ name: string; phone?: string; total: number }> = ({
    name,
    phone = 'Введите номер телефона',
    total,
}) => {
    return (
        <GreyContainer>
            <FlexLeft>
                <GuestName>{name}</GuestName>
                <GuestPhoneNumber>{phone}</GuestPhoneNumber>
            </FlexLeft>
            <FlexRight>
                <More />
                <GuestTotal>{total} руб.</GuestTotal>
            </FlexRight>
        </GreyContainer>
    );
};

export default Guest;
