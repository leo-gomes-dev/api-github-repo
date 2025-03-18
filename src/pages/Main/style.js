import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div` 
    max-width: 500px;
    padding: 30px;
    margin: 80px auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 4px;

    h1{
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        
        svg{
            margin-right: 10px;
        }
    }
`;	

export const Form = styled.form`
    margin-top: 30px;
    display: flex;  
    flex-direction: row;
    align-items: center;
    
    input{
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li{
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li{
            border-top: 1px solid #eee;
        }
        a{
            color: #0D2636;
            text-decoration: none;
            font-size: 16px;
        }
    }
`;

// Animação do botão

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs( props =>({
    type: 'submit', 
    disabled: props.loading,
}))`
    background-color: #0D2636;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 15px 15px;
    display: flex;  
    justify-content: center;
    align-items: center;


    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading &&
        css`
            svg{
                animation: ${animate} 2s linear infinite;
            }
        `
    }   
`;

export const DeleteButon = styled.button.attrs({
    type: 'button'
})`
    background-color: transparent;
    color: #0D2336;
    border: 0;
    border-radius: 4px;
    padding: 8px 7px;
    outline: 0;
`;