import React from "react";
import Koya from '../bt21/koya.gif';
import Ramon from '../imagenes/ramon.jpeg';
import Iconos from "../components/Iconos";
import Datos from '../datos.json';
export default function Cristian(){
    return(
        <div className="person-perfilRamon">
            <h1 className="titulo-cris">hola yo soy Cristian</h1>
            <div><h1 className="titulo-artistico">Nombre artistico: IAN</h1></div>
            <marquee behavior="alternate"><i>hola yo me llamo Cristian gracias por ver mi perfil</i></marquee>
            <img className="img" src={Koya} width="300px" height="300px"/>  
            <img className="img" src={Ramon} width="300px" height="300px"/>
            <div className="map"><h1 className="hobbies">hobbies</h1>{Datos.map((lista, index)=>  (lista.number == 2)? lista.hobby.map((e) => <li key={index}>{e}</li>): null)}</div>          
            <Iconos face='https://www.facebook.com/cristian.honorioleon' 
                    yout='' 
                    insta='https://www.instagram.com/ian_tok1/' 
                    tik='https://www.tiktok.com/@ian_tok1' />
        </div>
    );
}
