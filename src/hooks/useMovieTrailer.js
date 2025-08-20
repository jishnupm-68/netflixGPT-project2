import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_TRAILER_URL } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer =()=>{
      
    const dispatch = useDispatch();
    const getMovieVideo = async()=>{
        const data = await fetch(TMDB_TRAILER_URL, TMDB_API_OPTIONS);
        const json = await data.json();
        const filteredTrailer = json?.results?.filter((video)=>video?.type==="Trailer")
        const trailer = filteredTrailer.length?filteredTrailer[0]:json?.results[0]
        dispatch(addTrailer(trailer))
    }
    
    useEffect(()=>{
        getMovieVideo()
    },[])
}


export default useMovieTrailer