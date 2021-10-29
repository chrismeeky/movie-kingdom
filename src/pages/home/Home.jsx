import HomeLayout from "../../components/HomeLayout";
import { StyledMoviesSection } from "../../components/styles/MoviesSection.styled";
import Movies from "../../components/Movies";

const movies = [
  {
    title: "The crimer",
    date: "11/5/2005",
    poster: "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    mediaType: "Movies",
    voteCount: 250,
  },
  {
    title: "The crimer",
    date: "11/5/2005",
    poster: "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    mediaType: "Movies",
    voteCount: 250,
  },
  {
    title: "The crimer",
    date: "11/5/2005",
    poster: "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    mediaType: "Movies",
    voteCount: 250,
  },
  {
    title: "The crimer",
    date: "11/5/2005",
    poster: "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    mediaType: "Movies",
    voteCount: 250,
  },
  {
    title: "The crimer",
    date: "11/5/2005",
    poster: "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    mediaType: "Movies",
    voteCount: 250,
  },
];

const Home = () => {
  return (
    <HomeLayout>
      <StyledMoviesSection>
        <h2>Trending Today</h2>

        <Movies movieList={movies} />
      </StyledMoviesSection>
    </HomeLayout>
  );
};

export default Home;
