import BackgroundHome from "../../Components/backgroundHome";

import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Content,
  Credits,
  Options,
  Title,
} from "./Styles/Index";

const Home = () => {
  return (
    <>
      <BackgroundHome />
      <Content>
        <Container>
          <Title>Apolo</Title>
          <Button>
            <Link to={"/SignIn"}>
              <p>SignIn</p>{" "}
            </Link>
          </Button>
          <Button>
            <Link to={"/SignUp"}>
              <p>SignUp</p>
            </Link>
          </Button>
        </Container>
        <Options>
          <p>A</p>
          <p>B</p>
          <p>C</p>
        </Options>
        <Credits>
          <p>Copyright © 2024 Kevin Denker. Todos os direitos reservados.</p>
        </Credits>
      </Content>
    </>
  );
};

export default Home;
