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

export default function Index() {
  return (
    <CenteredContainer>
      <h3>
        <span>
          <h1>This Is An Exersise Library Application</h1>
        </span>
        <span>
          <h3>
            To find an exercise, select a caegory on the menu and filter by:
          </h3>
        </span>
        <span>Fitness Level, Muscle or Type</span>
        <br />
        <br />
        <span>
          <bold>ENJOY YOUR SESSION! &#128540;</bold>
        </span>
      </h3>
    </CenteredContainer>
  );
}
