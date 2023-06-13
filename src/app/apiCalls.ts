export interface Movie {
  id: number;
  title: string;
  // Add other properties if available in the response
}
export interface MovieData {
  results: Movie[];
  status_message: string;
}

const apiKey = "1821d649b656b8933a7de260fcf28ee1";
const baseUrl = "https://api.themoviedb.org/3";
const genreId = 28; // Genre ID for Action movies

export const fetchActionMovies = async (): Promise<Movie[]> => {
  const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
  console.log(url);

  try {
    const response = await fetch(url);
    const data = (await response.json()) as MovieData;

    if (response.ok) {
      const actionMovies: Movie[] = data.results;
      return actionMovies;
    } else {
      throw new Error(data.status_message);
    }
  } catch (error) {
    throw new Error(`Failed to fetch action movies: ${error.message}`);
  }
};
