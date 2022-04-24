import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import SignUp from '../components/SignUp';
import LogIn from '../components/Login';
import './VentanaFormulario.css'

function VentanaFormulario() {
  
  return (
    <div className='header-form'>
      <h1 className='title'>WELCOME TO BREAK THE SILENCE</h1>   
      <Router>
         <div className='container'>
            <Link to={'/signUp'}>
               <button className='btn-registro'>Sign UP</button>      
            </Link>
            <Link to={'/logIn'}>
               <button className='btn-registro'>Log In</button>               
            </Link>
         </div> 
         <Switch>
            <Route path={'/signUp'}><SignUp/></Route>
            <Route path={'/logIn'}><LogIn/></Route>
         </Switch>
      </Router>  
    </div>
  );
}

export default VentanaFormulario;