import { useRouteError } from "react-router-dom";
import { styled } from "@mui/system";
import {Container} from "@mui/system";

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <CenteredContainer>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </CenteredContainer>
  );
}
