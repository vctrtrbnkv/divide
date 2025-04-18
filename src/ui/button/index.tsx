import { IButtonProps } from '../interfaces';
import { PrimaryButton } from './styles';

export const Button = ({
    icon,
    children,
    onClick,
    disabled,
    variant = 'primary',
}: IButtonProps) => (
    <PrimaryButton onClick={onClick} disabled={disabled} $variant={variant}>
        {icon}
        {children}
    </PrimaryButton>
);
