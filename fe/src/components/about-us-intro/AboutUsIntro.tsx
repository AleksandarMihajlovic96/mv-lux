import { Typography } from "@mui/material";
import styled from "styled-components";
import aboutUsIntroImg from "../../assets/common/AboutUs.png";

const AboutUsIntroContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 72px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const AboutUsIntroImg = styled.img`
  height: auto;
  border-radius: 2.5%;
  margin-right: 64px;
  flex-grow: 1;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }

  @media only screen and (min-width: 600px) {
    max-width: 100%;
  }

  @media only screen and (min-width: 768px) {
    max-width: 440px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 540px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 640px;
  }
`;

const AboutUsIntroText = styled.div`
  flex-grow: 1;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
`;

const AboutUsIntroTextTitle = styled(Typography)`
  text-align: center;
  font-weight: bold;
`;

const AboutUsIntroTextDesc = styled(Typography)`
  text-align: left;
`;

const AboutUsIntro = () => {
  return (
    <AboutUsIntroContainer>
      <AboutUsIntroImg src={aboutUsIntroImg} />
      <AboutUsIntroText>
        <AboutUsIntroTextTitle variant="h4">
          O KOMPANIJI MvLux
        </AboutUsIntroTextTitle>
        <AboutUsIntroTextDesc variant="body1">
          Firma MvLux je osnovna 2004. godine. Od tada pa do danas smo širili
          svoju mrežu zadovoljnih saradnika na teritoriji cele Srbije,kao i u
          jos nekim zemljama regiona i izrasli smo u jednog od lidera u domenu
          kućne dekorativne rasvete.
          <AboutUsIntroTextDesc variant="body1">
            Danas u našoj ponudi možete pronaći rasvetu najkvalitetnih svetskih
            brendova po najpovoljnijim cenama.
          </AboutUsIntroTextDesc>
          <AboutUsIntroTextDesc variant="body1">
            Salon rasvete MvLux Shop je snabdeven kako najmodernijim LED
            proizvodima tako i klasicnom rasvetom. Poslovna kultura naše
            kompanije zasniva se na sledećim vrednostima: poštovanju saradnika,
            istrajnosti i inovacijama. Mi očekujemo mnogo, ali i imamo mnogo
            toga da ponudimo, naši artikli su visokog kvaliteta po
            najpovoljnijim cenama,modernog I klasičnog dizajna.
          </AboutUsIntroTextDesc>
        </AboutUsIntroTextDesc>
      </AboutUsIntroText>
    </AboutUsIntroContainer>
  );
};

export default AboutUsIntro;
