import dotenv from "dotenv";
import type { Movie, MovieData } from "./Interfaces";

dotenv.config();

const apiKey = process.env.TMDB_API_KEY as string;
const baseUrl = "https://api.themoviedb.org/3";

function getGenres(emotion: string): string[] {
  const emotionMap: { [key: string]: string[] } = {
    Angry: ["Action"],
    Happy: ["Drama", "Comedy"],
    Sad: ["Drama"],
  };

  const resultArray = emotionMap[emotion];

  if (resultArray === undefined) {
    return ["No movies found"];
  }

  return resultArray;
}

export const fetchMovies = async (emotion: string): Promise<Movie[]> => {
  const genres = getGenres(emotion);

  let concatenatedString = "";
  let separator = "";

  genres.forEach((element: string) => {
    concatenatedString += separator + element;
    separator = "%2C";
  });

  let allMovies: Movie[] = [];

  for (let i = 1; i <= 3; i++) {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${concatenatedString}&page=${i}&per_page=20`;
    console.log(url);
    try {
      const response = await fetch(url);
      const data = (await response.json()) as MovieData;

      if (response.ok) {
        const movies: Movie[] = data.results;
        allMovies = allMovies.concat(movies);
      } else {
        throw new Error(data.status_message);
      }
    } catch (error: unknown) {
      throw new Error(`Failed to fetch movies`);
    }
  }

  return allMovies;
};

export const uploadImage = async () => {
  const url = "http://localhost:8000/upload/";
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ time: new Date().toISOString() }),
  });
  console.log(res);
};
