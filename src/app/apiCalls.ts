import dotenv from "dotenv";
import type { Movie, MovieData } from "./Interfaces";

dotenv.config();

let apiKey = process.env.TMDB_API_KEY as string;
const baseUrl = "https://api.themoviedb.org/3";

export function getGenres(emotion: string): string[] {
  const emotionMap: { [key: string]: string[] } = {
    Angry: ["Action", "Thriller"],
    Disgust: ["Horror", "Gore"],
    Fear: ["Horror", "Suspense"],
    Happy: ["Comedy", "Romantic Comedy", "Animated"],
    Neutral: ["Documentary", "Biography"],
    Sad: ["Drama", "Romance"],
    Surprise: ["Mystery", "Science Fiction"],
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
    if (apiKey === undefined) {
      apiKey = "1821d649b656b8933a7de260fcf28ee1";
    }
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${concatenatedString}&page=${i}&per_page=20`;

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

export const getMovieDetails = async (movieId: string): Promise<Movie> => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
  console.log(url);

  const response = await fetch(url);
  const movie = (await response.json()) as Movie;

  console.log(movie);

  return movie;
};

export const uploadImage = async () => {
  const url = "http://localhost:8000/upload/";
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ time: new Date().toISOString() }),
  });
  console.log(res);
};
