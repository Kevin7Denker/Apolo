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
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  width: 35svw;
  height: 100svh;
  padding: 5%;
  color: white;
  justify-content: center;
  gap: 2.5rem;

  @media (width <= 650px) {
    align-items: center;
    gap: 1.5rem;
    width: 100svw;
    backdrop-filter: blur(10px);
    background-color: transparent;
  }

  @media (width > 650px) and (width <= 900px) {
    align-items: center;
    gap: 1.5rem;
    width: 100svw;
    backdrop-filter: blur(10px);
    background-color: transparent;
  }
`;

export const MainTexts = styled.div`
  width: 100%;

  @media (width <= 650px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  @media (width > 650px) and (width <= 900px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: calc(2.5rem + 1vw);
  font-weight: bold;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: calc(1rem + 1vw);
  font-weight: bold;
  margin: 0;
`;

export const InputContainer = styled.div`
  position: relative;
  padding: 1.2rem 0 0;
  width: 80%;
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

  @media (width > 650px) and (width <= 900px) {
    align-items: center;
    width: 80svw;
    height: 50svh;
    justify-content: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background-color: black;
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

export const Button = styled.button`
  width: 25%;
  padding: 10px;
  margin-top: 20px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--primary-color-dark);
    transition: 0.3s ease-in-out;
    outline: none;
  }

  @media (width <= 650px) {
    width: 45%;
  }

  @media (width > 650px) and (width <= 900px) {
    width: 45%;
    padding: 1rem;
  }
`;

export const Options = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1.5rem 2rem;
  padding: 0.5rem 1rem;
  align-content: center;
  align-items: center;
  display: flex;
  background-color: black;
  transform: skew(-21deg);
  border-radius: 5px;

  p {
    color: white;
    margin: 0.5rem;
    font-size: 1.5rem;
    transform: skew(21deg);
  }

  @media (width <= 650px) {
    margin: 1.5rem 1rem;
    padding: 0.5rem;

    p {
      font-size: 1rem;
    }
  }

  @media (width > 650px) and (width <= 900px) {
    margin: 2rem 2rem;
    padding: 1rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const Credits = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1.5rem;
  background-color: black;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  p {
    color: white;
    text-align: justify;
    padding: 1rem;
  }

  @media (width <= 650px) {
    padding: 0;
    width: 90%;
    right: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 0 1rem;

    p {
      font-size: calc(0.5rem + 1vw);
      text-align: center;
    }
  }

  @media (width > 650px) and (width <= 900px) {
    padding: 0;
    width: 90%;
    right: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 0 1rem;

    p {
      font-size: calc(0.5rem + 1vw);
      text-align: center;
    }
  }
`;

export const Forgot = styled.p`
  margin-top: 0.5rem;
  display: flex;
  justify-content: end;
  transition: 1s ease-in-out;

  :hover {
    transition: 0.3s ease-in-out;
    color: var(--primary-color);
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  @media (width <= 650px) {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (width > 650px) and (width <= 900px) {
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

  @media (width > 650px) and (width <= 900px) {
    font-size: 1rem;
  }
`;

export const SubRegisterText = styled.div`
  font-size: 1rem;
  margin-left: 1%;

  @media (width <= 650px) {
    font-size: 0.8rem;
  }

  @media (width > 650px) and (width <= 900px) {
    font-size: 1rem;
  }
`;

export const SubText = styled.p`
  color: var(--primary-color);
`;
