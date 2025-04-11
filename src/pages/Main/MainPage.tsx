import HistoryCard from '../../components/HistoryCard';
import UploadFileInput from '../../components/UploadFileInput';
import MainLayout from '../../layouts/MainLayout';
import MiniLayout from '../../layouts/MiniLayout';
import { useGetReceiptsQuery } from '../../redux/receiptsApi';

const MainPage = () => {
    const { data: receipts, isLoading } = useGetReceiptsQuery();

    if (isLoading) return <p>Загрузка...</p>;

    return (
        <MainLayout>
            <MiniLayout>
                <h2>Разделить счет</h2>
                <UploadFileInput />
            </MiniLayout>
            <MiniLayout>
                <h2>История</h2>
                {receipts?.map((receipt) => (
                    <HistoryCard
                        key={receipt.id}
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
