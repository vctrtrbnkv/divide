import { useEffect, useState } from 'react';

import MiniLayout from '../../layouts/MiniLayout';
import { useGetReceiptByIdQuery } from '../../redux/receiptsApi';
import TextInput from '../../ui/inputs/TextInput';
import { StyledLabel } from './styles';

interface Props {
    receiptId: number;
    guestId?: number;
    onChangeGuestInfo?: (guest: { name: string; phone: string }) => void;
}

const GuestInfoEditor = ({ receiptId, guestId, onChangeGuestInfo }: Props) => {
    const { data: receipt } = useGetReceiptByIdQuery(receiptId);

    const [guestName, setGuestName] = useState('');
    const [guestPhone, setGuestPhone] = useState('');

    useEffect(() => {
        if (receipt) {
            const guest = receipt.guests.find((g) => g.id === guestId);
            if (guest) {
                setGuestName(guest.name || '');
                setGuestPhone(guest.phone || '');
            }
        }
    }, [receipt, guestId]);

    useEffect(() => {
        if (onChangeGuestInfo) {
            onChangeGuestInfo({ name: guestName, phone: guestPhone });
        }
    }, [guestName, guestPhone, onChangeGuestInfo]);

    return (
        <MiniLayout>
            <h1>Гость</h1>
            <StyledLabel>Введите имя</StyledLabel>
            <TextInput
                id="guest-name"
                type="text"
                value={guestName}
                onChange={setGuestName}
                maxLength={100}
            />
            <StyledLabel>Введите номер телефона</StyledLabel>
            <TextInput
                id="guest-phone"
                type="text"
                value={guestPhone}
                onChange={setGuestPhone}
                maxLength={100}
            />
        </MiniLayout>
    );
};

export default GuestInfoEditor;
