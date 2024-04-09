import React from 'react'
import Pagination from "@material-ui/lab/Pagination"
import { ThemeProvider , createTheme } from '@material-ui/core'

const theme = createTheme()

const CustomPagination = ({setPage,numOfPages = 20}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }

  return (
    <div style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        marginTop:"10px"
    }
    }>
        <ThemeProvider theme={theme}>
          <Pagination 
            count={numOfPages} 
            onChange={(e) => handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color='primary'
          />
        </ThemeProvider>
    </div>
  )
}

export default CustomPagination
