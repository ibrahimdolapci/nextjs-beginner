import styled from "styled-components";

// interface IColumnProps { [breakpoint: string]: string };

export const Row = styled.div`  
  &::after {
    content: "";
    clear: both;
    display: table;
}`;

function getWidth(span) {
    if (!span) return 100;

    return span / 12 * 100;
};

export const Column = styled.div<any>`  
    float:left;
    width: 100%;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
        width: ${({ sm }) => getWidth(sm)}%;
    }

    @media only screen and (min-width: 992px) {
        width: ${({ md }) => getWidth(md)}%;
    }

    @media only screen and (min-width: 1200px) {
        width: ${({ lg }) => getWidth(lg)}%;
    }
`;