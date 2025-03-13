import { Riple } from "react-loading-indicators";
import { LoadingContainer } from "./Styles/Index";

const Loading = () => {
  return (
    <LoadingContainer>
      <Riple color="#7b2cbf" size="large" text="" textColor="" />
      <h1>Loading</h1>
    </LoadingContainer>
  );
};

export default Loading;
