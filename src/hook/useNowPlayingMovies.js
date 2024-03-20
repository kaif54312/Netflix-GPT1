import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { NOW_PLAYING_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {
    const Data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      NOW_PLAYING_OPTIONS
    );
    const JSON = await Data.json();
    console.log(JSON);
    dispatch(addNowPlayingMovies(JSON));
  };
};

export default useNowPlayingMovies;