import { Divider, Typography } from "@mui/material";
import styled from "styled-components";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import logo from "../../../assets/Logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { BsBank, BsCashStack } from "react-icons/bs";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const FooterFeatureContainer = styled.div`
  width: 100%;
  background-color: #e34234;
`;

const FooterFeature = styled.div`
  width: 75%;
  display: flex;
  direction: row;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  justify-content: space-between;
`;

const FooterFeatureText = styled(Typography)`
  color: white;
`;

const FooterFeatureCard = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: row;
`;

const FooterDescription = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 128px;
`;

const SocialNetworksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
`;

const FooterDescriptionText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterRightsContainer = styled.div`
  width: 100%;
  background-color: #e34234;
`;

const FooterRights = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  justify-content: space-between;
`;

const FooterRightsText = styled(Typography)`
  color: white !important;
`;
const FooterRightsPayment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Divider sx={{ borderBottomWidth: 3, background: "white" }} />
      <FooterFeatureContainer>
        <FooterFeature>
          <FooterFeatureCard>
            <VerifiedUserIcon sx={{ fontSize: 64, color: "white" }} />
            <FooterFeatureText variant="subtitle1">
              <b>SIGURNOST</b>
              <br />
              Garantovana sigurna kupovina
            </FooterFeatureText>
          </FooterFeatureCard>
          <FooterFeatureCard>
            <SupportAgentIcon sx={{ fontSize: 64, color: "white" }} />
            <FooterFeatureText variant="subtitle1">
              <b>USLUŽNOST</b>
              <br />
              Brza i efikasna usluga
            </FooterFeatureText>
          </FooterFeatureCard>
          <FooterFeatureCard>
            <WorkspacePremiumIcon sx={{ fontSize: 64, color: "white" }} />
            <FooterFeatureText variant="subtitle1">
              <b>KVALITET</b>
              <br />
              Garancija visokog kvaliteta
            </FooterFeatureText>
          </FooterFeatureCard>
        </FooterFeature>
      </FooterFeatureContainer>
      <Divider sx={{ borderBottomWidth: 3, background: "white" }} />
      <FooterDescription>
        <LogoImg src={logo} />
        <SocialNetworksContainer>
          <IconButton sx={{ p: 2, maxHeight: 67 }}>
            <FacebookRoundedIcon
              fontSize="large"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100060081562032",
                  "_blank"
                )
              }
            />
          </IconButton>
          <IconButton sx={{ p: 2, maxHeight: 67 }}>
            <InstagramIcon
              fontSize="large"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mv_lux_shop_rasveta/?hl=en",
                  "_blank"
                )
              }
            />
          </IconButton>
        </SocialNetworksContainer>
        <FooterDescriptionText>
          <Typography variant="subtitle1">
            <b>VELEPRODAJNI OBJEKTI:</b>
          </Typography>
          <Typography variant="body1">Cerovac bb Kragujevac, 34321</Typography>
          <Divider
            sx={{
              borderBottomWidth: 3,
              background: "#e34234",
              marginTop: 4,
              marginBottom: 4,
            }}
          />
          <Typography variant="subtitle1">
            <b>MALOPRODAJNI OBJEKTI:</b>
          </Typography>
          <Typography variant="body1">
            Bulevar Kraljice Marije 54 Kragujevac, 34321
          </Typography>
        </FooterDescriptionText>
      </FooterDescription>
      <Divider sx={{ borderBottomWidth: 3, background: "#e34234" }} />
      <FooterRightsContainer>
        <FooterRights>
          <FooterRightsText>
            <b>Copyright &#169; 2004-2023 MvLux. Sva prava su zadržana.</b>
          </FooterRightsText>
          <FooterRightsPayment>
            <BsCashStack color="white" fontSize={24} />
            <FaCcVisa color="white" fontSize={24} />
            <FaCcMastercard color="white" fontSize={24} />
            <BsBank color="white" fontSize={24} />
          </FooterRightsPayment>
        </FooterRights>
      </FooterRightsContainer>
    </FooterContainer>
  );
};

export default Footer;
