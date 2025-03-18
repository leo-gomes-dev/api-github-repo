import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
`;	

export const Head = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: brown;
    color: white;
    font-family: 'Roboto', sans-serif;  
`;
    
export const Titulo = styled.h1`
    font-size: 35px;
    color: black;
    font-family: 'Roboto', sans-serif;
`;

export const H1 = styled.h1 `
    font-size: 35px;
    color: white;
    font-family: 'Roboto', sans-serif;
`;

export const Description = styled.span`
    color: black;
    font-size: ${props => `${props.tamanho}px`};
    color: ${props => `${props.cor}`};
    font-family: 'Roboto', sans-serif;
`;
