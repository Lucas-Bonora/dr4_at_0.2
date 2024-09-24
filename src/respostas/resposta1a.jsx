import { useState } from 'react';

function Resposta1A({ pergunta, resposta }) {
    const [mostrarResposta, setMostrarResposta] = useState(false);

    const toggleResposta = () => {
        setMostrarResposta(!mostrarResposta);
    };

    return (
        <div className="pergunta-resposta">
            <div className="pergunta">
                <h2>{pergunta}</h2>
            </div>
            <div className={`resposta ${mostrarResposta ? 'visivel' : 'escondida'}`}>
                <p>{resposta}</p>
            </div>
            <button onClick={toggleResposta}>
                {mostrarResposta ? 'Ocultar Resposta' : 'Mostrar Resposta'}
            </button>
        </div>
    );
}

export default Resposta1A;