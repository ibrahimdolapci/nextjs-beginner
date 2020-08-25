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
    }
`;