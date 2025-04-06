import styled from 'styled-components';

export const PrimaryButton = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 54px;
    padding: 12px;
    font-size: 20px;
    color: #fff;
    background-color: #00920c;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #058410;
    }

    &:active {
        background-color: #0a9516;
    }
`;
