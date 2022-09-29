const api_key = "89b6a6ca030df829565babcb1da28013";

const requests = {
  getPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
  getTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
  getTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`,
  getHorror: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=horror&page=1&include_adult=false`,
  getUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
};

export default requests;
