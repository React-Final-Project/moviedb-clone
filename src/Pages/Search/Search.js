import { Tab, Tabs, TextField, createTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@material-ui/core'
import { Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';

const Search = () => {

  const [type,setType] =useState(0)

  const [page,setPage] =useState(1)

  const [searchText,setSearchText] = useState("")

  const [content,setContent] = useState()

  const [numOfPages,setNumOfPages] =useState()

  const darkTheMe = createTheme({
    palette:{
      type:"dark",
      primary:{
        main:"#fff"
      }
    }
  })

  const fetchSearch = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=5b1c34ab42822e20b4c8133dca93621c&include_adult=false&language=en-US&page=${page}&query=${searchText}`)

    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0,0)
    fetchSearch()
  },[type,page])

  return (
    <div>

      <ThemeProvider theme={darkTheMe}>
        <div style={{display:"flex" , margin:"15px 0"}}>
          <div className='pageTitle'>
            <TextField
              style={{flex:"1"}}
              className='searchBox'
              label="Search"
              variant='filled'
              onChange={(e) => setSearchText(e.target.value)}
            />

            <Button 
            variant="contained" 
            style={{marginLeft:10}}
            onClick={fetchSearch}
            >
              <SearchIcon/>
            </Button>
          </div>

        </div>

        <Tabs 
          value={type} 
          indicatorColor='primary' 
          textColor='primary'
          onChange={(event,newValue) => {
            setType(newValue)
            setPage(1)
          }}
          style={{paddingBottom:5}}
        >
          <Tab style={{width:"50%"}} label="Search Movies"/>
          <Tab style={{width:"50%"}} label="Search TV series"/>
        </Tabs>

      </ThemeProvider>

      <div>
        {content && content.map((c) => (
          <SingleContent
            key={c.id} 
            id={c.id} 
            poster={c.poster_path || c.backdrop_path} 
            title={c.title || c.name} 
            date={c.first_air_date || c.release_date}
            media_type={type ? "tv" : "movie"}
            vote_average={c.vote_average.toFixed(1)}
          />
          ))}
          {searchText && 
          content.length < 1 && 
          (type ? <h2>No Series found</h2> :   <h2>No Movies found</h2>)}
      </div>

      {numOfPages > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}

    </div>
  )
}

export default Search


