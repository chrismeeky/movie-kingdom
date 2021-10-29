import { StyledTabs } from "./styles/Tabs.styled";

const Tabs = () => {
  return (
    <StyledTabs>
      <div className="tab">Trending</div>
      <div className="tab">Popular</div>
      <div className="tab">My Favorites</div>
    </StyledTabs>
  );
};

export default Tabs;
