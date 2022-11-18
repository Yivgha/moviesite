import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import { Title, MediaType, MediaContent } from "./SingleContent.styled";


export const SingleContent = ({id, poster, title, date, media_type, vote_average}) => {
    return (
        <ContentModal media_type={media_type} id={id} >
            <MediaContent> 
            <Badge badgeContent={vote_average.toFixed(1)} color={vote_average > 6 ? "success" : "warning"}></Badge>
            <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} width="100%" sx={{borderRadius: "10px"}}/>
            <Title>"{title}"</Title>
                <MediaType> <span>{media_type === "tv" ? "TV Series" : "Movie"}</span> <span>({date.substring(0, 4)})</span></MediaType>
                </MediaContent>
        </ContentModal>
    )
}