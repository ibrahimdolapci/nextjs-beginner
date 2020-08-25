import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;  
`;

export const ListItem = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 150px;
    margin: ${({theme}) => theme.spacing['space-xs']};
`;

export const CoverImage = styled.img`
    width: 150px;
    height: 200px;
    margin-bottom: ${({theme}) => theme.spacing['space-xs']};
`;