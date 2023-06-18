import { Montserrat } from "next/font/google";
import MovieContainer from "./MovieContainer";
import Navbar from "./Navbar";
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

function Home() {
  return (
    <div className={` ${montserrat.variable} font-montserrat  `}>
      <Navbar />
      <MovieContainer />
      {/* <MovieCard /> */}
    </div>
  );
}

export default Home;
