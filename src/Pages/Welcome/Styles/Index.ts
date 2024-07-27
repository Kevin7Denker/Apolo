import styled from "styled-components";

export const Modal = styled.div`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  background: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(5, 5, 5);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 30svw;

  @media (width <= 650px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 70svw;
  }

  @media (width > 650px) and (width <= 900px) {
    max-width: 50svw;
  }
`;

export const Title = styled.h1``;

export const Subtitle = styled.h2`
  font-weight: 600;
`;

export const Text = styled.p`
  @media (width <= 650px) {
    text-align: justify;
  }
`;

export const ListStyle = styled.div`
  max-height: 200px;
  overflow-y: scroll;

  ul {
    cursor: pointer;

    :hover {
      background-color: rgb(25, 25, 25);
    }
  }

  li {
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;

    &.selected {
      background-color: rgb(35, 35, 35);
    }

    :focus {
      background-color: rgb(25, 25, 25);
    }
  }

  @media (width <= 650px) {
    li {
      padding: 5px;
    }
  }

  @media (width > 650px) and (width <= 900px) {
    max-width: 50svw;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Submit = styled.button`
  background-color: ${(props) =>
    props.disabled ? "rgb(45,45,45)" : "var(--primary-color)"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  max-width: 30%;
  padding: 0.8rem;
  margin-top: 2rem;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgb(65,65,65)" : "var(--primary-color-dark)"};
    transition: 0.5s;
  }
`;

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (width <= 650px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  padding: 1.2rem 0 0;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 1px solid white;
  outline: 0;

  font-size: 0.8rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.5s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1rem;
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
    font-size: 1rem;
    color: var(--primary-color-dark);
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }

  @media (width <= 650px) {
    font-size: 0.8rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: white;
  pointer-events: none;

  @media (width <= 650px) {
    font-size: 0.8rem;
  }
`;

export const WelcomeSubmits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
