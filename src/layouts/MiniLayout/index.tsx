import { ReactNode } from 'react';

import { Container } from './styles';

interface MiniLayoutProps {
    children: ReactNode;
}

const MiniLayout = ({ children }: MiniLayoutProps) => (
    <Container>{children}</Container>
);

export default MiniLayout;
