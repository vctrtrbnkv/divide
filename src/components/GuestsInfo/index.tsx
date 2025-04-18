import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import MiniLayout from '../../layouts/MiniLayout';
import { IReceipt } from '../../redux/inerfaces';
import { Button } from '../../ui/Button';
import Add from '../../ui/Icons/Add';
import Guest from '../Guest';

type GuestsInfoProps = {
    reciept: IReceipt;
};

const GuestsInfo: FC<GuestsInfoProps> = ({ reciept }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/guest-create', {
            state: { items: reciept.items, receiptId: reciept.id },
        });
    };

    return (
        <MiniLayout>
            <Button variant="secondary" icon={<Add />} onClick={handleClick}>
                Добавить гостя
            </Button>
            {reciept?.guests?.map((guest) => (
                <Guest
                    key={guest.id}
                    name={guest.name}
                    phone={guest.phone}
                    total={guest.amountOwed || 0}
                />
            ))}
        </MiniLayout>
    );
};

export default GuestsInfo;
