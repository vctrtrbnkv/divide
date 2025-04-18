import styled from 'styled-components';

export const GreyContainer = styled.div`
    display: flex;
    gap: 12px;
    padding: 12px;
    background-color: #f5f5f5;
    border-radius: 8px;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const FlexTop = styled.div`
    display: flex;
`;

export const FlexBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const PositionName = styled.p`
    font-size: 16px;
`;

export const PositionTotal = styled.div`
    font-size: 20px;
    font-weight: 600;
`;
