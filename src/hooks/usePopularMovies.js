import { useDispatch } from "react-redux"
import { TMDB_API_OPTIONS, TMDB_POPULAR_URL } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

//function for fetching popular movies
const usePopularMovies = async () => {
    const dispatch = useDispatch();
    const getPopularMovies = async()=>{
        const data = await fetch(TMDB_POPULAR_URL,TMDB_API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results))
    }
    useEffect(()=>{
        getPopularMovies();
    },[])

}

export default usePopularMovies
