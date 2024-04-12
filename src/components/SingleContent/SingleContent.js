import React from 'react'
import { img_300 , unavailable } from '../../Config/Config'
import "./SingleContent.css"
import { Badge } from '@material-ui/core'
import ContentModal from '../ContentModal/ContentModal'

const SingleContent = (
    {
        id,
        poster,
        title,
        date,
        media_type,
        vote_average
    }
) => {
    
  return (
    <ContentModal media_type={media_type} id={id} >
      <img 
      className='poster'
      src={poster ? `${img_300}/${poster}` : unavailable} 
      alt={title}
      />
      <Badge badgeContent={vote_average} color={vote_average >= 7 ? "primary" : "secondary"} overlap="rectangular"/>
      <b className="title">{title}</b>
      <div className='subTitle'>
        {media_type === "tv" ? "Tv" : "Movie"}
        <div className='subTitle'>{date}</div>
      </div>
    </ContentModal>
  )
}

export default SingleContent


