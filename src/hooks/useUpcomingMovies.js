
import { useDispatch } from "react-redux"
import { TMDB_API_OPTIONS, TMDB_UPCOMING_MOVIES_URL } from "../utils/constant"
import { addUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"


const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    const getUpcomingMovies = async()=>{
        const data = await fetch(TMDB_UPCOMING_MOVIES_URL, TMDB_API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData.results))
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;
