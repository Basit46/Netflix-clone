import React, { useState, useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight, MdDelete } from "react-icons/md";
import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { useAuthContext } from "../context/authContext";

const Account = () => {
  const { user } = useAuthContext();

  const slideRef = useRef();

  const scrollLeft = () => {
    const slide = slideRef.current;
    slide.scrollLeft = slide.scrollLeft - 200;
  };

  const scrollRight = () => {
    const slide = slideRef.current;
    slide.scrollLeft = slide.scrollLeft + 200;
  };

  const [movies, setMovies] = useState([]);

  const deleteMovie = (id) => {
    const filtered = movies.filter((movie) => movie.id !== id);
    setMovies(filtered);
    updateDoc(doc(db, "users", user), {
      savedMovies: filtered,
    });
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", user), (doc) => {
      setMovies(doc.data().savedMovies);
    });
  }, [user]);

  return (
    <div>
      <div className="relative bg-loginBg h-[60vh] bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      </div>
      <h1 className="text-[2rem] font-bold mt-3 mb-2">
        {movies?.length} Saved Movies
      </h1>
      <div className="flex relative w-screen mb-3">
        <MdChevronLeft
          onClick={scrollLeft}
          className="hidden sm:block absolute z-[100] left-0 w-[30px] text-red-600 bg-black h-full"
        />
        <div
          ref={slideRef}
          className="w-full overflow-scroll scroll-smooth scrollbar-hide "
        >
          <div className="flex w-fit">
            {movies.map((movie) => (
              <div className="relative w-[300px] h-[180px] mr-2 cursor-pointer">
                <img
                  className="h-full w-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie?.img}`}
                  alt={movie?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white grid place-items-center">
                  <p>{movie?.title}</p>
                </div>
                <MdDelete
                  onClick={() => deleteMovie(movie.id)}
                  className="absolute top-0 right-0 h-7 w-7"
                />
              </div>
            ))}
          </div>
        </div>
        <MdChevronRight
          onClick={scrollRight}
          className="hidden sm:block absolute right-0 z-[100] w-[30px] text-red-600 bg-black h-full"
        />
      </div>
    </div>
  );
};

export default Account;
