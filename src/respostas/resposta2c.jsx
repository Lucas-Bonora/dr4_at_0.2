import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

function Resposta2C() {
    const [produtos, setProdutos] = useState([]);
    const [letraPesquisa, setLetraPesquisa] = useState('');

    useEffect(() => {
        const gerarProdutos = Array.from({ length: 100 }, () => faker.commerce.productName());
        setProdutos(gerarProdutos);
    }, []);

    const handleChange = (event) => {
        setLetraPesquisa(event.target.value);
    };

    const filtrarProdutos = produtos.filter(product =>
        product.toLowerCase().startsWith(letraPesquisa.toLowerCase())
    );

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Filtrar Produtos</h1>
            <input
                type="text"
                placeholder="Digite para filtrar..."
                value={letraPesquisa}
                onChange={handleChange}
                style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
            />
            <ul>
                {filtrarProdutos.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
}

export default Resposta2C;