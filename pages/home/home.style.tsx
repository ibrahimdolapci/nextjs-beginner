import styled from 'styled-components';
import { Row, Column } from '../../components/grid';

export const Main = styled.main`
    display: flex;
    margin-top: ${({ theme }) => theme.spacing['space-lg']};

    ${Row} {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    ${Column} {
        display: flex;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        margin: ${({theme}) => theme.spacing['space']};

        span {
            margin-top: ${({theme}) => theme.spacing['space-xs']}
        }
    }
`;

export const Cover = styled.div`
    width: 150px;
    height: 200px;
    background-image: url('/images/placeholder.png');
    background-color: ${({ theme }) => theme.color.color8};
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.color1};
    font-size: 2rem;
    font-weight: 500;
`;