import React from 'react'
import { TMDB_IMAGE_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 px-1 py-1  ' >
      <img alt="movie" src={TMDB_IMAGE_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard
