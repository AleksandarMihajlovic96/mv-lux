import styled from "styled-components";
import CatalogueCards from "../../components/catalogue-cards/CatalogueCards";

const CataloguesContainer = styled.div`
  width: 100%;
`;

const Catalogues = () => {
  return <CataloguesContainer><CatalogueCards /></CataloguesContainer>;
};

export default Catalogues;
