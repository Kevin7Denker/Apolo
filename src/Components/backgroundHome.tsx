import video from "../Assets/Videos/nightcity.webm";

import styled from "styled-components";

const VideoBackground = styled.video`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;

  left: 0;
  z-index: -1;
  object-fit: cover;
  filter: blur(10px);
`;

const BackgroundHome = () => {
  return <VideoBackground src={video} autoPlay={true} muted loop />;
};

export default BackgroundHome;
