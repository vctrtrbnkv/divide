import styled from 'styled-components';

export const QuantityWrapper = styled.div`
    display: inline-flex;
    border-radius: 8px;
    background-color: #fff;
`;

const BaseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: 0;

    & > svg {
        transition: stroke 0.3s;
        stroke: #1a1a1a;
        stroke-width: 1;
    }

    &:hover > svg {
        stroke: #00920c;
    }

    &:disabled > svg {
        stroke: #ccc;
        cursor: not-allowed;
    }
`;

export const MinusButton = styled(BaseButton)``;
export const PlusButton = styled(BaseButton)``;

export const QuantityInput = styled.input`
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    text-align: center;
    background: transparent;
    outline: 0;
`;
