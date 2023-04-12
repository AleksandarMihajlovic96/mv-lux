import { Divider, Typography } from "@mui/material";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MvLuxMap from "../../core/components/mv-lux-map/MvLuxMap";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { themeStyled } from "../../theme/theme";

const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  gap: 16px;
`;

const ContactUsInfoContainer = styled.div`
  max-width: 512px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContactUsInfoTextContainer = styled.div`
  margin-left: 36px;
  p {
    font-weight: bold;
  }
`;

const ContactUsInfoTextTitle = styled(Typography)`
  && {
    font-weight: bold;
  }
`;

const ContactUsDivider = styled(Divider)`
  background: ${(props) => props.theme.primary};
  width: 100%;
  height: 3px;
`;

const ContactUsIconStyle = { fontSize: 64, color: themeStyled.primary };

const ContactUs = () => {
  const firstLocation = {
    lat: 44.08944919704736,
    lng: 20.863343688240686,
  };

  const secondLocation = {
    lat: 44.00985818633306,
    lng: 20.8968332711639,
  };
  return (
    <ContactUsContainer>
      <ContactUsInfoTextTitle variant="h5">
        KONTAKT ZA VELEPRODAJU:
      </ContactUsInfoTextTitle>
      <ContactUsInfoContainer>
        <PhoneIcon sx={ContactUsIconStyle} />
        <ContactUsInfoTextContainer>
          <Typography variant="body1">Tel/Fax: 034/6792-152</Typography>
          <Typography variant="body1">
            Marko Matić, menadzer prodaje: 060/479-4000
          </Typography>
          <Typography variant="body1">
            Stevan Sekulić, menadzer prodaje: 060/479-5000
          </Typography>
        </ContactUsInfoTextContainer>
      </ContactUsInfoContainer>
      <ContactUsInfoContainer>
        <EmailIcon sx={ContactUsIconStyle} />
        <ContactUsInfoTextContainer>
          <Typography variant="body1">marko.mvlux@gmail.com</Typography>
          <Typography variant="body1">stevan.mvlux@gmail.com</Typography>
        </ContactUsInfoTextContainer>
      </ContactUsInfoContainer>
      <ContactUsInfoContainer>
        <LocationOnIcon sx={ContactUsIconStyle} />
        <ContactUsInfoTextContainer>
          <Typography variant="body1">Cerovac bb Kragujevac, 34321</Typography>
        </ContactUsInfoTextContainer>
      </ContactUsInfoContainer>
      <MvLuxMap data={firstLocation} />
      <ContactUsDivider />
      <ContactUsInfoTextTitle variant="h5">
        KONTAKT ZA MALOPRODAJU:
      </ContactUsInfoTextTitle>
      <ContactUsInfoContainer>
        <PhoneIcon sx={ContactUsIconStyle} />
        <ContactUsInfoTextContainer>
          <Typography variant="body1">034/205-985</Typography>
          <Typography variant="body1">060/030 27 88</Typography>
        </ContactUsInfoTextContainer>
      </ContactUsInfoContainer>
      <ContactUsInfoContainer>
        <EmailIcon sx={ContactUsIconStyle} />
        <ContactUsInfoTextContainer>
          <Typography variant="body1">Mvluxshop@gmail.com</Typography>
        </ContactUsInfoTextContainer>
      </ContactUsInfoContainer>
      <ContactUsInfoContainer>
        <LocationOnIcon sx={ContactUsIconStyle} />
        <ContactUsInfoTextContainer>
          <Typography variant="body1">
            Bulevar Kraljice Marije 54 Kragujevac, 34000
          </Typography>
        </ContactUsInfoTextContainer>
      </ContactUsInfoContainer>
      <ContactUsInfoContainer>
        <QueryBuilderIcon sx={ContactUsIconStyle} />
        <ContactUsInfoTextContainer>
          <Typography variant="body1">Radno vreme:</Typography>
        </ContactUsInfoTextContainer>
        <ContactUsInfoTextContainer>
          <Typography variant="body1">
            Ponedeljak: 09h-20h <br />
            Utorak: 09h-20h <br />
            Sreda: 09h-20h <br />
            Četvrtak: 09h-20h <br />
            Petak: 09h-20h <br />
            Subota: 09h-16h <br />
            Nedelja: ne radimo
          </Typography>
        </ContactUsInfoTextContainer>
      </ContactUsInfoContainer>
      <MvLuxMap data={secondLocation} />
    </ContactUsContainer>
  );
};

export default ContactUs;
