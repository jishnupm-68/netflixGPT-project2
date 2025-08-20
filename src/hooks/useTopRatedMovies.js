import { useDispatch } from "react-redux"
import { TMDB_API_OPTIONS, TMDB_TOP_RATED_URL } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async ()=>{
        const data = await fetch(TMDB_TOP_RATED_URL,TMDB_API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results))
    }
    useEffect(()=>{
        getTopRatedMovies()
    },[])
}

export default useTopRatedMovies
