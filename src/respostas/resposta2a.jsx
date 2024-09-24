import React, { useState } from 'react';

function Resposta2A() {
    const [isAdministrador, setIsAdministrador] = useState(false);

    const handleCheckboxChange = () => {
        setIsAdministrador(!isAdministrador); 
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Verificação de Usuário</h1>
            <label>
                <input 
                    type="checkbox" 
                    checked={isAdministrador} 
                    onChange={handleCheckboxChange} 
                />
                Administrador
            </label>
            <div style={{ marginTop: '20px' }}>
                {isAdministrador ? 
                    "O usuário atual é Administrador" : 
                    "O usuário atual é Colaborador"}
            </div>
        </div>
    );
}

export default Resposta2A;