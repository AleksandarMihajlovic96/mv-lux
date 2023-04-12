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
  background-color: ${(props) => props.theme.primary};
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
          Težimo da budemo najbolji u nalaženju rešenja i da imamo sve na jednom
          mestu kada su u pitanju zahtevi klijenta za dekorativnim osvetljenjem.
          Od jednostavnih lampi do kompletnih automatizovanih i sofisticiranih
          rešenja osvetljenja prostora. Želimo da budemo najbolja prodavnica LED
          rasvete, koja pruža profesionalna ekološka rešewa za osvetljenje,
          omogućavajući kupcima da smanje troškove, štede energiju i štite
          životnu sredinu.
        </AboutUsDescText>
      </AboutUsDescCard>
      <AboutUsDescImg src={aboutUsDescImg} />
      <AboutUsDescCard>
        <AboutUsDescTextTitle variant="h5">NAŠA MISIJA</AboutUsDescTextTitle>
        <AboutUsDescText variant="body1">
          Posvećeni smo iznošenju najinovativnijeg efektivnog rešenja za svako
          potrebno osvetljenje sa proizvodima i uslugama svetske klase.
          Ohrabrujemo i savetujemo i korišćenje retro LED svetala kako bi što
          više spasili planetu. Na taj način pomažemo pojedincima,
          organizacijama, institucijama i državama da uštede troškove uz
          dugoročne koristi.
        </AboutUsDescText>
      </AboutUsDescCard>
    </AboutUsDescContainer>
  );
};

export default AboutUsDesc;
