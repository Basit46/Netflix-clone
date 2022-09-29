import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../firebase";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../context/authContext";
import replace from "../images/replace.png";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, height }) => {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const [liked, setLiked] = useState(false);

  const handleSave = () => {
    if (user) {
      setLiked((prev) => !prev);
      updateDoc(doc(db, "users", user), {
        savedMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("You must create an account First");
    }
  };

  const getMovieDetails = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div>
      <div
        className={`relative sm:hover:scale-105 duration-300 w-[300px] ${
          height ? "h-full" : "h-[180px]"
        } mr-4 cursor-pointer`}
      >
        <img
          className="h-full w-full object-cover"
          src={
            movie
              ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
              : replace
          }
          alt={movie?.title}
        />
        <div
          onClick={getMovieDetails}
          className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white grid place-items-center"
        >
          <p>{movie?.title}</p>
        </div>
        <div onClick={handleSave} className="absolute right-[5px] top-1 ">
          {liked ? (
            <FaHeart className="w-[30px] h-[30px] text-red-600" />
          ) : (
            <FaRegHeart className="w-[30px] h-[30px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
