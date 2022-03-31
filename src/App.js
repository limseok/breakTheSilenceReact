import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './App.css';
import Presentacion from './pages/Presentacion';
import Van from './pages/Van';
import Bonus from './pages/Bonus';
import Datos from './datos.json';


import Ventana from './ventanas/Ventana';
import ProfileRl from './profiles/ProfileRl';

function App() {                         
  const [contador, SetContador] = useState(0);  
  const [selection, SetSelection] = useState(''); 
  const history = useHistory();
        
  return (
    <div className="App">              
        <header className='App-header'>          
        <div className='header'><h1>BREAK THE SILENCE</h1></div>
                             
            <div className='row'>
              <Link to="/presentacion">
                <button>PRESENTACION</button>                                          
              </Link>
            </div>

            <div className='row'>     
              <Link to="/van">
                <button>V(X)a(o)n</button>
              </Link>         
            </div>
            
            <div className='row'>
              <Link to="/bonus">
                <button >Bonus</button>
              </Link>
            </div>
        <div className='main'>
          <div className='row'>
            <div className='row'>
              <label>                
                Seleccionar              
              </label>
              
              <select id='selecciona' onChange={(e) => {
                if(e.target.value == 'rl'){
                  SetSelection(e.target.value);
                  history.push('/profile');
                }else if(e.target.value == 'vl'){
                  SetSelection(e.target.value);
                  history.push('/profile');
                }else if(e.target.value == 't'){
                  SetSelection(e.target.value);
                  history.push('/profile');
                }
              }}>
                <option>click</option>                
                <option  value='t'>Todos</option>
                <option  value="rl">Rap Line</option>
                <option  value='vl'>Vocal Line</option>
              </select>

            </div>     
            <div className='row'>              
                <label>
                  Integrantes
                </label>                
                <select onChange={(past) => {
                  Datos.map((e)=>{           
                    if(past.target.value == e.number){ 
                      SetContador(past.target.value-1);         
                      history.push('/ventana');    
                    }                                                                         
                  });                  
                }}>                   
                  <option>click</option>                                                          
                  <option value={1}>Yamil(Suga)</option>                   
                  <option value={2}>Cristian(Rap Monster)</option>                                                        
                  <option value={3}>Kevin(Kook)</option>                                                        
                  <option value={4}>Limber(J-hope)</option>                                                        
                  <option value={5}>Jhey(Jimin)</option>                                                        
                  <option value={6}>Mattias(Jin)</option>                                                        
                  <option value={7}>Yerald(V)</option>                                      
                </select>                                                             
            </div>                          

              <Switch>                                
                <Route path={'/presentacion'}><Presentacion/></Route> 
                <Route path={'/van'}><Van/></Route> 
                <Route path={'/bonus'}><Bonus/></Route>
                <Route path={'/ventana'}><Ventana name={Datos[contador].name} 
                  hobby={Datos[contador].hobby} number={Datos[contador].number}
                  /></Route>  
                <Route path={'/profile'}><ProfileRl selection={selection}/></Route>              
              </Switch> 

            <div>                          
            </div>                     
            
            
          </div>
        </div>             
        </header>        
    </div>
  );
}

export default App;
