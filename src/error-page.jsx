import { useRouteError } from "react-router-dom";
import { styled } from "@mui/system";
import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#cee5f2, #f2f5f7);
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

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();


  return (
    <CenteredContainer>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <StyledButton variant="contained" onClick={() => navigate("/")}>
          Go back to the home page
        </StyledButton>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </CenteredContainer>
  );
}

//TODO work on user experience for returning to the main page