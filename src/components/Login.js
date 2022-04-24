import React, { useState } from "react";
import './Form.css';

export default function LogIn() {
    const [formulario, setFormulario] = useState({ emailAddress: '', password: ''});
    const handleChange = (e) => {
        
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    const locacion = () => {
        window.location.replace = './Page.js';
    }
    return(
        <div className="div-form">
            <form onSubmit={handleChange}>
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
                    
                    <button type="submit" className='button-block' onClick={locacion}>LOG IN</button>
                    
                </div>
                
            </form>
        </div>
    );
}