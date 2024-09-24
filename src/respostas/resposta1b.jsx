import React from 'react';

function Resposta1B() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Exemplo de Inline Event</h1>
            <button onClick={() => alert('Botão clicado!')}>
                Clique aqui
            </button>
        </div>
    );
}

export default Resposta1B;