import { useRouteError } from "react-router-dom";
import { styled } from "@mui/system";
import {Container} from "@mui/system";
import { useNavigate } from "react-router-dom";


const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
        <p onClick={() => {navigate('/')}}> -- Click me to go back to the main page -- </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </CenteredContainer>
  );
}

//TODO work on user experience for returning to the main page