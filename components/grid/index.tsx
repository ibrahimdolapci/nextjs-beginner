import styled from "styled-components";

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`;

function getWidth(span) {
    if (!span) return 100;

    return span / 12 * 100;
};

export const Column = styled.div<{ children } & { [span: string]: number }>`
    float:left;
    width: 100%;

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