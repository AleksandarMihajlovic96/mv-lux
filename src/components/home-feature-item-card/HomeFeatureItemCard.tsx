import { Typography } from "@mui/material";
import styled from "styled-components";
import { HomeFeaturedCardProp } from "../../models/models";

const HomeFeatureItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  max-height: 450px;
  padding: 2px 16px;
  padding-bottom: 64px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CategorieImage = styled.img`
  width: 256px;
  height: 256px;
`;

const TopCategorieCardText = styled(Typography)`
  display: flex;
  text-align: center;
  font-weight: bold;
`;

const HomeFeatureItemCard = (props: { data: HomeFeaturedCardProp[] }) => {
  return (
    <>
      {props.data.map((item) => (
        <HomeFeatureItemCardContainer key={item.description}>
          <CategorieImage src={item.img} />
          <TopCategorieCardText variant="h6" sx={{ fontWeight: "bold" }}>
            {item.description}
          </TopCategorieCardText>
        </HomeFeatureItemCardContainer>
      ))}
    </>
  );
};

export default HomeFeatureItemCard;
