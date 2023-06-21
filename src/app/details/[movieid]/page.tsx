import Image from "next/image";
import type { Movie } from "~/app/Interfaces";
import { getMovieDetails } from "~/app/apiCalls";

export default async function page({
  params,
}: {
  params: { movieid: string };
}) {
  const basePosterUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";
  const movie: Movie = await getMovieDetails(params.movieid);
  console.log(movie);

  return (
    <div className="flex justify-center pt-12">
      <div className="max-w-[1400px]">
        <div className="flex">
          <div className="flex-1">
            <Image
              className="h-auto w-full"
              src={basePosterUrl + movie.poster_path}
              alt={movie.title}
              width={600}
              height={900}
            />
          </div>
          <div className="ml-12 flex-1 text-white">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <br /> {/* Add an empty line here */}
            <p className="text-2xl">
              <strong className="text-3xl">
                {new Date(movie.release_date) > new Date()
                  ? "Unreleased"
                  : "Released"}
                :
              </strong>{" "}
              {new Date(movie.release_date).getFullYear()}
            </p>
            <p className="text-2xl">
              <strong className="text-3xl">Rating:</strong> ⭐{" "}
              {movie.vote_average.toString().slice(0, 3)}
            </p>
            <p className="text-2xl">
              <strong className="text-3xl">Genre:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-2xl">
              <strong className="text-3xl">Runtime:</strong> {movie.runtime}{" "}
              minutes
            </p>
            <br /> {/* Add an empty line here */}
            <p className="text-2xl">
              <strong className="text-3xl">Plot:</strong> <br />{" "}
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
