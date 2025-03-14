import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100svh;
  width: 100svw;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7b2cbf;
  height: 35%;
  position: relative;
  width: 100svw;

  img {
    position: absolute;
    width: 20svw;
    bottom: -20svh;
    border-radius: 100%;
    background-color: #7b2cbf;

    @media (max-width: 768px) {
      width: 30svw;
      bottom: -15svh;
    }

    @media (max-width: 425px) {
      width: 40svw;
      bottom: -10svh;
    }

    @media (max-width: 320px) {
      width: 50svw;
      bottom: -5svh;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 65%;

  h1 {
    margin-top: 10rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 2.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
  }

  button{
    margin-top: 2rem;
    background-color: #7b2cbf;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor
  }
`;
