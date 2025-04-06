import { ILayoutProps } from '../interfaces';
import { Container } from './styles';

const MainLayout = ({ children }: ILayoutProps) => (
    <Container>{children}</Container>
);

export default MainLayout;
