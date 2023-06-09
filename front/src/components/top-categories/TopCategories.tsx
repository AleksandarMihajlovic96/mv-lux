import { Typography } from "@mui/material";
import styled from "styled-components";
import { CATEGORIES_DATA } from "../../mocks/mocks";
import TopCategorieCard from "../top-categorie-card/TopCategorieCard";

const TopCategoriesContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

const CategoriesList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
`;

const TopCategoriesTitle = styled(Typography)`
  && {
    margin-top: 16px;
    margin-bottom: 32px;
    font-weight: bold;
  }
`;

const TopCategories = () => {
  return (
    <TopCategoriesContainer>
      <TopCategoriesTitle variant="h5">
        Najprodavanije kategorije
      </TopCategoriesTitle>
      <CategoriesList>
        <TopCategorieCard data={CATEGORIES_DATA} />
      </CategoriesList>
    </TopCategoriesContainer>
  );
};

export default TopCategories;
