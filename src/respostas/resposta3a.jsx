import React, { useState } from 'react';

function Resposta3A() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert(JSON.stringify(formData, null, 2)); 
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Formulário Simples</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome:
                        <input 
                            type="text" 
                            name="nome" 
                            value={formData.nome} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Telefone:
                        <input 
                            type="tel" 
                            name="telefone" 
                            value={formData.telefone} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Resposta3A;