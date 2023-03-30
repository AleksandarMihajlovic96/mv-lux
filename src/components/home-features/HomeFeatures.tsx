import { Divider, Typography } from "@mui/material";
import styled from "styled-components";
import { HOME_FEATURES_DATA } from "../../mocks/mocks";
import HomeFeatureItemCard from "../home-feature-item-card/HomeFeatureItemCard";

const HomeFeaturesContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 32px;
`;

const HomeFeaturesList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
`;

const HomeFeaturesTitle = styled(Typography)`
  && {
    text-align: center;
    margin-top: 32px;
    margin-bottom: 32px;
    font-weight: bold;
  }
`;

const HomeFeatures = () => {
  return (
    <HomeFeaturesContainer>
      <Divider sx={{ borderBottomWidth: 3, background: "#e34234" }} />
      <HomeFeaturesTitle variant="h5">
        Najpopularniji proizvodi:
      </HomeFeaturesTitle>
      <HomeFeaturesList>
        <HomeFeatureItemCard data={HOME_FEATURES_DATA}/>
      </HomeFeaturesList>
    </HomeFeaturesContainer>
  );
};

export default HomeFeatures;
