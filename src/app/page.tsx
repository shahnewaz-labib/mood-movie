import { Montserrat } from "next/font/google";
import MovieCard from "./MovieCard";
import MovieContainer from "./MovieContainer";
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const Home = () => {

  interface Movie {
    id: number;
    title: string;
    // Add other properties if available in the response
  }
  
  const apiKey = '1821d649b656b8933a7de260fcf28ee1';
  const baseUrl = 'https://api.themoviedb.org/3';
  const genreId = 28; // Genre ID for Action movies
  
  const fetchActionMovies = async (): Promise<Movie[]> => {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
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
  
  // Usage
  fetchActionMovies()
    .then((actionMovies) => {
      console.log(actionMovies);
    })
    .catch((error) => {
      console.error(error);
    });
  



  return (
    <div
      className={` ${montserrat.variable} font-montserrat flex h-screen justify-center bg-slate-300 `}
    >
      <div className="text-center">
        <h1 className="font-bold text-white">Mood-Movie</h1>
        
        <MovieContainer />
        <MovieCard />
      </div>
    </div>
  );
};

export default Home;
