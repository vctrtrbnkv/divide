import styled from 'styled-components';

export const GreyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    background-color: #f5f5f5;
    border-radius: 8px;
`;

export const FlexLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FlexRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const GuestName = styled.p`
    font-size: 18px;
    font-weight: 500;
`;

export const GuestPhoneNumber = styled.p`
    font-size: 14px;
    color: #433b3b;
`;

export const GuestTotal = styled.p`
    font-size: 16px;
`;
