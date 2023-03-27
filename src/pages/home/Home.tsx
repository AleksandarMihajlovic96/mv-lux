import styled from "styled-components";
import Header from "../../core/components/header/Header";

const Container = styled.div`
  widht: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
