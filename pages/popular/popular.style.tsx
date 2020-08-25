import styled from "styled-components";
import { Row, Column } from "../../components/grid";

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
        flex-direction: column;
    }

    .list {
        margin-top: ${({ theme }) => theme.spacing['space-lg']};
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .search-input {
        margin-right: auto;
    }
`;

export const Progress = styled.div`
    margin-top: ${({ theme }) => theme.spacing['space-lg']};
    padding-top: ${({ theme }) => theme.spacing['space-lg']};
`;