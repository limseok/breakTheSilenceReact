import React from "react";
import Shooky from '../bt21/shooky.gif';
import Lucho from '../imagenes/lucho1.jpg';

export default function Yamil(){
    return(
        <div className="person-perfilSuga">
            <h1>hola yo soy Yamil</h1>                
            <marquee behavior="alternate"><i>hola yo me llamo Yamil gracias por ver mi perfil</i></marquee>        
            <img imagen={Shooky} src={Shooky} width="300px" height="300px"/>  
            <img src={Lucho} width="300px" height="300px"/> 
        </div>
    );
}