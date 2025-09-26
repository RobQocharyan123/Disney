import axios from 'axios';

const API_KEY = '2ec0d66f5bdf1dd12eefa0723f1479cf';
const MOVIE_BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_BY_GENRE_URL = `${MOVIE_BASE_URL}/discover/movie?api_key=${API_KEY}`;

// Named exports
const getTrendingVideos = () => {
  return axios.get(`${MOVIE_BASE_URL}/trending/all/day?api_key=${API_KEY}`);
};

const getMovieByGenreId = (id) => {
  return axios.get(`${MOVIE_BY_GENRE_URL}&with_genres=${id}`);
};

export default { getTrendingVideos, getMovieByGenreId };
