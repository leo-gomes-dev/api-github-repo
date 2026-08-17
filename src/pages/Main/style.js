import styled, { keyframes, css } from "styled-components";

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #0b0f19; /* Fundo escuro deep tech */
`;

export const Container = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 35px;
  background-color: #111827; /* Fundo do card em tom grafite escuro */
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 255, 135, 0.05); /* Sombra neon suave */
  border: 1px solid #1f2937;

  h1 {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #00ff87; /* Verde tecnológico pro título principal */

    svg {
      margin-right: 14px;
    }
  }
`;

export const InstructionsContainer = styled.div`
  margin-top: 20px;
  background-color: #1f2937;
  border: 1px solid #374151;
  padding: 18px;
  border-radius: 8px;

  p {
    font-size: 13.5px;
    color: #9ca3af;
    margin-bottom: 12px;
    line-height: 1.6;

    strong {
      color: #00ff87; /* Destaques em verde dentro do texto */
    }
  }
`;

export const ExamplesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TagExample = styled.button.attrs({
  type: "button",
})`
  background-color: #374151;
  color: #9ca3af;
  border: 1px solid #4b5563;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #00ff87;
    color: #0b0f19;
    border-color: #00ff87;
    box-shadow: 0 0 10px rgba(0, 255, 135, 0.3);
  }
`;

export const Form = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    flex: 1;
    background-color: #1f2937;
    border: 1px solid ${(props) => (props.$error ? "#ef4444" : "#4b5563")};
    padding: 14px 18px;
    border-radius: 8px;
    font-size: 16px;
    color: #f3f4f6;
    transition: all 0.2s;

    &::placeholder {
      color: #6b7280;
    }

    &:focus {
      border-color: #00ff87;
      box-shadow: 0 0 8px rgba(0, 255, 135, 0.2);
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 25px;

  li {
    padding: 16px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #1f2937;

    span {
      display: flex;
      align-items: center;
      font-weight: 500;
      color: #e5e7eb;
      font-size: 15px;
    }

    a {
      color: #00ff87;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
        text-shadow: 0 0 8px rgba(0, 255, 135, 0.5);
      }
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: !!props.loading,
}))`
  background-color: #00ff87;
  color: #0b0f19;
  font-weight: bold;
  border: 0;
  border-radius: 8px;
  margin-left: 10px;
  padding: 16px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover:not([disabled]) {
    box-shadow: 0 0 15px rgba(0, 255, 135, 0.4);
    opacity: 0.9;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
    background-color: #4b5563;
    color: #9ca3af;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotateAnimation} 1s linear infinite;
      }
    `}
`;

export const DeleteButton = styled.button.attrs({
  type: "button",
})`
  background-color: transparent;
  color: #ef4444;
  border: 0;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #f87171;
  }
`;

export const FooterContainer = styled.footer`
  margin-top: 30px;
  text-align: center;
  color: #4b5563;
  font-size: 13px;

  p {
    margin-bottom: 12px;
  }

  a {
    color: #9ca3af;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: #00ff87;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  a {
    color: #4b5563;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #00ff87;
      transform: translateY(-2px);
    }
  }
`;
