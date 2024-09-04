import styled from "styled-components";

export const ContainerExemplo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  left: 5%;
  top: 5svh;
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  transform: translateY(0px);
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
  animation: fadeOut 1s;

  @keyframes fadeOut {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const SuccessMessage = styled.div`
  position: absolute;
  left: 5%;
  top: 5svh;
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;
  transform: translateY(0px);
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
  animation: fadeOut 1s;

  @keyframes fadeOut {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
