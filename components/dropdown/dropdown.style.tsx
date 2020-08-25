import styled from 'styled-components';

export const ButtonGroup = styled.div`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    cursor: pointer;
`;

export const DropdownToggle = styled.button`
    position: relative;
    width: 200px;
    text-align: left;
    padding: ${({ theme }) => theme.spacing['space-xs']};
    background-color: ${({ theme }) => theme.color.color1};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};

    &::after {
        content: "";
        position: absolute;
        right: ${({ theme }) => theme.spacing['space-2xs']};
        top: 50%;
        transform: translateY(-50%);
        border-color: ${({ theme }) => theme.color.secondary} transparent;
        border-style: solid;
        border-width: 5px 5px 0px 5px;
        height: 0px;
        width: 0px;
    }
`;

export const DropdownMenu = styled.ul<{ show?: boolean }>`
    background-color: ${({ theme }) => theme.color.color1};
    margin-top: ${({ theme }) => theme.spacing['space-3xs']};    
    box-shadow: ${({ theme }) => theme.boxShadow};
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: ${({ show }) => show ? 'block' : 'none'};
    list-style: none;
    width: 100%;
    box-sizing: border-box;
`;

export const DropdownItem = styled.li`
    padding: ${({ theme }) => `${theme.spacing['space-xs']} ${theme.spacing['space-2xs']}`};

    &:hover {
        background-color: ${({ theme }) => theme.color.secondary};
        color: ${({ theme }) => theme.color.color1};
    }
`;