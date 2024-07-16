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
`;

export const ListStyle = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Submit = styled.button`
  width: 30%;
  padding: 0.8rem;
  margin-top: 2rem;
  border-radius: 5px;
  background-color: var(--primary-color);
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: var(--primary-color-dark);
    transition: 0.5s;
  }
`;
