import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    box-shadow: ${({ theme }) => theme.boxShadow};
    height: 40px;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 250px;
    padding: ${({ theme }) => theme.spacing['space-xs']};
    border: none;
`;

export const ButtonWithIcon = styled.button`
    height: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    border: none;
    color: ${({ theme }) => theme.color.color1};
`;