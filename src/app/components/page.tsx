import { Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const Home = () => {
  return (
    <div
      className={` ${montserrat.variable} font-montserrat flex h-screen justify-center bg-black `}
    >
      <div className="text-center">
        <h1 className="font-bold text-white">Page2</h1>

        <p className=" text-white">Yet Another To (and) Do App</p>
      </div>
    </div>
  );
};

export default Home;
