import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPageination from "../../components/Pagination/CustomPagination"
import Genres from '../../components/Genres';
import useGenre from '../../hooks/useGenre';


const Movies = () => {

  const [page,setPage] = useState(1)

  const [content,setContent] =useState([])

  const [numOfPages,setNumOfPages] = useState()

  const [selectedGenres,setSelectedGenres] = useState([])

  const [genres,setGenres] = useState([])

  const genreforURL = useGenre(selectedGenres)

  const fetchMovies = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5b1c34ab42822e20b4c8133dca93621c&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreforURL}`)

    // console.log(data);

    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies()
  },[page,genreforURL])

  return (
    <div>
      <div className='pageTitle'>Movies</div>

      <Genres
        type = "movie"
        selectedGenres = {selectedGenres}
        setSelectedGenres = {setSelectedGenres}
        genres = {genres}
        setGenres = {setGenres}
        setPage = {setPage}
      />

      <div className='trending'>
        {content && content.map((c) => (
          <SingleContent 
          key={c.id} 
          id={c.id} 
          poster={c.poster_path || c.backdrop_path} 
          title={c.title || c.name} 
          date={c.first_air_date || c.release_date}
          media_type="movie"
          vote_average={c.vote_average.toFixed(1)}
          />
        ))}

        </div>

        {numOfPages > 1 && (
          <CustomPageination setPage={setPage} />
        )}

    </div>
  )
}

export default Movies
