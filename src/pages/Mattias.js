import react from 'react';
import Rj from '../bt21/rj.gif';
import Matt from '../imagenes/matt.jpg';
import Iconos from "../components/Iconos";
import Datos from '../datos.json'
export default function Mattias(){
    return(
        <div className='person-perfilJin'>
            <h1 className='titulo-matt'>hola yo soy Mattias</h1>
            <marquee behavior="alternate"><i>hola yo me llamo Mattias gracias por ver mi perfil</i></marquee>
            <img className="img" src={Rj} width="300px" height="300px"/>  
            <img className="img" src={Matt} width="300px" height="300px"/>
            <div className="map"><h1 className="hobbies">hobbies</h1>{Datos.map((lista, index)=>  (lista.number == 6)? lista.hobby.map((e) => <li key={index}>{e}</li>): null)}</div>          
            <Iconos face='https://www.facebook.com/mattias.mirk.9'
                    yout='https://www.youtube.com/channel/UCnbBixyb1FjMOc3CRBw0otw'
                    insta='https://www.instagram.com/mattiasmirk1/'
                    tik='https://www.tiktok.com/@mattiasmirk'/>
        </div>
    );
}