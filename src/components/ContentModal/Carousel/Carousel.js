// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { img_300, noPicture } from '../../../Config/Config';
// import "./Carousel.css"

// const handleDragStart = (e) => e.preventDefault();

// const Gallery = ({media_type,id}) => {

// 	const [credits,setCredits] = useState()

// 	//为什么下面要加？
// 	const items = credits?.map((c) => (
// 		<div className='carouselItem'>
// 			<img 
// 			  src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
// 			  alt={c.name}
// 			  onDragStart={handleDragStart}
// 			  className='carouselItem_img'
// 			/>
// 			<b className='carouselItem_txt'>
// 				{c?.name}
// 			</b>
// 		</div>
// 	))

// 	const responsive = {
// 		0:{
// 			item:3,
// 		},
// 		512:{
// 			item:5,
// 		},
// 		1024:{
// 			item:7,
// 		},
// 	}

// 	const fetchCredits = async () => {
// 		const {data} = await axios.get(
// 			`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=5b1c34ab42822e20b4c8133dca93621c&language=en-US`
// 		)
// 		setCredits(data.cast)
// 	}

// 	useEffect(() => {
// 		fetchCredits()
// 	},[])



// 	return <AliceCarousel 
// 	disableButtonsControls 
// 	disableDotsControls 
// 	infinite 
// 	autoPlay 
// 	responsive={responsive} 
// 	mouseTracking 
// 	items={items} 
// 	/>;
// };

// export default Gallery;




// const items = [
// 	<img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
// 	<img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
// 	<img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
// ];




import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from '../../../Config/Config';
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Gallery;