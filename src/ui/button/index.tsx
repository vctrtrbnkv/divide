import { ReactNode } from 'react';

import { PrimaryButton } from './styles';

interface ButtonProps {
    children: ReactNode;
    icon?: ReactNode;
}

export const Button = ({ icon, children }: ButtonProps) => (
    <PrimaryButton>
        {icon}
        {children}
    </PrimaryButton>
);
