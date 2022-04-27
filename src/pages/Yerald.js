import React from "react";
import Tata from '../bt21/tata.gif';
import Loading from '../imagenes/yerald.jpg';
import Iconos from "../components/Iconos";
import Datos from '../datos.json'
export default function Yerald(){
    return(
        <div className="person-perfilV">
            <h1 className="titulo-yer">Hola yo soy Yerald</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Yerald gracias por ver mi perfil</i></marquee>
            <img className="img" src={Tata} width="300px" height="300px"/>  
            <img className="img" src={Loading} width="300px" height="300px"/>
            <div className="map"><h1 className="hobbies">hobbies</h1>{Datos.map((lista, index)=>  (lista.number == 7)? lista.hobby.map((e) => <li key={index}>{e}</li>): null)}</div>          
            <Iconos face='https://www.facebook.com/profile.php?id=100009928573240'
                    yout=''
                    insta='https://www.instagram.com/yeraldh.quispe/'
                    tik='https://www.tiktok.com/@yerald_047'/>
        </div>
    );
}