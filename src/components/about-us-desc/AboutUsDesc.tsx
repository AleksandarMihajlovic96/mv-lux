import { Typography } from "@mui/material";
import styled from "styled-components";
import aboutUsDescImg from "../../assets/common/aboutUsDesc.png";

const AboutUsDescContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media only screen and (min-width: 992px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1700px) {
    flex-direction: row;
  }
`;

const AboutUsDescCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 450px;
  padding: 2px 16px;
  padding-top: 80px;
  padding-bottom: 32px;
  width: 100%;
  background-color: #e34234;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media only screen and (min-width: 992px) {
    max-width: 100%;
  }
  @media only screen and (min-width: 1700px) {
    max-width: 400px;
  }
`;

const AboutUsDescImg = styled.img`
  height: auto;
  @media only screen and (min-width: 992px) {
    max-width: 400px;
  }
  @media only screen and (min-width: 1700px) {
    max-width: 100%;
  }
`;

const AboutUsDescTextTitle = styled(Typography)`
  && {
    color: white;
    text-align: center;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

const AboutUsDescText = styled(Typography)`
  && {
    text-align: center;
    color: white;
  }
`;

const AboutUsDesc = () => {
  return (
    <AboutUsDescContainer>
      <AboutUsDescCard>
        <AboutUsDescTextTitle variant="h5">NAŠA VIZIJA</AboutUsDescTextTitle>
        <AboutUsDescText variant="body1">
          We aspire to be the best one-stop solution provider for complete
          electrical/lighting /decorative requirements from simple lamps to
          complete automated sophisticated space illumination projects. We
          desire to be a LED lighting superstore, providing professional
          eco-friendly lighting solutions, enabling customers to reduce costs,
          conserve energy and protect environment.
        </AboutUsDescText>
      </AboutUsDescCard>
      <AboutUsDescImg src={aboutUsDescImg} />
      <AboutUsDescCard>
        <AboutUsDescTextTitle variant="h5">NAŠA MISIJA</AboutUsDescTextTitle>
        <AboutUsDescText variant="body1">
          We are committed to delivering the most innovative effective lighting
          solutions with world class products and service. We educate and
          encourage possible value-added LED retro conversations to save planet
          earth. By doing so we aid individuals, organizations, institutions and
          governments to save costs with long-term benefits.
        </AboutUsDescText>
      </AboutUsDescCard>
    </AboutUsDescContainer>
  );
};

export default AboutUsDesc;
