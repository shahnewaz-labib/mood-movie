// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import type { MovieData } from "../Interfaces";

// // interface MovieDetails {
// //   title: string;
// //   overview: string;
// //   // Add other properties according to your movie details structure
// // }

// const MovieDetailsPage: React.FC = () => {
//   const router = useRouter();
//   const movieId: string = router.query.movieid; // Access the movie ID from the router
//   console.log(movieId);

//   const [movieDetails, setMovieDetails] = useState<MovieData | null>(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         // Fetch movie details based on the movie ID
//         // You can use API routes or any data fetching method of your choice
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
//         );
//         const data = (await response.json()) as MovieData;

//         if (response.ok) {
//           setMovieDetails(data);
//         } else {
//           throw new Error("Error while fetching movie details");
//         }
//       } catch (error) {
//         console.error("Failed to fetch movie details:", error);
//       }
//     };

//     if (movieId) {
//       //   fetchMovieDetails();
//       console.log("FETCH NOW");
//     }
//   }, [movieId]);

//   if (!movieDetails) {
//     // Show loading state or return a loading component
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* Display movie details using movieDetails object */}
//       {/* <h1>{movieDetails.title}</h1>
//       <p>{movieDetails.overview}</p> */}
//       {/* ...Other movie details */}
//       <p>MOVIEEEEEEEEEEEEEEEEEEEEE</p>
//     </div>
//   );
// };

// export default MovieDetailsPage;
