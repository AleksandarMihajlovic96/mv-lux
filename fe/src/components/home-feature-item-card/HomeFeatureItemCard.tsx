import { Typography } from "@mui/material";
import styled from "styled-components";
import { HomeFeaturedCardProp } from "../../models/models";
import { useNavigate } from "react-router";

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

const HomeFeatureItemCardImage = styled.img`
  width: 230px;
  height: 250px;
`;

const HomeFeatureItemCardText = styled(Typography)`
  display: flex;
  text-align: center;
  font-weight: bold;
`;

const HomeFeatureItemCard = (props: { data: HomeFeaturedCardProp[] }) => {
  const navigate = useNavigate();

  const handleProductNavigation = (productId: string) => {
    navigate(`proizvodi/${productId}`, { replace: true });
  };
  return (
    <>
      {props.data.map((item) => (
        <HomeFeatureItemCardContainer
          key={item.description}
          onClick={() => handleProductNavigation(item.id)}
        >
          <HomeFeatureItemCardImage src={item.img} />
          <HomeFeatureItemCardText variant="h6" sx={{ fontWeight: "bold" }}>
            {item.description}
          </HomeFeatureItemCardText>
        </HomeFeatureItemCardContainer>
      ))}
    </>
  );
};

export default HomeFeatureItemCard;
