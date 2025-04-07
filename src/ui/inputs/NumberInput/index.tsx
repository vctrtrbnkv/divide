import { INumberInputProps } from '../../interfaces';
import { StyledInput } from '../styled';

const NumberInput: React.FC<INumberInputProps> = ({
    onChange,
    value,
    min,
    max,
    pattern,
}) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        onChange(newValue);
    };

    return (
        <StyledInput
            type="number"
            onChange={handleChange}
            value={value}
            min={min}
            max={max}
            inputMode="numeric"
            pattern={pattern}
        />
    );
};

export default NumberInput;
