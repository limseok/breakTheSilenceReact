import React, { useState } from "react";
import './Form.css';

export default function SignUp () {
    const [formulario, setFormulario] = useState({ name: '', lastName: '', email: '', phone: ''});
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
        <div className="form">
            <form onSubmit={handleSubmit} action="/" method="POST">
                <div className='top-row'>                    
                    <h1>Sign Up for free</h1>
                    <div className='field-wrap'>
                        <input 
                            name="name" 
                            type={'text'} 
                            placeholder="Name" 
                            value={formulario.name} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field-wrap'>
                        <input 
                            name="lastName" 
                            type={'text'} 
                            placeholder="LastName" 
                            value={formulario.lastName} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field-wrap'>
                        <input 
                            name="email" 
                            type={'email'} 
                            placeholder="Email" 
                            value={formulario.email} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field-wrap'>
                        <input 
                            name="phone" 
                            type={'text'} 
                            placeholder="Phone" 
                            value={formulario.phone} 
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className='button-block'>GET STARTED</button>
            </form>
        </div>
    );
}