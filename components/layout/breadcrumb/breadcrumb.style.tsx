import styled from "styled-components";
import { Row } from "../../grid";

export const Container = styled(Row)`
    display:flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.color8};
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.color1};
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.5), 0 6px 10px 0 rgba(0,0,0,.5), 0 1px 18px 0 rgba(0,0,0,.12);
`;