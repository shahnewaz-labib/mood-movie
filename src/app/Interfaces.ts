export interface Movie {
  id: number;
  title: string;
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
export interface MovieData {
  results: Movie[];
  status_message: string;
}
export interface MovieCardProps {
  movie: Movie;
}
