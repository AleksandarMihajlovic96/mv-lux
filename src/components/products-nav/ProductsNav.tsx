import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PRODUCTS_DATA } from "../../mocks/mocks";
import { CATEGORIES } from "../../models/models";
import { countCategories } from "../../utils/utils";

const ProductsNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

const ProductsNavTab = styled(Tab)({
  "&&": {
    color: "black !important",
    fontWeight: "bold",
    "&:hover": {
      background: "#e34234",
      color: "white !important",
    },
  },
});

const ProductsNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const NavTabData = [
    { label: "Svi proizvodi", numberOfProducts: PRODUCTS_DATA.length, url: "" },
    {
      label: "Klasični lusteri",
      numberOfProducts: countCategories(CATEGORIES.ClassicChandelier),
      url: "/klasicni-lusteri",
    },
    {
      label: "Plafonske lampe",
      numberOfProducts: countCategories(CATEGORIES.CeilingLamps),
      url: "/plafonske-lampe",
    },
    {
      label: "Podne i zidne lampe",
      numberOfProducts: countCategories(CATEGORIES.FloorWallLamps),
      url: "/podne-zidne-lampe",
    },
    {
      label: "Radne lampe",
      numberOfProducts: countCategories(CATEGORIES.WorkLamps),
      url: "/radne-lampe",
    },
    {
      label: "Spoljna rasveta",
      numberOfProducts: countCategories(CATEGORIES.ExternalLighting),
      url: "/spoljna-rasveta",
    },
    {
      label: "Spotovi",
      numberOfProducts: countCategories(CATEGORIES.Spots),
      url: "/spotovi",
    },
    {
      label: "Vintage",
      numberOfProducts: countCategories(CATEGORIES.Vintage),
      url: "/vintage",
    },
    {
      label: "Visilice",
      numberOfProducts: countCategories(CATEGORIES.Hangers),
      url: "/visilice",
    },
  ];

  const handleProductsTabNavigation = (route: string) => {
    navigate(`/proizvodi${route}`);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <ProductsNavContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{
          style: {
            background: "#e34234",
          },
        }}
      >
        {NavTabData.map((tab) => (
          <ProductsNavTab
            key={tab.label}
            label={`${tab.label} (${tab.numberOfProducts})`}
            onClick={() => {
              handleProductsTabNavigation(tab.url);
            }}
          />
        ))}
      </Tabs>
    </ProductsNavContainer>
  );
};

export default ProductsNav;
