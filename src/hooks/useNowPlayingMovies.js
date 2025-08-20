import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { TMDB_API_OPTIONS, TMDB_URL } from '../utils/constant';


const useNowPlayingMovies =()=>{
      const dispatch = useDispatch();
      const getNowPlayingMovies = async()=>{
          const data = await fetch(TMDB_URL,TMDB_API_OPTIONS)
          const jsonData= await data.json();
          dispatch(addNowPlayingMovies(jsonData.results))
      }
      useEffect(()=>{
        getNowPlayingMovies()
      },[])
      

    
}

export default useNowPlayingMovies