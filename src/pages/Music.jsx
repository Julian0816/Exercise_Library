import { styled } from "@mui/system";
import { Container } from "@mui/material";

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


const Music = () => {
  return (
    <CenteredContainer>
      <h1>Embed Spotify</h1>
    </CenteredContainer>
  );
};

export default Music;
