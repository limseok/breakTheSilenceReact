import React from "react";
import Cooky from '../bt21/cooky.gif';
import Kev from '../imagenes/kev.jpg';
import Iconos from "../components/Iconos";
export default function Kevin(){
    return(
        <div className="person-perfilKook">
            <h1>hola yo soy Kevin</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Kevin gracias por ver mi perfil</i></marquee>
            <img src={Cooky} width="300px" height="300px"/>  
            <img src={Kev} width="300px" height="300px"/>
            <Iconos face='https://www.facebook.com/search/top?q=kevin%20ju%C3%A1rez'
                    yout=''
                    insta='https://www.instagram.com/j.jkev_7/'
                    tik='https://www.tiktok.com/@stillwith_u.kj'/>
        </div>
    );
}