"use client";
import MovieContainer from "~/app/MovieContainer";
import { getGenres } from "~/app/apiCalls";
export default function Page({ params }: { params: { emotion: string } }) {
  const genres = getGenres(params.emotion);

  return (
    <div>
      <div className="p-8 text-4xl">
        Recommending movies based on emotion: {params.emotion}
        <div className="flex-row">
          Showing movies from genres:{" "}
          {genres.map((genre) => (
            <span key={genre} style={{ marginRight: "10px" }}>
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
