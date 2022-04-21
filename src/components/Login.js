import React, { useState } from "react";
import './Form.css'
export default function LogIn() {
    const [formulario, setFormulario] = useState({ emailAddress: '', password: ''});
    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="form">
            <form action="/" method="POST">
                <div className="top-row">
                    <h1>WELCOME BACK</h1>
                    <div className="field-wrap">
                    <input 
                        name="emailAddress" 
                        type='email' 
                        placeholder='Email Address' 
                        value={formulario.emailAddress} 
                        onChange={handleChange}
                    />
                    </div>
                    <div className="field-wrap">
                        <input 
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