import React from "react";
import Cooky from '../bt21/cooky.gif';
import Kev from '../imagenes/kev.jpg';
export default function Kevin(){
    return(
        <div className="person-perfilKook">
            <h1>hola yo soy Kevin</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Kevin gracias por ver mi perfil</i></marquee>
            <img src={Cooky} width="300px" height="300px"/>  
            <img src={Kev} width="300px" height="300px"/>
        </div>
    );
}