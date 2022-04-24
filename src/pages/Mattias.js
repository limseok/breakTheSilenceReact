import react from 'react';
import Rj from '../bt21/rj.gif';
import Matt from '../imagenes/matt.jpg';
import Iconos from "../components/Iconos";
export default function Mattias(){
    return(
        <div className='person-perfilJin'>
            <h1>hola yo soy Mattias</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Mattias gracias por ver mi perfil</i></marquee>
            <img src={Rj} width="300px" height="300px"/>  
            <img src={Matt} width="300px" height="300px"/>
            <Iconos face='https://www.facebook.com/mattias.mirk.9'
                    yout='https://www.youtube.com/channel/UCnbBixyb1FjMOc3CRBw0otw'
                    insta='https://www.instagram.com/mattiasmirk1/'
                    tik='https://www.tiktok.com/@mattiasmirk'/>
        </div>
    );
}