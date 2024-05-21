import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100svw;
  height: 100svh;
`;

export const Container = styled.div`
  width: 30svw;
  height: 65svh;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 2rem;
`;

export const IntroTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const IntroTitle = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`;

export const IntroSubtitle = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  color: silver;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  @media (width <= 650px) {
    align-items: center;
    width: 100svw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background-color: black;
  }
`;

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  position: relative;
  padding: 1.2rem 0 0;
  width: 80%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 1px solid white;
  outline: 0;

  font-size: var(1.2rem + 1vw);
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.5s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: var(1.2rem + 1vw);
    cursor: text;
    top: 20px;
  }

  &:focus {
    padding-bottom: 6px;
    border-width: 2px;
    border-image: linear-gradient(
      to right,
      var(--primary-color-dark),
      var(--primary-color-light)
    );
    border-image-slice: 1;
  }

  &:focus ~ label {
    top: 0;
    font-size: var(1.2rem + 1vw);
    color: var(--primary-color-dark);
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: var(1.2rem + 1vw);
  color: white;
  pointer-events: none;
`;

export const Submit = styled.button`
  width: 30%;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 5px;
  background-color: var(--primary-color);
  border: none;
  font-size: 1rem;
`;

export const RegisterContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media (width <= 650px) {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const MainRegisterText = styled.p`
  font-size: 1rem;

  @media (width <= 650px) {
    font-size: 0.8rem;
  }
`;

export const SubRegisterText = styled.div`
  font-size: 1rem;
  margin-left: 1%;

  @media (width <= 650px) {
    font-size: 0.8rem;
  }
`;

export const SubText = styled.p`
  color: var(--primary-color);
`;