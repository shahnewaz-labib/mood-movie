import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { MovieCardProps } from "./Interfaces";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const basePosterUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

  return (
    <Link href={`/details/${movie.id}`}>
      <div className="card w-96 cursor-pointer bg-black p-4 shadow-xl hover:bg-gray-100 hover:text-black">
        <figure className="h-full">
          <Image
            className="h-full w-full"
            src={basePosterUrl + movie.poster_path}
            alt="Shoes"
            width={240}
            height={360}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {movie.title + " (" + movie.release_date.slice(0, 4) + ")"}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
