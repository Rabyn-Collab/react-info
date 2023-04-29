import React from 'react'
import { useLocation, useParams } from 'react-router'
import { useGetMovieVideoQuery } from '../features/movie_api';

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMovieVideoQuery(id);
  const { state } = useLocation();
  if (isLoading) {
    return <div className='h-[500px] w-[500px] mx-auto top-10'>
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_17BtrJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${state.backdrop_path})` }} className='h-screen absolute top-0 w-full  bg-no-repeat bg-cover'>
      <div className=' py-[5%] px-[2%] '>
        <iframe className='w-[60%]  aspect-video' src={`https://www.youtube.com/embed/${data?.results[0]?.key}`
        } allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe >

      </div>

    </div >
  )
}

export default MovieDetail
