import React, { useState } from "react";
import '../components/Form.css';

export default function SignUp () {
    const [formulario, setFormulario] = useState({ name: '', lastName: '', phone: '', email: '', password: ''});
    const [usuarios, setUsuarios] = useState([]);
    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
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
            <form onSubmit={handleSubmit} action="/" method="POST">
                <div className='top-row'>                    
                    <h1 className="titleLogin">Sign Up for free</h1>
                    <div className='field-wrap'>
                        <input 
                            className="input-registro"
                            name="name" 
                            type={'text'} 
                            placeholder="Name" 
                            value={formulario.name} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field-wrap'>
                        <input 
                            className="input-registro"
                            name="lastName" 
                            type={'text'} 
                            placeholder="LastName" 
                            value={formulario.lastName} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field-wrap'>
                        <input 
                            className="input-registro"
                            name="phone" 
                            type={'text'} 
                            placeholder="Phone" 
                            value={formulario.phone} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field-wrap'>
                        <input 
                            className="input-registro"
                            name="email" 
                            type={'email'} 
                            placeholder="Email" 
                            value={formulario.email} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field-wrap'>
                        <input
                            className="input-registro"
                            name="password"
                            type={'password'}
                            placeholder="Password"
                            value={formulario.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className='button-block'>GET STARTED</button>
            </form>
        </div>
    );
}