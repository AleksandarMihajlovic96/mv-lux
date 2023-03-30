import { Typography } from "@mui/material";
import styled from "styled-components";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import TimerIcon from "@mui/icons-material/Timer";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const AboutUsQualitiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AboutUsQualitiesTitle = styled(Typography)`
  && {
    margin-top: 16px;
    margin-bottom: 32px;
    font-weight: bold;
    text-align: center;
  }
`;

const AboutUsQualitiesList = styled.div`
  width: 100%;
  display: flex;
  direction: row;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  justify-content: space-between;
`;

const AboutUsQualitiesListCard = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutUsQualitiesListText = styled(Typography)`
  && {
    font-weight: bold;
  }
`;

const AboutUsQualities = () => {
  return (
    <AboutUsQualitiesContainer>
      <AboutUsQualitiesTitle variant="h6">
        NAŠE NAJBOLJE OSOBINE I KARAKTERISTIKE:
      </AboutUsQualitiesTitle>
      <AboutUsQualitiesList>
        <AboutUsQualitiesListCard>
          <OnlinePredictionIcon
            fontSize="large"
            sx={{ color: "#e34234", fontSize: 64 }}
          />
          <AboutUsQualitiesListText variant="body1">
            Kvalitet proizvoda
          </AboutUsQualitiesListText>
        </AboutUsQualitiesListCard>
        <AboutUsQualitiesListCard>
          <ThumbUpIcon
            fontSize="large"
            sx={{ color: "#e34234", fontSize: 64 }}
          />
          <AboutUsQualitiesListText variant="body1">
            Zadovoljni klijenti
          </AboutUsQualitiesListText>
        </AboutUsQualitiesListCard>
        <AboutUsQualitiesListCard>
          <TimerIcon fontSize="large" sx={{ color: "#e34234", fontSize: 64 }} />
          <AboutUsQualitiesListText variant="body1">
            Efikasna usluga
          </AboutUsQualitiesListText>
        </AboutUsQualitiesListCard>
        <AboutUsQualitiesListCard>
          <PsychologyAltIcon
            fontSize="large"
            sx={{ color: "#e34234", fontSize: 64 }}
          />
          <AboutUsQualitiesListText variant="body1">
            Korisni saveti
          </AboutUsQualitiesListText>
        </AboutUsQualitiesListCard>
        <AboutUsQualitiesListCard>
          <HistoryEduIcon
            fontSize="large"
            sx={{ color: "#e34234", fontSize: 64 }}
          />
          <AboutUsQualitiesListText variant="body1">
            Najbolji dizajn
          </AboutUsQualitiesListText>
        </AboutUsQualitiesListCard>
      </AboutUsQualitiesList>
    </AboutUsQualitiesContainer>
  );
};

export default AboutUsQualities;
