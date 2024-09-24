import React, { useEffect, useState } from 'react';

function Resposta2B() {
    const [paises, setPaises] = useState([]);
    const [selecionarPais, setSelecionarPais] = useState('');

    useEffect(() => {
        const pegarPaises = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setPaises(data);
            } catch (error) {
                console.error('Erro ao buscar países:', error);
            }
        };

        pegarPaises();
    }, []);

    const handleChange = (event) => {
        setSelecionarPais(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Selecione um País</h1>
            <select value={selecionarPais} onChange={handleChange}>
                <option value="">Selecione um país</option>
                {paises.map((pais) => (
                    <option key={pais.cca3} value={pais.name.common}>
                        {pais.name.common}
                    </option>
                ))}
            </select>
            {selecionarPais && (
                <div style={{ marginTop: '20px' }}>
                    Você selecionou: {selecionarPais}
                </div>
            )}
        </div>
    );
}

export default Resposta2B;