import { Link } from "react-router-dom";

import BackgroundHome from "../../Components/backgroundHome";
import {
  Button,
  Container,
  Content,
  Credits,
  Message,
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
          <Message>
            <p>Compartilhe sua vibração</p>
            <p>Viva a emoção</p>
          </Message>
          <Link to={"/SignIn"}>
            <Button>SignIn</Button>
          </Link>
          <Link to={"/SignUp"}>
            <Button>SignUp</Button>
          </Link>
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
