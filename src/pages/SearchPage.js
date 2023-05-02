import React from 'react'
import { useParams } from 'react-router'
import { useGetSearchMovieQuery } from '../features/movie_api';
import { Image, Shimmer } from 'react-shimmer';

const SearchPage = () => {
  const { searchText } = useParams();

  const { isLoading, isError, error, data } = useGetSearchMovieQuery(searchText);

  if (isLoading) {
    return <div className='h-[500px] w-[500px] mx-auto top-10'>
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_17BtrJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (

    <div className='grid grid-cols-4 gap-4 p-5'>
      {data && data.results.map((movie) => {
        return <div key={movie.id} className='shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer'>
          <Image
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            fallback={<Shimmer width={300} height={400} duration={4} />}
          />

          <div className='p-4'>
            <h1 className='text-2xl font-bold'>{movie.title ?? movie.name}</h1>
            <p>{movie.overview.substring(0, 60) + '....'}</p>
          </div>
        </div>
      })}
    </div>




  )
}

export default SearchPage
