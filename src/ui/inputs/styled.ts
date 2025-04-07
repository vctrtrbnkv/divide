import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 8px 20px;
    border: none;
    font-size: 16px;
    background-color: #f1f1f1;
    border-radius: 8px;

    &:focus-visible {
        outline: 2px solid #00920c;
    }
`;

export const StyledRadio = styled.input`
    accent-color: #00920c;
    width: 27px;
    height: 27px;
`;
