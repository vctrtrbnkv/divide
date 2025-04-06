import { ReactNode } from 'react';

import { Container } from './styles';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
    <Container>{children}</Container>
);

export default MainLayout;
