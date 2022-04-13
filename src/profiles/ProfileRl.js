import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Datos from '../datos.json';

import Yamil from '../pages/Yamil';
import Cristian from '../pages/Cristian';
import Kevin from '../pages/Kevin';
import Limber from '../pages/Limber';
import Jhey from '../pages/Jhey';
import Mattias from '../pages/Mattias';
import Yerald from '../pages/Yerald';

import Cinco from '../bt21/1.jpg';
import Tres from '../bt21/2.png';
import Dos from '../bt21/3.jpg';
import Cuatro from '../bt21/4.jpg';
import Seis from '../bt21/5.jfif';
import Uno from '../bt21/6.jpg';
import Siete from '../bt21/7.jfif';
import { useHistory } from "react-router-dom";



export default function ProfileRl( {selection} ) { 
    const ventanas = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete'];
    const bt21 = [Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete]; 
       
    return(
        <div>               
            {                
                Datos.map((e,index) => {  
                    if(e.selection == selection){
                        return(
                          <div key={e.name}>
                            <div className="person-row">          
                              <img src={bt21[index]} width="200px" height="200px"/>
                              <div className='person-info'>
                              <div><h1><i>{e.name}</i></h1></div>
                              <div>{e.hobby}</div>
                              </div>
                              
                              <Link to={`/${ventanas[index]}`}>                                                      
                                <p align="right">
                                    <button>Ver Perfil</button>                        
                                </p>
                              </Link>                                    
                              
                              </div>;
                          </div>
                          
                        );                  
                    }else if(selection == e.all){
                        return(
                            <div key={e.name}>
                                <div className="person-row">          
                                <img src={bt21[index]} width="200px" height="200px"/>
                                <div className='person-info'>
                                <div><h1><i>{e.name}</i></h1></div>
                                <div>{e.hobby}</div>
                                </div>

                                <Link to={`/${ventanas[index]}`}>
                                    <p align="right">
                                        <button>Ver Perfil</button>                        
                                    </p>                          
                                </Link>                                    
                              
                                </div>;
                            </div>
                        );
                    }                  
                })
              }  
                        <Switch>
                            <Route path={'/uno'}><Yamil/></Route>
                            <Route path={'/dos'}><Cristian/></Route>
                            <Route path={'/tres'}><Kevin/></Route> 
                            <Route path={'/cuatro'}><Limber/></Route> 
                            <Route path={'/cinco'}><Jhey/></Route> 
                            <Route path={'/seis'}><Mattias/></Route> 
                            <Route path={'/siete'}><Yerald/></Route>                 
                        </Switch>                               
        </div>
    );
}