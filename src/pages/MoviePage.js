import React from 'react'
import { useGetMovieByPageQuery } from '../features/movie_api'
import { useNavigate, useParams } from 'react-router';

const MoviePage = () => {
  const nav = useNavigate();
  const { category, page } = useParams();
  const { isError, isLoading, data } = useGetMovieByPageQuery({
    category,
    page
  });


  if (isLoading) {
    return <div className='h-[500px] w-[500px] mx-auto top-10'>
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_17BtrJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <>
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
      <div className='flex justify-center space-x-5 pb-4'>
        {data?.page > 1 && <button onClick={() => nav(-1)}>Prev</button>}
        <h1>{data?.page}</h1>
        <button onClick={() => nav(`/movie/${category}/${data.page + 1}`)}>Next</button>
      </div>


    </>
  )
}

export default MoviePage