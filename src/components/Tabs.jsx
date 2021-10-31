import { useSelector, useDispatch } from "react-redux";
import {
  getActiveTab,
  tabSelected,
  getAllFavorited,
} from "../features/movies/movies.slice";
import { StyledTabs, StyledTab } from "./styles/Tabs.styled";
import { tabs } from "../constants";

const Tabs = () => {
  const activeTab = useSelector(getActiveTab);
  const favoritedMovies = useSelector(getAllFavorited);
  const dispatch = useDispatch();

  const handleTabClick = (tab) => {
    dispatch(tabSelected(tab));
  };

  console.log("active tab", activeTab);
  return (
    <StyledTabs>
      {tabs.map((tab, index) => (
        <StyledTab
          active={tab.name === activeTab.name}
          key={index}
          onClick={() => handleTabClick(tab)}
        >
          {tab.name === "My Movies"
            ? `${tab.name} (${favoritedMovies.movies.length})`
            : tab.name}
        </StyledTab>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
