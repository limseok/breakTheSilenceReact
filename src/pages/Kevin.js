import React from "react";
import Cooky from '../bt21/cooky.gif';
import Kev from '../imagenes/kev.jpg';
import Iconos from "../components/Iconos";
import Datos from '../datos.json';
export default function Kevin(){
    return(
        <div className="person-perfilKook">
            <h1 className="titulo-kev">hola yo soy Kevin</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Kevin gracias por ver mi perfil</i></marquee>
            <img className="img" src={Cooky} width="300px" height="300px"/>  
            <img className="img" src={Kev} width="300px" height="300px"/> 
            <div className="map"><h1 className="hobbies">hobbies</h1>{Datos.map((lista, index)=>  (lista.number == 3)? lista.hobby.map((e) => <li key={index}>{e}</li>): null)}</div>                           
            <Iconos face='https://www.facebook.com/search/top?q=kevin%20ju%C3%A1rez'
                    yout=''
                    insta='https://www.instagram.com/j.jkev_7/'
                    tik='https://www.tiktok.com/@stillwith_u.kj'
            />
        </div>
    );
}