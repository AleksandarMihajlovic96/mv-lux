import { Box, Card, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import aboutUsImg from "../../assets/common/AboutUs.png";
import aboutUsImg2 from "../../assets/common/aboutUsDesc.png";

const AboutUsContainer = styled.div`
  width: 75%;
  display: flex;
  margin: auto;
  flex-direction: row;
  margin-top: 72px;
  margin-bottom: 36px;
`;

const AboutUsImg = styled.img`
  max-width: 832px;
  margin-left: 36px;
  margin-right: 36px;
  border-radius: 2.5%;
`;

const AboutUsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutUsDescContainer = styled.div`
  width: 75%;
  display: flex;
  margin: auto;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const AboutUsImg2 = styled.img`
  height: auto;
`;

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer>
        <AboutUsImg src={aboutUsImg} />
        <AboutUsTextContainer>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            O KOMPANIJI MvLux
          </Typography>
          <Typography variant="body1">
            <br />
            Firma MvLux je osnovna 2004. godine. Od tada pa do danas smo širili
            svoju mrežu zadovoljnih saradnika na teritoriji cele Srbije,kao i u
            jos nekim zemljama regiona i izrasli smo u jednog od lidera u domenu
            kućne dekorativne rasvete.
            <br />
            <br />
            Danas u našoj ponudi možete pronaći rasvetu najkvalitetnih svetskih
            brendova po najpovoljnijim cenama.
            <br />
            <br />
            Salon rasvete MvLux Shop je snabdeven kako najmodernijim LED
            proizvodima tako i klasicnom rasvetom. Poslovna kultura naše
            kompanije zasniva se na sledećim vrednostima: poštovanju saradnika,
            istrajnosti i inovacijama. Mi očekujemo mnogo, ali i imamo mnogo
            toga da ponudimo, naši artikli su visokog kvaliteta po
            najpovoljnijim cenama,modernog I klasičnog dizajna.
          </Typography>
        </AboutUsTextContainer>
      </AboutUsContainer>
      <Divider sx={{ borderBottomWidth: 3, background: "#e34234" }} />
      <AboutUsDescContainer>
        <Box sx={{ minWidth: 350 }}>
          <Card variant="outlined">
            <Typography variant="h6">OUR VISION</Typography>
            <Typography variant="body1">
              We aspire to be the best one-stop solution provider for complete
              electrical/lighting /decorative requirements from simple lamps to
              complete automated sophisticated space illumination projects. We
              desire to be a LED lighting superstore, providing professional
              eco-friendly lighting solutions, enabling customers to reduce
              costs, conserve energy and protect environment.
            </Typography>
          </Card>
        </Box>
        <AboutUsImg2 src={aboutUsImg2} />
        <Box sx={{ minWidth: 350 }}>
          <Card variant="outlined">
            <Typography variant="h6">OUR VISION</Typography>
            <Typography variant="body1">
              We aspire to be the best one-stop solution provider for complete
              electrical/lighting /decorative requirements from simple lamps to
              complete automated sophisticated space illumination projects. We
              desire to be a LED lighting superstore, providing professional
              eco-friendly lighting solutions, enabling customers to reduce
              costs, conserve energy and protect environment.
            </Typography>
          </Card>
        </Box>
      </AboutUsDescContainer>
    </>
  );
};

export default AboutUs;
