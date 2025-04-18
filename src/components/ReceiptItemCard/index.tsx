import { FC, useState } from 'react';

import { ReceiptItem } from '../../redux/inerfaces';
import CheckboxInput from '../../ui/inputs/CheckboxInput';
import QuantitySelector from '../../ui/inputs/QuantitySelector';
import {
    FlexBottom,
    FlexContainer,
    FlexTop,
    GreyContainer,
    PositionName,
    PositionTotal,
} from './styles';

const ReceiptItemCard: FC<
    ReceiptItem & {
        maxQuantity: number;
        onChange: (id: number, qty: number) => void;
    }
> = ({ id, name, quantity, maxQuantity, unitPrice, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    const handleIncrease = () => {
        onChange(id, quantity + 1);
    };

    const handleDecrease = () => {
        onChange(id, Math.max(1, quantity - 1));
    };

    return (
        <GreyContainer>
            <CheckboxInput
                id={`item-${id}`}
                name="item"
                value={`item-${id}`}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <FlexContainer>
                <FlexTop>
                    <PositionName>{name}</PositionName>
                </FlexTop>
                <FlexBottom>
                    <QuantitySelector
                        value={quantity}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        min={1}
                        max={maxQuantity}
                    />
                    <PositionTotal>{unitPrice * quantity}</PositionTotal>
                </FlexBottom>
            </FlexContainer>
        </GreyContainer>
    );
};

export default ReceiptItemCard;
