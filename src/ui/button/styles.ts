import styled from 'styled-components';

export const PrimaryButton = styled.button<{
    $variant?: 'primary' | 'secondary';
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 54px;
    padding: 12px;
    border: ${(props) =>
        props.$variant === 'secondary' ? '2px solid #00920C' : 'none'};
    font-size: 20px;
    color: ${(props) =>
        props.$variant === 'secondary' ? '#00920C' : '#ffffff'};
    background-color: ${(props) =>
        props.$variant === 'secondary' ? '#ffffff' : '#00920c'};
    transition: background-color 0.3s ease;
    border-radius: 8px;

    &:hover {
        background-color: ${(props) =>
            props.$variant === 'secondary' ? '#ececec' : '#058410'};
    }

    &:active {
        background-color: ${(props) =>
            props.$variant === 'secondary' ? '#f5f5f5' : '#0a9516'};
    }

    &:disabled {
        background-color: ${(props) =>
            props.$variant === 'secondary' ? '#9fa6ad' : '#59ba61'};
        cursor: not-allowed;
    }
`;
