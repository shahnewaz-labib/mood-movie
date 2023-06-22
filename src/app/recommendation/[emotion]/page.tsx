"use client";
import MovieContainer from "~/app/MovieContainer";
import { getGenres } from "~/app/apiCalls";

export default function Page({ params }: { params: { emotion: string } }) {
  const genres = getGenres(params.emotion);

  return (
    <div>
      <div className="p-8 text-4xl">
        Recommending movies based on emotion:{" "}
        <span className="text-blue-500">{params.emotion}</span>
        <div className="flex-row">
          Showing movies from genres:
          {genres.map((genre) => (
            <span
              key={genre}
              className="mx-1 inline-block rounded-md bg-gray-200 px-2 py-1 text-xl font-medium text-gray-700"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
      <div>
        <MovieContainer emotion={params.emotion} />
      </div>
    </div>
  );
}
