import React from "react";
import Chimmy from '../bt21/chimmy.gif';
import jhey from '../imagenes/jhey.jpg';
import Iconos from "../components/Iconos";
import Datos from '../datos.json';
export default function Jhey(){
    return(
        <div className="person-perfilJimin">
            <h1 className="titulo-jhe">hola yo soy Jhey</h1>
            <marquee behavior="alternate"><i>hola yo me llamo jhey gracias por ver mi perfil</i></marquee>
            <img className="img" src={Chimmy} width="300px" height="300px"/>  
            <img className="img" src={jhey} width="300px" height="300px"/>
            <div className="map"><h1 className="hobbies">hobbies</h1>{Datos.map((lista, index)=>  (lista.number == 5)? lista.hobby.map((e) => <li key={index}>{e}</li>): null)}</div>          
            <Iconos face='https://www.facebook.com/robertjoel.ariasruiz.9'
                    yout=''
                    insta='https://www.instagram.com/jheyniiel/'
                    tik='https://www.tiktok.com/@jheyniielruiiz'/>
        </div>
    );
}