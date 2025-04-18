import QuantityMinus from '../../Icons/QuantityMinus';
import QuantityPlus from '../../Icons/QuantityPlus';
import {
    MinusButton,
    PlusButton,
    QuantityInput,
    QuantityWrapper,
} from './styles';

type QuantitySelectorProps = {
    value: number;
    onIncrease: () => void;
    onDecrease: () => void;
    min?: number;
    max?: number;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    value,
    onIncrease,
    onDecrease,
    min,
    max,
}) => {
    const canDecrease = min === undefined || value > min;
    const canIncrease = max === undefined || value < max;

    return (
        <QuantityWrapper>
            <MinusButton onClick={onDecrease} disabled={!canDecrease}>
                <QuantityMinus />
            </MinusButton>
            <QuantityInput type="text" value={value} readOnly />
            <PlusButton onClick={onIncrease} disabled={!canIncrease}>
                <QuantityPlus />
            </PlusButton>
        </QuantityWrapper>
    );
};

export default QuantitySelector;
