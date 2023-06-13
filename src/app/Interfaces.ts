export interface Movie {
  id: number;
  title: string;
}
export interface MovieData {
  results: Movie[];
  status_message: string;
}
export interface MovieCardProps {
  movie: Movie;
}
