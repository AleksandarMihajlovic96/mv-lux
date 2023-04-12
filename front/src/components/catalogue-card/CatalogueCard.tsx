import { Typography } from "@mui/material";
import styled from "styled-components";
import { CatalogueCardProp } from "../../models/models";

const CatalogueCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
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

const CatalogueCardImage = styled.img`
  width: 300px;
  height: 352px;
`;

const CatalogueCardCardText = styled(Typography)`
  && {
    display: flex;
    text-align: center;
    font-weight: bold;
    margin-top: 16px;
  }
`;

const CatalogueCard = (props: { data: CatalogueCardProp[] }) => {
  const openPdf = (pdfLink: string) => {
    window.open(pdfLink, "_blank");
  };
  return (
    <>
      {props.data.map((item) => (
        <CatalogueCardContainer key={item.description}>
          <CatalogueCardImage
            src={item.img}
            onClick={() => openPdf(item.catalogue)}
          />
          <CatalogueCardCardText variant="body1" sx={{ fontWeight: "bold" }}>
            {item.description}
          </CatalogueCardCardText>
        </CatalogueCardContainer>
      ))}
    </>
  );
};

export default CatalogueCard;
