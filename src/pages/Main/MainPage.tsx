import { useEffect, useState } from 'react';

import HistoryCard from '../../components/HistoryCard';
import MainLayout from '../../layouts/MainLayout';
import MiniLayout from '../../layouts/MiniLayout';
import { Button } from '../../ui/button';
import Camera from '../../ui/Icons/Camera';
import Download from '../../ui/Icons/Download';
import { apiFetch } from '../../utils/api';

type History = {
    id: number;
    date: string;
    restaurant: string;
    total_amount: number;
}[];

const MainPage = () => {
    const [history, setHistory] = useState<History>([]);

    useEffect(() => {
        apiFetch('history').then((response) => {
            setHistory(response);
        });
    }, []);

    return (
        <MainLayout>
            <MiniLayout>
                <h2>Разделить счет</h2>
                <Button icon={<Camera />}>Сфтографировать чек</Button>
                <Button icon={<Download />}>Загрузить чек</Button>
            </MiniLayout>
            <MiniLayout>
                <h2>История</h2>
                {history.map(
                    ({
                        id,
                        date,
                        restaurant: restaurantName,
                        total_amount: totalAmount,
                    }) => (
                        <HistoryCard
                            key={id}
                            date={date}
                            restaurantName={restaurantName}
                            totalAmount={totalAmount}
                        />
                    )
                )}
            </MiniLayout>
        </MainLayout>
    );
};

export default MainPage;
