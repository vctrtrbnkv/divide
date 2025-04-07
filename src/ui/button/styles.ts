import styled from 'styled-components';

export const PrimaryButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 54px;
    padding: 12px;
    font-size: 20px;
    color: #fff;
    background-color: #00920c;
    transition: background-color 0.3s ease;
    border-radius: 8px;

    &:hover {
        background-color: #058410;
    }

    &:active {
        background-color: #0a9516;
    }

    &:disabled {
        background-color: #59ba61;
        cursor: not-allowed;
    }
`;
