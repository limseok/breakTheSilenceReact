import React from "react";
import Chimmy from '../bt21/chimmy.gif';
import jhey from '../imagenes/jhey.jpg';
export default function Jhey(){
    return(
        <div className="person-perfilJimin">
            <h1>hola yo soy Jhey</h1>
            <marquee behavior="alternate"><i>hola yo me llamo jhey gracias por ver mi perfil</i></marquee>
            <img src={Chimmy} width="300px" height="300px"/>  
            <img src={jhey} width="300px" height="300px"/>
        </div>
    );
}