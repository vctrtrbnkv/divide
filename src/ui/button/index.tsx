import { IButtonProps } from '../interfaces';
import { PrimaryButton } from './styles';

export const Button = ({ icon, children, onClick, disabled }: IButtonProps) => (
    <PrimaryButton onClick={onClick} disabled={disabled}>
        {icon}
        {children}
    </PrimaryButton>
);
