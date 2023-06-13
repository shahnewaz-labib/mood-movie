import { Montserrat } from "next/font/google";
import MovieContainer from "./MovieContainer";
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

function Home() {
  return (
    <div
      className={` ${montserrat.variable} font-montserrat flex justify-center bg-black `}
    >
      <div className="text-center">
        <h1 className="font-bold text-white">Mood-Movie</h1>

        <MovieContainer />
        {/* <MovieCard /> */}
      </div>
    </div>
  );
}

export default Home;
