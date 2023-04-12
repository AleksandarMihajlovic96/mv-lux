import { Divider } from "@mui/material";
import styled from "styled-components";
import AboutUsDesc from "../../components/about-us-desc/AboutUsDesc";
import AboutUsIntro from "../../components/about-us-intro/AboutUsIntro";
import AboutUsQualities from "../../components/about-us-qualities/AboutUsQualities";

const AboutUsContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

const AboutUsDivider = styled(Divider)`
  background: ${(props) => props.theme.primary};
  width: 100%;
  height: 3px;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsIntro />
      <AboutUsDivider />
      <AboutUsDesc />
      <AboutUsDivider />
      <AboutUsQualities />
    </AboutUsContainer>
  );
};

export default AboutUs;
