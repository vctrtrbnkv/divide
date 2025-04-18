import { useNavigate } from 'react-router-dom';

import HistoryCardLayout from '../../layouts/HistoryCardLayout';
import { DataInfo, RestaurantInfo, TotalInfo } from './styles';

interface IHistoryCardProps {
    id: number;
    date: string;
    restaurantName: string;
    totalAmount: number;
}

const HistoryCard = ({
    id,
    restaurantName,
    date,
    totalAmount,
}: IHistoryCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/split-settings/${id}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    };

    return (
        <div
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
        >
            <HistoryCardLayout>
                <RestaurantInfo>{restaurantName}</RestaurantInfo>
                <DataInfo>{date}</DataInfo>
                <TotalInfo>{totalAmount} руб.</TotalInfo>
            </HistoryCardLayout>
        </div>
    );
};

export default HistoryCard;
