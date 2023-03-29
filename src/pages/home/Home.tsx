import styled from "styled-components";
import HomeDescription from "../../components/home-description/HomeDescription";
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
      <HomeDescription />
    </Container>
  );
};

export default Home;
