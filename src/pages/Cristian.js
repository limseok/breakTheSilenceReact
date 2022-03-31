import React from "react";
import Koya from '../bt21/koya.gif';
import Ramon from '../imagenes/ramon.jpg';
export default function Cristian(){
    return(
        <div className="person-perfilRamon">
            <h1>hola yo soy Cristian</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Cristian gracias por ver mi perfil</i></marquee>
            <img src={Koya} width="300px" height="300px"/>  
            <img src={Ramon} width="300px" height="300px"/>
        </div>
    );
}
