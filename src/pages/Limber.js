import React from "react";
import Mang from '../bt21/mang.gif';
import Lim from '../imagenes/lim1.jpg';
import Iconos from "../components/Iconos";
import Datos from '../datos.json'
export default function Limber(){
    return(
        <div className="person-perfilHope">
            <h1 className="titulo-lim">hola yo soy Limber</h1>
            <marquee behavior="alternate"><i>hola yo me llamo limber gracias por ver mi perfil</i></marquee>
            <img className="img" src={Mang} width="300px" height="300px"/>  
            <img className="img" src={Lim} width="300px" height="300px"/>
            <div className="map"><h1 className="hobbies">hobbies</h1>{Datos.map((lista, index)=>  (lista.number == 4)? lista.hobby.map((e) => <li key={index}>{e}</li>): null)}</div>          
            <Iconos face='https://www.facebook.com/profile.php?id=100008519290110'
                    yout=''
                    insta='https://www.instagram.com/lim_hoseok/'
                    tik='https://www.tiktok.com/@limberhope'/>
        </div>
    );
}