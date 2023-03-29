import styled from "styled-components";
import ImageSlider from "../../components/image-slider/ImageSlider";
import TopCategories from "../../components/top-categories/TopCategories";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <TopCategories />
    </Container>
  );
};

export default Home;
