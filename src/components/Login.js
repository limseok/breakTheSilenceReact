import React, { useState } from "react";
import './Form.css';
import Page from "./Page";
import VentanaFormulario from "./VentanaFormulario";

export default function LogIn() {
    const [formulario, setFormulario] = useState({ emailAddress: '', password: ''});
    const [usuarios, setUsuarios] = useState([]);
    const handleChange = (e) => {        
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsuarios([
            ...usuarios,
            formulario
        ]);
    }

    return(
        <div className="div-form">
            <form onSubmit={handleSubmit}>
                <div className="top-row">
                    <h1 className="titleLogin">WELCOME BACK</h1>
                    <div className="field-wrap">
                    <input 
                        className="input-registro"
                        name="emailAddress" 
                        type='email' 
                        placeholder='Email Address' 
                        value={formulario.emailAddress} 
                        onChange={handleChange}
                    />
                    </div>
                    <div className="field-wrap">
                        <input 
                            className="input-registro"
                            name="password" 
                            type='password' 
                            placeholder='Password' 
                            value={formulario.password} 
                            onChange={handleChange}
                        />
                    </div>  
                        <button type="submit" className='button-block'>LOG IN</button>                
                    
                </div>
                
            </form>
        </div>
    );
}