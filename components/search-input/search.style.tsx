import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    box-shadow: ${({ theme }) => theme.boxShadow};
    height: 40px;
`;

export const Input = styled.input`
    padding: ${({ theme }) => theme.spacing['space-xs']};
    border: none;
`;

export const ButtonWithIcon = styled.button`
    height: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    align-item: center;
    justify-content: center;
`;