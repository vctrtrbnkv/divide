import { FC, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import CheckItemsSelector from '../../components/CheckItemsSelector';
import GuestInfoEditor from '../../components/GuestInfoEditor';
import MainLayout from '../../layouts/MainLayout';
import {
    useGetReceiptByIdQuery,
    useUpdateReceiptMutation,
} from '../../redux/receiptsApi';
import { Button } from '../../ui/Button';

const GuestEditPage: FC = () => {
    const { id, guestId } = useParams<{ id: string; guestId: string }>();
    const receiptId = Number(id);
    const guestIdNumber = Number(guestId);

    const [guestInfo, setGuestInfo] = useState<{
        name: string;
        phone: string;
        items?: Record<number, number>;
    }>({
        name: '',
        phone: '',
        items: {},
    });

    const { data: receipt } = useGetReceiptByIdQuery(receiptId);
    const [updateReceipt] = useUpdateReceiptMutation();

    const location = useLocation();
    const { items: itemsFromLocation, receiptId: receiptIdFromLocation } =
        location.state || {};

    const items = itemsFromLocation ?? receipt?.items ?? [];
    const receiptIdFromState = receiptIdFromLocation ?? receiptId;

    const handleSave = async () => {
        if (!receipt) return;

        try {
            const updatedGuests = receipt.guests.map((g) =>
                g.id === guestIdNumber ? { ...g, ...guestInfo } : g
            );

            const response = await updateReceipt({
                id: receipt.id,
                guests: updatedGuests,
            }).unwrap();

            console.log('Обновление успешно:', response);
        } catch (error) {
            console.error('Ошибка обновления:', error);
        }
    };

    const handleGuestItemsChange = (id: number, qty: number) => {
        setGuestInfo({
            ...guestInfo,
            items: {
                ...guestInfo.items,
                [id]: qty,
            },
        });
    };

    return (
        <MainLayout>
            <GuestInfoEditor
                receiptId={receiptIdFromState}
                guestId={guestIdNumber}
                onChangeGuestInfo={setGuestInfo}
            />
            <CheckItemsSelector
                guestItems={guestInfo?.items}
                items={items}
                handleChange={handleGuestItemsChange}
            />
            <Button onClick={handleSave}>Сохранить</Button>
        </MainLayout>
    );
};

export default GuestEditPage;
