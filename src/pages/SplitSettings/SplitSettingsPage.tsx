import { useParams } from 'react-router-dom';

import GuestsInfo from '../../components/GuestsInfo';
import SplitInfo from '../../components/SplitInfo';
import MainLayout from '../../layouts/MainLayout';
import { useGetReceiptByIdQuery } from '../../redux/receiptsApi';
import { Button } from '../../ui/Button';

const SplitSettingsPage = () => {
    const { id } = useParams();

    const { data: receipt } = useGetReceiptByIdQuery(Number(id));

    return (
        <MainLayout>
            <SplitInfo
                date={receipt?.date ?? ''}
                companyName={receipt?.companyName ?? ''}
                totalAmount={receipt?.totalAmount ?? 0}
            />
            {receipt && <GuestsInfo reciept={receipt} />}
            <Button>Запросить</Button>
            <Button>Поделиться</Button>
        </MainLayout>
    );
};

export default SplitSettingsPage;
