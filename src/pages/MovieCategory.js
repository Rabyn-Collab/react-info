import React from 'react'
import { useParams } from 'react-router'
import { useGetMovieByCategoryQuery } from '../features/movie_api';

const MovieCategory = () => {
  const { category } = useParams();
  const { isError, isLoading, error, data } = useGetMovieByCategoryQuery(category);
  if (isLoading) {

  }

  return (
    <div className='grid grid-cols-4 gap-4 p-5'>
      {data && data.results.map((movie) => {
        return <div key={movie.id} className='shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer'>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" />
          <div className='p-4'>
            <h1 className='text-2xl font-bold'>{movie.title ?? movie.name}</h1>
            <p>{movie.overview.substring(0, 60) + '....'}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default MovieCategory
