import { styled } from "@mui/system";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#cee5f2, #f2f5f7);
`;

const Title = styled(Typography)`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Description = styled(Typography)`
  font-size: 20px;
  margin-bottom: 32px;
`;

const StyledButton = styled(Button)`
  background-color: #536b78;
  color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #40555f;
  }
`;

export default function Index() {
  const navigate = useNavigate();

  

  return (
    <HeroContainer>
      <Title variant="h1" align="center">
        Welcome to the Exercise Library
      </Title>
      <Description variant="body1" align="center">
        Discover a wide variety of exercises tailored to your fitness needs.
        Whether you're a beginner or an experienced fitness enthusiast, we've
        got you covered.
      </Description>
      <StyledButton
        onClick={() => {
          navigate("/beginner");
        }}
      >
        Get Started
      </StyledButton>
    </HeroContainer>
  );
}
