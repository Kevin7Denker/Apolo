import { ErrorContainer, FooterContainer, MainContainer } from "./Styles/Index";
import disco from "../../Assets/Common/discoError.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <MainContainer>
      <ErrorContainer>
        <img src={disco} />
      </ErrorContainer>
      <FooterContainer>
        <h1>Error 404</h1>
        <p>Page not found</p>
        <button onClick={handleBack}>Back</button>
      </FooterContainer>
    </MainContainer>
  );
};

export default Error;
