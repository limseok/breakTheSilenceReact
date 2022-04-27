import React from "react";
import Shooky from '../bt21/shooky.gif';
import Lucho from '../imagenes/lucho1.jpg';
import Iconos from "../components/Iconos";
import Datos from '../datos.json';
export default function Yamil(){
    return(
        <div className="person-perfilSuga">
            <h1 className="titulo-yam">hola yo soy Yamil</h1>                
            <marquee behavior="alternate"><i>hola yo me llamo Yamil gracias por ver mi perfil</i></marquee>        
            <img className="img" imagen={Shooky} src={Shooky} width="300px" height="300px"/>  
            <img className="img" src={Lucho} width="300px" height="300px"/> 
            <div className="map"><h1 className="hobbies">hobbies</h1>{Datos.map((lista, index)=>  (lista.number == 1)? lista.hobby.map((e) => <li key={index}>{e}</li>): null)}</div>
            <Iconos face='https://www.facebook.com/yamilmirandau.u'
                    yout=''
                    insta='https://www.instagram.com/dlal_yamil/'
                    tik='https://www.tiktok.com/@dlal_yam'/>
        </div>
    );
}