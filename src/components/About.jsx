import { styled } from "@mui/system";
import { Container } from "@mui/system";

const CenteredContainer = styled(Container)`
  background-color: #cee5f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #536b78;
  text-align: center;
`;

export default function About() {
  return (
    <CenteredContainer>
      <h3>
        <span>
          <h1>Welcome to the Exercise Library Application</h1>
        </span>
        <span>
          <h3>Discover and Filter Exercises to Enhance Your Fitness Journey</h3>
        </span>
        <span>
          <p>
            Are you looking for a comprehensive exercise library to support your
            fitness goals? Look no further! Our Exercise Library Application
            provides a wide range of exercises categorized by type, muscle
            groups, and difficulty level.
          </p>
        </span>
        <br />
        <span>
          <h4>How to Use:</h4>
          <p>
            To find an exercise that suits your needs, simply navigate through
            the menu and select the desired category. You can then apply filters
            based on your fitness level, targeted muscle groups, or exercise
            type. Whether you're a beginner or an advanced fitness enthusiast,
            our application has something for everyone.
          </p>
        </span>
        <br />
        <span>
          <h4>About Me:</h4>
          <p>
            Hi, I'm Julian, a passionate junior software developer and
            fitness enthusiast. I created this application to combine my love
            for coding and fitness, aiming to provide a user-friendly platform
            that helps individuals achieve their fitness goals effectively. As a
            developer, I constantly strive to improve and expand this exercise
            library to offer the best possible experience for our users.
          </p>
        </span>
        <br />
        <br />
        <span>
          <strong>Enjoy your workout session! &#128540;</strong>
        </span>
      </h3>
    </CenteredContainer>
  );
}
