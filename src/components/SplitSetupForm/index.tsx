import { useState } from 'react';

import MiniLayout from '../../layouts/MiniLayout';
import { PrimaryButton } from '../../ui/button/styles';
import NumberInput from '../../ui/inputs/NumberInput';
import RadioInput from '../../ui/inputs/RadioInput';
import { StyledFieldset, StyledLabel, StyledLegend } from './styles';

interface IDataForm {
    selected: string;
    value: string;
}

const SplitSetupField = () => {
    const [form, setForm] = useState<IDataForm>({
        selected: 'equal',
        value: '2',
    });

    const handleSelectChange = (value: string) => {
        setForm((prev) => ({ ...prev, selected: value }));
    };

    const handleValueChange = (value: string) => {
        setForm((prev) => ({ ...prev, value: value }));
    };

    return (
        <>
            <MiniLayout>
                <h2>Способ деления</h2>
                <StyledFieldset>
                    <StyledLegend>
                        Выберете подходящий метод деления
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
            <MiniLayout>
                <h2>Количество гостей</h2>
                <label htmlFor="split-count">Введите количество гостей</label>
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
            <PrimaryButton
                disabled={Number(form.value) < 1 || Number(form.value) > 30}
            >
                Продолжить
            </PrimaryButton>
        </>
    );
};

export default SplitSetupField;
