import React, { useEffect, useState } from 'react';

function Resposta2D() {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();
                setCategorias(data.categories);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (event) => {
        const categoryId = event.target.value;
        const category = categorias.find(cat => cat.idCategory === categoryId);
        setCategoriaSelecionada(category);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Selecione uma Categoria de Prato</h1>
            <select onChange={handleChange}>
                <option value="">Selecione uma categoria</option>
                {categorias.map((category) => (
                    <option key={category.idCategory} value={category.idCategory}>
                        {category.strCategory}
                    </option>
                ))}
            </select>

            {categoriaSelecionada && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{categoriaSelecionada.strCategory}</h2>
                    <p>{categoriaSelecionada.strCategoryDescription}</p>
                    <img 
                        src={categoriaSelecionada.strCategoryThumb} 
                        alt={categoriaSelecionada.strCategory} 
                        style={{ width: '300px', height: '200px' }} 
                    />
                </div>
            )}
        </div>
    );
}

export default Resposta2D;