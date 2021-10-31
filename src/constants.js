const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export const tabs = [
  {
    name: "All",
    url: `/discover/movie?api_key=${apiKey}&language=en-US`,
    description: "All Movies",
    async: true,
  },
  {
    name: "Trending",
    url: `/trending/all/day?api_key=${apiKey}`,
    description: "Trending Today",
    async: true,
  },
  {
    name: "My Movies",
    url: null,
    description: "My Starred Movies",
    async: false,
  },
];
