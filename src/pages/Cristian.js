import React from "react";
import Koya from '../bt21/koya.gif';
import Ramon from '../imagenes/ramon.jpeg';
import Iconos from "../components/Iconos";
export default function Cristian(){
    return(
        <div className="person-perfilRamon">
            <h1>hola yo soy Cristian</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Cristian gracias por ver mi perfil</i></marquee>
            <img src={Koya} width="300px" height="300px"/>  
            <img src={Ramon} width="300px" height="300px"/>
            <Iconos face='https://www.facebook.com/cristian.honorioleon' 
                    yout='' 
                    insta='https://www.instagram.com/ian_tok1/' 
                    tik='https://www.tiktok.com/@ian_tok1' />
        </div>
    );
}
