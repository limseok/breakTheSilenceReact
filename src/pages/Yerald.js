import React from "react";
import Tata from '../bt21/tata.gif';
import Loading from '../imagenes/yerald.jpg';
import Iconos from "../components/Iconos";
export default function Yerald(){
    return(
        <div className="person-perfilV">
            <h1>Hola yo soy Yerald</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Yerald gracias por ver mi perfil</i></marquee>
            <img src={Tata} width="300px" height="300px"/>  
            <img src={Loading} width="300px" height="300px"/>
            <Iconos face='https://www.facebook.com/profile.php?id=100009928573240'
                    yout=''
                    insta='https://www.instagram.com/yeraldh.quispe/'
                    tik='https://www.tiktok.com/@yerald_047'/>
        </div>
    );
}