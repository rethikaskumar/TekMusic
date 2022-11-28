import {IconButton } from "@mui/material";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer(){
    return(
        <div className="icon-i">
            <div > 
                <IconButton href="https://www.instagram.com/tekmusicpsg/?hl=en" target="_blank"><InstagramIcon className="icon"/></IconButton>
                <IconButton href="https://www.facebook.com/tekmusicpsg" target="_blank"><FacebookIcon className="icon"/></IconButton>
                <IconButton href="https://www.youtube.com/c/tekmusicpsg" target="_blank"><YouTubeIcon className="icon"/></IconButton>
            </div>
        </div>
    )
}

