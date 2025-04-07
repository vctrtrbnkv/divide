import { IRadioInputProps } from '../../interfaces';
import { StyledRadio } from '../styled';

const RadioInput: React.FC<IRadioInputProps> = ({
    type,
    id,
    name,
    value,
    checked,
    onChange,
}) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        onChange(newValue);
    };

    return (
        <StyledRadio
            type={type}
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
        />
    );
};

export default RadioInput;
