import { IInputBaseProps } from '../../interfaces';
import { StyledInput } from '../styled';

const TextInput: React.FC<IInputBaseProps> = ({
    placeholder,
    value,
    onChange,
    maxLength,
    type,
}) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        onChange(newValue);
    };

    return (
        <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            maxLength={maxLength}
        />
    );
};

export default TextInput;
