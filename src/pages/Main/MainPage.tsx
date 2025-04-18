import { useNavigate } from 'react-router-dom';

import HistoryCard from '../../components/HistoryCard';
import UploadFileInput from '../../components/UploadFileInput';
import MainLayout from '../../layouts/MainLayout';
import MiniLayout from '../../layouts/MiniLayout';
import { useGetReceiptsQuery } from '../../redux/receiptsApi';
import { Paths } from '../../utils/constants';

const MainPage = () => {
    const { data: receipts, isLoading } = useGetReceiptsQuery();
    const navigate = useNavigate();

    const redirectPath = Paths.SplitSetup;

    if (isLoading) return <p>Загрузка...</p>;

    return (
        <MainLayout>
            <MiniLayout>
                <h2>Разделить счет</h2>
                <UploadFileInput
                    navigate={navigate}
                    redirectPath={redirectPath}
                />
            </MiniLayout>
            <MiniLayout>
                <h2>История</h2>
                {receipts?.map((receipt) => (
                    <HistoryCard
                        key={receipt.id}
                        id={receipt.id}
                        date={receipt.date}
                        restaurantName={receipt.companyName}
                        totalAmount={receipt.totalAmount}
                    />
                ))}
            </MiniLayout>
        </MainLayout>
    );
};

export default MainPage;
