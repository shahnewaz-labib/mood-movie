import { Montserrat } from "next/font/google";
import MovieCard from "./MovieCard";
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const Home = () => {
  return (
    <div
      className={` ${montserrat.variable} font-montserrat flex justify-center bg-black `}
    >
      <div className="text-center">
        <h1 className="font-bold text-white">Yatada!</h1>

        <p className=" text-white">Yet Another To (and) Do App</p>
        <MovieCard />
      </div>
    </div>
  );
};

export default Home;
