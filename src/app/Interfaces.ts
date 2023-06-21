export interface Movie {
  id: number;
  title: string;
  runtime: number;
  genres: Genre[];
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
}
export interface Genre {
  id: number;
  name: string;
}
export interface MovieData {
  results: Movie[];
  status_message: string;
}
export interface MovieCardProps {
  movie: Movie;
}
export interface Emotion {
  emotion: string;
}
