import { Typography } from "@mui/material";
import styled from "styled-components";
import { TopCategorieCardProp } from "../../models/models";

const TopCategorieCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 350px;
  padding: 2px 16px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CategorieImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 32px;
`;

const TopCategorieCardText = styled(Typography)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TopCategorieCard = (props: { data: TopCategorieCardProp[] }) => {
  return (
    <>
      {props.data.map((item) => (
        <TopCategorieCardContainer>
          <CategorieImage src={item.img} />
          <TopCategorieCardText variant="h6">{item.title}</TopCategorieCardText>
        </TopCategorieCardContainer>
      ))}
    </>
  );
};

export default TopCategorieCard;
