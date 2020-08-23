import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  jusrify-content: center;
  background-color: ${({theme})=>theme.color.secondary};
  padding: ${({theme})=> theme.spacing['space-2xs']} 0;

  .row {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .column {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img``;
export const Actions = styled.div`
  margin-left: auto;  
`;
export const Button = styled.button<{ primary?: boolean }>`
  color: white;
  padding: ${props => props.theme.spacing['space-2xs']};
  background: ${props => props.primary ? props.theme.color.primary : 'transparent'};
`