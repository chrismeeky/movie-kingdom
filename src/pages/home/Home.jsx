import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import {
  useFetchMoviesQuery,
  getActiveTab,
  getAllFavorited,
} from "../../features/movies/movies.slice";

import HomeLayout from "../../components/HomeLayout";
import { StyledMoviesSection } from "../../components/styles/MoviesSection.styled";
import Movies from "../../components/Movies";
import { StyledParagraph } from "../../components/styles/Paragraph.styled";

const paginate = (page, pageSize, data) => {
  const movies = data.slice(
    pageSize * (page - 1),
    pageSize * (page - 1) + pageSize
  );
  return movies;
};

const Home = () => {
  const favoritedMovies = useSelector(getAllFavorited);
  const activeTab = useSelector(getActiveTab);
  const [pageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const [paginatedFavoritedMovies, setPaginatedFavoritedMovies] = useState(
    paginate(pageNumber, pageSize, favoritedMovies.movies)
  );
  const { data = { results: [] }, isFetching } = useFetchMoviesQuery({
    page: pageNumber,
    url: activeTab.url,
  });
  const movies =
    activeTab.name === "My Movies" ? paginatedFavoritedMovies : data.results;

  const handlePageChange = (page) => {
    setPageNumber(page);
    if (activeTab.name === "My Movies") {
      setPaginatedFavoritedMovies(
        paginate(page, pageSize, favoritedMovies.movies)
      );
    }

    const y =
      document.getElementById("movies").getBoundingClientRect().top +
      window.scrollY;
    window.scroll({
      top: y - 150,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setPageNumber(1);
  }, [activeTab]);

  useEffect(() => {
    setPaginatedFavoritedMovies(favoritedMovies.movies);
  }, [favoritedMovies]);
  return (
    <HomeLayout>
      <StyledMoviesSection id="movies">
        <h2>{activeTab.description}</h2>

        <Movies
          movieList={movies}
          isLoading={isFetching}
          activeTab={activeTab}
        />
        {!favoritedMovies.movies.length && activeTab.name === "My Movies" ? (
          <StyledParagraph>Nothing here. "Starr" a movie and come back</StyledParagraph>
        ) : (
          <Pagination
            currentPage={pageNumber}
            totalSize={
              activeTab.name === "My Movies"
                ? favoritedMovies.movies.length
                : data.total_results
            }
            sizePerPage={pageSize}
            changeCurrentPage={handlePageChange}
            theme="bootstrap"
          />
        )}
      </StyledMoviesSection>
    </HomeLayout>
  );
};

export default Home;
