import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';

const MainContainer = () => {
  const movies = useSelector(store =>store?.movies?.nowPlayingMovies)
  if(movies===null) return
  const mainMovie = movies[0];
  const {original_title, overview} = mainMovie;
  return (
    <div className=' w-screen'>
      <VideoTitle  title={original_title} overview={overview}/>
      <VideoBG />
    </div>
  );
}

export default MainContainer
