import { ICheckboxInputProps } from '../../interfaces';
import { StyledCheckbox } from '../styled';

const CheckboxInput: React.FC<ICheckboxInputProps> = ({
    id,
    name,
    value,
    checked,
    onChange,
}) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newChecked = e.currentTarget.checked;
        onChange(newChecked);
    };

    return (
        <StyledCheckbox
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
        />
    );
};

export default CheckboxInput;
