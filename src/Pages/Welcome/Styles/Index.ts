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
  width: 30svw;

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

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
