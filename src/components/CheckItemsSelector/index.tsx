import { FC } from 'react';

import MiniLayout from '../../layouts/MiniLayout';
import { ReceiptItem } from '../../redux/inerfaces';
import ReceiptItemCard from '../ReceiptItemCard';

interface IProps {
    guestItems?: Record<number, number>;
    items: ReceiptItem[];
    handleChange: (id: number, qty: number) => void;
}

const CheckItemsSelector: FC<IProps> = ({
    items,
    guestItems,
    handleChange,
}) => {
    return (
        <MiniLayout>
            <h1>Выберите позиции</h1>
            {items?.map((item) => (
                <ReceiptItemCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={guestItems?.[item.id] || 0}
                    maxQuantity={item.quantity}
                    unitPrice={item.unitPrice}
                    totalPrice={item.totalPrice}
                    onChange={handleChange}
                />
            ))}
        </MiniLayout>
    );
};

export default CheckItemsSelector;
