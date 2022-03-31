import React from "react";
import Tata from '../bt21/tata.gif';
import Loading from '../imagenes/yerald.jpg';
export default function Yerald(){
    return(
        <div className="person-perfilV">
            <h1>Hola yo soy Yerald</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Yerald gracias por ver mi perfil</i></marquee>
            <img src={Tata} width="300px" height="300px"/>  
            <img src={Loading} width="300px" height="300px"/>
        </div>
    );
}