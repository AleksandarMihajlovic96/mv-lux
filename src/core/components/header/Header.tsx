import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/common/Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HEADER_NAV_DATA } from "../../../mocks/mocks";
import { themeStyled } from "../../../theme/theme";

const LogoImg = styled.img`
  margin-bottom: 8px;
  margin-top: 8px;
  height: 88px;
  cursor: pointer;
`;

const ToolbarButton = styled(Button)({
  "&&": {
    color: "black",
    display: "block",
    fontWeight: "bold",
    "&:hover": {
      background: themeStyled.primary,
      color: "white",
    },
    "&:active": {
      borderBottom: `solid 2px ${themeStyled.primary}`,
    },
    "&:focus": {
      borderBottom: `solid 2px ${themeStyled.primary}`,
    },
  },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHeaderNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <AppBar position="sticky" style={{ background: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoImg src={logo} onClick={() => handleHeaderNavigation("/")} />
          {/* Minimized header menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {HEADER_NAV_DATA.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Header Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {HEADER_NAV_DATA.map((page) => (
              <ToolbarButton
                key={page.text}
                onClick={() => {
                  handleHeaderNavigation(page.url);
                }}
              >
                {page.text}
              </ToolbarButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ p: 2 }}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100060081562032",
                  "_blank"
                )
              }
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ p: 2 }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mv_lux_shop_rasveta/?hl=en",
                  "_blank"
                )
              }
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
