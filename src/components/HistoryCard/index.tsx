import HistoryCardLayout from '../../layouts/HistoryCardLayout';
import { DataInfo, RestaurantInfo, TotalInfo } from './styles';

interface IHistoryCardProps {
    date: string;
    restaurantName: string;
    totalAmount: number;
}

const HistoryCard = ({
    restaurantName,
    date,
    totalAmount,
}: IHistoryCardProps) => (
    <HistoryCardLayout>
        <RestaurantInfo>{restaurantName}</RestaurantInfo>
        <DataInfo>{date}</DataInfo>
        <TotalInfo>{totalAmount} руб.</TotalInfo>
    </HistoryCardLayout>
);

export default HistoryCard;
