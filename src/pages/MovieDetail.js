import React from 'react'
import { useParams } from 'react-router'
import { useGetMovieVideoQuery } from '../features/movie_api';

const MovieDetail = () => {
  const { id } = useParams();
  const { data } = useGetMovieVideoQuery(id);


  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${data?.results[0].key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  )
}

export default MovieDetail
