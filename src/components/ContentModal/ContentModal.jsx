import React, {useState, useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Box, Modal, Fade, Button } from '@mui/material/';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import { unavailable, img_500, unavailableLandscape } from '../../config/config';
import { ModalWrapper, Tagline, ModalAbout, ModalTitle, ModalDescription} from "./ContentModal.styled";
import {CarouselWithImg} from "../../components/Carousel"

const style = {
    position: "absolute",
    top: 0,
    left: 0,
    transform: 'translate(5%, 5%)',
    width: '90vw',
    height: '90vh',
    overflowY: "scroll",
    scrollbarWidth: "hidden",
    borderRadius: "10px",
    border: "none",
   
};

export default function ContentModal({  media_type, id, name, children}) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();
    

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const fetchData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=8e0288e6c002e9adeca41ab040f8eda1&language=en-US`);
        setContent(data);
    };

    const fetchVideo = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=8e0288e6c002e9adeca41ab040f8eda1&language=en-US`);
        setVideo(data.results[0]?.key);
  };

    useEffect(() => {
        fetchData();
        fetchVideo();
        // eslint-disable-next-line
    }, [])

  return (
    <>
    
          <div onClick={handleOpen}>
              {children}
          </div>
          
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Fade in={open}>
                  
        {content && (
        <Box sx={style}>
          <ModalWrapper >
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
            
            <ModalAbout>
                <ModalTitle>
                    {content.name || content.title}(
                    {(content.first_air_date || content.release_date || "----").substring(0,4)}
                    )
                </ModalTitle>
                                  
                  {content.tagline && (<Tagline><i>{content.tagline}</i></Tagline>)}
                                  
                  <ModalDescription>{content.overview}</ModalDescription>
                                 
                  <div>
                    <CarouselWithImg media_type={media_type} id={id} />
                  </div>

                
                  <iframe src={`https://www.youtube.com/embed/${video}`}
                    id={id}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title={name}
                    className="YouTubePlayer"
                  />
                  
                                  
                  <Button variant="contained"
                      startIcon={<YouTubeIcon />}
                      color="secondary"
                      target="__blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                      sx={{margin: "15px auto 0 auto"}}
                  >
                   Watch the Trailer on YouTube
                  </Button>
              </ModalAbout>
          </ModalWrapper>
        </Box>
        )}
          
      </Fade>
    </Modal>
  </>
  );
}