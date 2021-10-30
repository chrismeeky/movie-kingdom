import { useState } from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import { useFetchMoviesQuery } from "../../features/movies/movies.slice";

import HomeLayout from "../../components/HomeLayout";
import { StyledMoviesSection } from "../../components/styles/MoviesSection.styled";
import Movies from "../../components/Movies";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data = [], isLoading } = useFetchMoviesQuery(pageNumber);

  console.log("all movies", data);

  const handlePageChange = (page) => {
    setPageNumber(page);

    const y =
      document.getElementById("movies").getBoundingClientRect().top +
      window.scrollY;
    window.scroll({
      top: y - 150,
      behavior: "smooth",
    });
  };
  return (
    <HomeLayout>
      <StyledMoviesSection id="movies">
        <h2>Trending Today</h2>

        {!isLoading && (
          <>
            <Movies movieList={data.results} />
            <Pagination
              currentPage={data.page}
              totalSize={data.total_pages}
              sizePerPage={10}
              changeCurrentPage={handlePageChange}
              theme="bootstrap"
            />
          </>
        )}
      </StyledMoviesSection>
    </HomeLayout>
  );
};

export default Home;
