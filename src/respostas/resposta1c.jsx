import React from 'react';

function Resposta1C() {
    const handleClick = () => {
        console.log('Botão clicado!');
        alert('Você clicou no botão!');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Exemplo de Tratamento de Eventos</h1>
            <button onClick={handleClick}>
                Clique aqui
            </button>
        </div>
    );
}

export default Resposta1C;