import React from 'react';
import { useForm } from 'react-hook-form';

function Resposta3D() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2)); 
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Formulário com Validações usando React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        Nome:
                        <input 
                            type="text" 
                            {...register('name', { required: 'Nome é obrigatório.' })} 
                        />
                    </label>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            {...register('email', { required: 'Email é obrigatório.' })} 
                        />
                    </label>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>
                <div>
                    <label>
                        Telefone:
                        <input 
                            type="tel" 
                            {...register('phone', { 
                                validate: value => !value || !isNaN(value) || 'Telefone deve ser numérico.' 
                            })} 
                        />
                    </label>
                    {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Resposta3D;