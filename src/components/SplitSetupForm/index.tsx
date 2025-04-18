import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavigateFunction } from 'react-router-dom';

import MiniLayout from '../../layouts/MiniLayout';
import { TGuests } from '../../redux/inerfaces';
import {
    useGetReceiptByIdQuery,
    useUpdateReceiptMutation,
} from '../../redux/receiptsApi';
import { Button } from '../../ui/Button';
import NumberInput from '../../ui/inputs/NumberInput';
import RadioInput from '../../ui/inputs/RadioInput';
import {
    StyledFieldset,
    StyledForm,
    StyledLabel,
    StyledLegend,
} from './styles';

interface IDataForm {
    selected: string;
    value: string;
}

interface ISplitSetupFieldProps {
    navigate: NavigateFunction;
    redirectPath: string;
}

const SplitSetupField = ({ navigate, redirectPath }: ISplitSetupFieldProps) => {
    const [form, setForm] = useState<IDataForm>({
        selected: 'equal',
        value: '2',
    });

    const { id } = useParams();
    const receiptId = Number(id);

    const { data: receipt } = useGetReceiptByIdQuery(receiptId);

    const [updateSplit] = useUpdateReceiptMutation();

    const handleSelectChange = (value: string) => {
        setForm((prev) => ({ ...prev, selected: value }));
    };

    const handleValueChange = (value: string) => {
        setForm((prev) => ({ ...prev, value: value }));
    };

    const generateGuestsArray = (): TGuests => {
        return Array.from({ length: Number(form.value) }, (_, i) => ({
            id: i + 1,
            name: `Гость ${i + 1}`,
            amountOwed: receipt?.totalAmount
                ? Number((receipt?.totalAmount / Number(form.value)).toFixed(2))
                : 0,
        }));
    };

    const handleSubmit = async () => {
        if (!receiptId) return;

        try {
            await updateSplit({
                id: receiptId,
                guests: form.selected === 'equal' ? generateGuestsArray() : [],
            }).unwrap();

            console.log('Данные успешно отправлены ✅');
            navigate(`${redirectPath}/${receiptId}`);
        } catch (err) {
            console.error('Ошибка при отправке:', err);
        }
    };

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <MiniLayout>
                <h2>Способ деления</h2>
                <StyledFieldset>
                    <StyledLegend>
                        Выберите подходящий метод деления
                    </StyledLegend>

                    <StyledLabel htmlFor="split-equal">
                        <RadioInput
                            type="radio"
                            id="split-equal"
                            name="split"
                            value="equal"
                            checked={form.selected === 'equal'}
                            onChange={handleSelectChange}
                        />
                        Поровну
                    </StyledLabel>

                    <StyledLabel htmlFor="split-personal">
                        <RadioInput
                            type="radio"
                            id="split-personal"
                            name="split"
                            value="personal"
                            checked={form.selected === 'personal'}
                            onChange={handleSelectChange}
                        />
                        Персонально
                    </StyledLabel>

                    <StyledLabel htmlFor="split-manual">
                        <RadioInput
                            type="radio"
                            id="split-manual"
                            name="split"
                            value="manual"
                            checked={form.selected === 'manual'}
                            onChange={handleSelectChange}
                        />
                        Ввести вручную
                    </StyledLabel>
                </StyledFieldset>
            </MiniLayout>
            {form.selected === 'equal' && (
                <MiniLayout>
                    <h2>Количество гостей</h2>
                    <label htmlFor="split-count">
                        Введите количество гостей
                    </label>
                    <NumberInput
                        id="split-count"
                        min={1}
                        max={30}
                        type={'number'}
                        value={form.value}
                        onChange={handleValueChange}
                        inputMode="numeric"
                        pattern="[0-9]*"
                    />
                </MiniLayout>
            )}
            <Button
                disabled={Number(form.value) < 1 || Number(form.value) > 30}
            >
                Продолжить
            </Button>
        </StyledForm>
    );
};

export default SplitSetupField;
