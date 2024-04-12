
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPageination from "../../components/Pagination/CustomPagination"

const Series = () => {

  const [page,setPage] = useState(1)

  const [content,setContent] =useState([])

  const [numOfPages,setNumOfPages] = useState()

  const fetchSeries = async () => {
    
    const {data} = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)

    // console.log(data);

    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchSeries()
  },[page])

  return (
    <div>
      <div className='pageTitle'>Popular TV Series</div>

      <div className='trending'>
        {content && content.map((c) => (
          <SingleContent 
          key={c.id} 
          id={c.id} 
          poster={c.poster_path || c.backdrop_path} 
          title={c.title || c.name} 
          date={c.first_air_date || c.release_date}
          media_type="tv"
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

export default Series
