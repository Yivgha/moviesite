import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from '../../config/config';
import { CarouselItem, CarouselText } from "./Carousel.styled";

const handleDragStart = (e) => e.preventDefault();

export const CarouselWithImg = ({ media_type, id }) => {

    const [credits, setCredits] = useState([]);

    const items = credits?.map((c) => (
        <CarouselItem>
        <img src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                alt={c?.name}
                onDragStart={handleDragStart}
                className="carouselImg"
            />
            <CarouselText>{c?.name}</CarouselText>
        </CarouselItem>
    ));


    const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 3,
    },
    1024: {
      items: 7,
    },
    };
    
    const fetchCredits = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=8e0288e6c002e9adeca41ab040f8eda1&language=en-US`);
        setCredits(data.cast);
    }

    useEffect(() => {
        fetchCredits();
        // eslint-disable-next-line
    }, [])
  return (
    <AliceCarousel  mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
      // sx={{width: "100%", height: "100%"}}
       />
  );
}