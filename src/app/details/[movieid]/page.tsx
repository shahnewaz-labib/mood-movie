import { getMovieDetails } from "~/app/apiCalls";
import type { Movie } from "~/app/Interfaces";

export default async function page({
  params,
}: {
  params: { movieid: string };
}) {
  const movie: Movie = await getMovieDetails(params.movieid);
  console.log(movie);

  return <div>{movie.title}</div>;
}
