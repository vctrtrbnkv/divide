import { useEffect, useState } from 'react';

import HistoryCard from '../../components/HistoryCard';
import UploadFileInput from '../../components/UploadFileInput';
import MainLayout from '../../layouts/MainLayout';
import MiniLayout from '../../layouts/MiniLayout';
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
                <UploadFileInput />
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
