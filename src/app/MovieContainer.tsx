import MovieCard from "./MovieCard";
import { fetchMovies } from "./apiCalls";

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex] as T,
      array[currentIndex] as T,
    ];
  }

  return array;
}

export default async function MovieContainer({ emotion }: { emotion: string }) {
  console.log(new Date());
  let movies = await fetchMovies(emotion);
  movies = shuffle(movies);
  console.log(movies.length);

  return (
    <div className=" flex flex-wrap justify-evenly bg-pink-950 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
