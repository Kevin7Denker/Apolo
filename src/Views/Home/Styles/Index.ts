import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  gap: 5%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

export const Button = styled.button`
  width: 30%;
  padding: 0.5rem;
  background-color: black;
  border: 1px solid purple;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  p {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: purple;
    color: white;
    transition: 0.5s ease-in-out;
  }
`;

export const Options = styled.div`
  position: absolute;
  right: 0;
  margin: 1.5rem 2rem;
  padding: 0.5rem 1rem;
  align-content: center;
  align-items: center;
  display: flex;
  background-color: black;
  transform: skew(-21deg);

  p {
    color: white;
    margin: 0.5rem;
    font-size: 1.5rem;
    transform: skew(21deg);
  }
`;

export const Credits = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1.5rem;
  background-color: black;
  padding: 0.5rem 1rem;

  p {
    color: white;
  }
`;
