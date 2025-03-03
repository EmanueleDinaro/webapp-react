import { useEffect, useState } from "react";
import axios from "../services/axios";
import Cards from "../components/Cards";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  function moviesFetch() {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  }

  useEffect(moviesFetch, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-12 gap-4 p-4">
          <div className=" col-span-12 md:col-span-6 lg:col-span-4 mx-auto bg-neutral-100 w-80 h-150 p-2 rounded-2xl static drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
            <div className=" bg-neutral-300 h-full p-2 rounded-2xl flex">
              <div className="bg-neutral-100 w-60 h-3/4 rounded-full mx-auto mt-4 flex items-center justify-center">
                <span className="text-[150px]">
                  <i class="fa-solid fa-plus text-neutral-500 hover:text-neutral-700 transition-all duration-300 hover:scale-110"></i>
                </span>
              </div>
            </div>
          </div>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto"
            >
              <Cards
                image={movie.image}
                title={movie.title}
                director={movie.director}
                abstract={movie.abstract}
              ></Cards>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
