import styled, { css } from "styled-components";

export const Container = styled.header``;
export const Logo = styled.img``;
export const Actions = styled.div``;
export const Button = styled.button<{ primary?: boolean }>`
  background: transparent;

  ${props =>
        props.primary &&
        css`
      background: palevioletred;
      color: white;
    `};
`