import { ILayoutProps } from '../interfaces';
import { Container } from './styles';

const HistoryCardLayout = ({ children }: ILayoutProps) => (
    <Container>{children}</Container>
);

export default HistoryCardLayout;
