
import {BrowserRouter as Router, Link ,Switch, Route} from "react-router-dom";

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




export default function Ventana(props) {
    const ventanas = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete'];
    const bt21 = [Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete];  
    const {name, hobby, number} = props;      
    
    return(
        <div>            
            <div className="person-row">   

                <img src={bt21[number-1]} width="200px" height="200px"/>
                <div className='person-info'>
                <div><h1><i>{name}</i></h1></div>
                <div>{hobby}</div>
                </div>                        
                <Router>
                <Link to={`/${ventanas[number-1]}`}>
                    <p align="right">
                        <button>Ver Perfil</button>                                                 
                    </p>
                </Link>

                <Switch>
                <Route path={'/uno'}><Yamil/></Route>
                <Route path={'/dos'}><Cristian/></Route>
                <Route path={'/tres'}><Kevin/></Route> 
                <Route path={'/cuatro'}><Limber/></Route> 
                <Route path={'/cinco'}><Jhey/></Route> 
                <Route path={'/seis'}><Mattias/></Route> 
                <Route path={'/siete'}><Yerald/></Route>                 
                </Switch>
                </Router>            
            </div> 
        </div>
    );
}