import MovieCard from "./MovieCard";
import { fetchMovies } from "./apiCalls";

export default async function MovieContainer() {
  const emotion = "Angry";
  const movies = await fetchMovies(emotion);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
