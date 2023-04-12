import { Typography } from "@mui/material";
import styled from "styled-components";
import CatalogueCard from "../catalogue-card/CatalogueCard";
import { CATALOGUES_DATA } from "../../mocks/mocks";

const CatalogueCardsContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 32px;
`;

const CatalogueCardsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
`;

const CatalogueCardsTitle = styled(Typography)`
  && {
    text-align: center;
    margin-top: 32px;
    margin-bottom: 32px;
    font-weight: bold;
  }
`;

const CatalogueCards = () => {
  return (
    <CatalogueCardsContainer>
      <CatalogueCardsTitle variant="h5">
        LISTA SVIH KATALOGA PO GODINAMA:
      </CatalogueCardsTitle>
      <CatalogueCardsList>
        <CatalogueCard data={CATALOGUES_DATA} />
      </CatalogueCardsList>
    </CatalogueCardsContainer>
  );
};

export default CatalogueCards;
