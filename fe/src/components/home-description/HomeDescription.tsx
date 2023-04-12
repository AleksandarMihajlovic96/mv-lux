import { Divider, Typography } from "@mui/material";
import styled from "styled-components";

const HomeDescriptionContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 32px;
`;

const HomeDescriptionTitle = styled(Typography)`
  && {
    margin-top: 32px;
    margin-bottom: 16px;
    font-weight: bold;
  }
`;

const HomeDescriptionDivider = styled(Divider)`
  background: ${(props) => props.theme.primary};
  height: 3px;
`;

const HomeDescription = () => {
  return (
    <HomeDescriptionContainer>
      <HomeDescriptionDivider />
      <HomeDescriptionTitle variant="h5">
        Na inteligentan način prosvetlite svoj dom i život
      </HomeDescriptionTitle>
      <Typography variant="body1">
        LED nudi različite vrste unutrašnje i spoljašnje rasvete. Od luksuznih
        lustera, modernih zidnih svetiljki, fasadnih svetala, pejzažnih svetala,
        reflektora, spoljnih svetiljki, podnih lampi, komercijalnih svetala i
        LED trajaka koji su uvek na raspolaganju i spremni za preuzimanje.
      </Typography>
      <br />
      <Typography variant="body1">
        Ovaj brend rasvete i kućnih rasveta počeo je kao malli studio za
        osvetljenje, a sada je u partnerstvu sa mnogim firmama. Izaberite naše
        najnovije raznovrsno osvetljenje. Naša prodavnica je idealno mesto za
        kupovinu poklona, kao i za kupovinu prazničnog osvetljenja i dekoracije.
        Ako Vam je potrebna inspiracija ili želite da otkrijete neki novi dizajn
        pogledajte našu galeriju proizvoda koje nudimo. Imamo veliku ponudu
        različitih stilova, tako da dozvolite nam da ulepšamo Vaš dom i
        otkrijemo naš širok izbor.
      </Typography>
    </HomeDescriptionContainer>
  );
};

export default HomeDescription;
