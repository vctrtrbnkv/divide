import { FC } from 'react';

import MiniLayout from '../../layouts/MiniLayout';
import { CompanyName, Heading, TotalAmount } from './styles';

const SplitInfo: FC<{
    date: string;
    companyName: string;
    totalAmount: number;
}> = ({
    date,
    companyName = 'Не удалось распознать название ресторана',
    totalAmount,
}) => {
    return (
        <MiniLayout>
            <Heading>Чек от {date}</Heading>
            <CompanyName>{companyName}</CompanyName>
            <TotalAmount>{totalAmount} руб.</TotalAmount>
        </MiniLayout>
    );
};

export default SplitInfo;
