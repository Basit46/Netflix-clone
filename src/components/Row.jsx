import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ rowName, url, height }) => {
  const slideRef = useRef();

  const scrollLeft = () => {
    const slide = slideRef.current;
    slide.scrollLeft = slide.scrollLeft - 500;
  };

  const scrollRight = () => {
    const slide = slideRef.current;
    slide.scrollLeft = slide.scrollLeft + 500;
  };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, [url]);
  return (
    <div className="w-full mt-2 mb-[20px]">
      <p className="text-2xl font-bold mb-1">{rowName}</p>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={scrollLeft}
          className="hidden md:group-hover:block  duration-700 absolute left-0 z-50 bg-black text-red-600 w-[40px] h-full"
        />
        <div
          ref={slideRef}
          className="w-full overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          <div className="flex w-fit h-fit">
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} height={height} />
            ))}
          </div>
        </div>
        <MdChevronRight
          onClick={scrollRight}
          className="hidden md:group-hover:block duration-700 absolute right-0 z-50 pr-1 bg-black text-red-600 w-[50px] h-full"
        />
      </div>
    </div>
  );
};

export default Row;
