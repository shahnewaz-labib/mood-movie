import type { Movie, MovieData } from "./Interfaces";

const apiKey = "1821d649b656b8933a7de260fcf28ee1";
const baseUrl = "https://api.themoviedb.org/3";

function getGenres(emotion: string): string[] {
  const emotionMap: { [key: string]: string[] } = {
    Angry: ["Action", "Comedy"],
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

  const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${concatenatedString}`;

  try {
    const response = await fetch(url);
    const data = (await response.json()) as MovieData;

    if (response.ok) {
      const movies: Movie[] = data.results;
      return movies;
    } else {
      throw new Error(data.status_message);
    }
  } catch (error: unknown) {
    throw new Error(`Failed to fetch action movies`);
  }
};
