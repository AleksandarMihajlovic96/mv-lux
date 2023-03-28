import styled from "styled-components";
import ImageSlider from "../../components/image-slider/ImageSlider";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
};

export default Home;
