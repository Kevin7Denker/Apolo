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
    max-width: 80svw;
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
