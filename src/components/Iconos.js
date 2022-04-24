import React from "react";
import facebook from '../iconos redes sociales/facebook.png';
import youtube from '../iconos redes sociales/youtube.png';
import instagram from '../iconos redes sociales/instagram.png';
import tiktok from '../iconos redes sociales/tiktok.png';
import './Iconos.css';
export default function Iconos({ face, yout, insta, tik }) {
    return(
        <div className="social-items">
            <a className="social-item" href={face}><img src={facebook}/></a>
            <a className="social-item" href={yout}><img src={youtube}/></a>
            <a className="social-item" href={insta}><img src={instagram}/></a>
            <a className="social-item" href={tik}><img src={tiktok}/></a>            
        </div>
    )
}