import Image from "next/image";
import React from "react";
import type { MovieCardProps } from "./Interfaces";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_240x360_crop_center.progressive.jpg"
          alt="Shoes"
          width={240}
          height={360}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
