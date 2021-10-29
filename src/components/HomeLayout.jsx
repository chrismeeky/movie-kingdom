import { StyledHeader } from "./styles/Header.styled";
import videoIcon1 from "../assets/svg/video-icon1.svg";
import videoIcon2 from "../assets/svg/video-icon2.svg";
import Tabs from "./Tabs";

const HomeLayout = ({ children }) => {
  return (
    <>
      <StyledHeader>
        <img src={videoIcon1} alt="camera" />
        <h1>Movie Kingdom</h1>
        <img src={videoIcon2} alt="camera" />

        <Tabs />
      </StyledHeader>

      {children}
    </>
  );
};

export default HomeLayout;
