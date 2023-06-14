import Image from "next/image";
import React from "react";
import type { MovieCardProps } from "./Interfaces";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const basePosterUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";
  return (
    <div className="card w-96 bg-black p-4 shadow-xl">
      <figure className="h-full">
        <Image
          className="h-full w-full"
          src={basePosterUrl + movie.poster_path}
          alt="Shoes"
          width={240}
          height={360}
          // fill={true}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
