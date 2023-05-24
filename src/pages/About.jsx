import { styled } from "@mui/system";
import { Container, Typography } from "@mui/material";

const CenteredContainer = styled(Container)`
  background: linear-gradient(#cee5f2, #f2f5f7);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #536b78;
  text-align: center;
  padding: 16px;
`;

const Heading = styled(Typography)`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: bold;
`;

const Subheading = styled(Typography)`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Paragraph = styled(Typography)`
  margin-bottom: 16px;
`;

const About = () => {
  return (
    <CenteredContainer>
      <div>
        <Heading variant="h1" component="h1">
          Welcome to the Exercise Library Application
        </Heading>
        <Subheading variant="h3" component="h3">
          Discover and Filter Exercises to Enhance Your Fitness Journey
        </Subheading>
        <Paragraph variant="body1" component="p">
          Are you looking for a comprehensive exercise library to support your
          fitness goals? Look no further! Our Exercise Library Application
          provides a wide range of exercises categorized by type, muscle groups,
          and difficulty level.
        </Paragraph>
        <div>
          <Typography variant="h5" component="h5">
            How to Use:
          </Typography>
          <Paragraph variant="body1" component="p">
            To find an exercise that suits your needs, simply navigate through
            the menu and select the desired category. You can then apply filters
            based on your fitness level, targeted muscle groups, or exercise
            type. Whether you're a beginner or an advanced fitness enthusiast,
            our application has something for everyone.
          </Paragraph>
        </div>
        <div>
          <Typography variant="h5" component="h5">
            About Me:
          </Typography>
          <Paragraph variant="body1" component="p">
            Hi, I'm Julian, a passionate junior software developer and fitness
            enthusiast. I created this application to combine my love for coding
            and fitness, aiming to provide a user-friendly platform that helps
            individuals achieve their fitness goals effectively. As a developer,
            I constantly strive to improve and expand this exercise library to
            offer the best possible experience for our users.
          </Paragraph>
        </div>
        <div>
          <Paragraph variant="body1" component="strong">
            Enjoy your workout session! &#128540;
          </Paragraph>
        </div>
      </div>
    </CenteredContainer>
  );
};

export default About;
