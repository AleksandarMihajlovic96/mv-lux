import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NAV_TAB_DATA } from "../../mocks/mocks";
import { checkIndexRoute } from "../../utils/utils";
import { themeStyled } from "../../theme/theme";

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
      background: themeStyled.primary,
      color: "white !important",
    },
  },
});

const ProductsNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProductsTabNavigation = (route: string) => {
    navigate(`/proizvodi${route}`);
  };

  useEffect(() => {
    const pathname = location.pathname;
    setValue(checkIndexRoute(pathname));
  }, [location.pathname]);

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
        TabIndicatorProps={{
          style: {
            background: themeStyled.primary,
          },
        }}
      >
        {NAV_TAB_DATA.map((tab) => (
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
