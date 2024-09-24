import React, { useState } from 'react';

function Resposta3B() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    });

    const [erros, setErros] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validarForm = () => {
        const novosErros = {};
        if (!formData.nome) {
            novosErros.nome = 'Nome é obrigatório.';
        }
        if (!formData.email) {
            novosErros.email = 'Email é obrigatório.';
        }
        if (formData.telefone && isNaN(formData.telefone)) {
            novosErros.telefone = 'Telefone deve ser numérico.';
        }
        return novosErros;
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const validandoErros = validarForm();
        if (Object.keys(validandoErros).length > 0) {
            setErros(validandoErros);
        } else {
            alert(JSON.stringify(formData, null, 2)); 
            setErros({}); 
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Formulário Simples com validações</h1>
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
                    {erros.nome && <p style={{ color: 'red' }}>{erros.nome}</p>}
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
                    {erros.email && <p style={{ color: 'red' }}>{erros.email}</p>}
                </div>
                <div>
                    <label>
                        Telefone:
                        <input 
                            type="tel" 
                            name="telefone" 
                            value={formData.telefone} 
                            onChange={handleChange} 
                        />
                    </label>
                    {erros.telefone && <p style={{ color: 'red' }}>{erros.telefone}</p>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Resposta3B;