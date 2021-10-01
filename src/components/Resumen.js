import React from 'react';
import styled from '@emotion/styled';
import {capitalizar} from '../Helper'
import PropTypes from 'prop-types';  

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffffff;
    margin-top: 1rem;
`;



const Resumen = ({datos}) => {
    //alternativa a operadores ternarios en la app principal, mas codigo pero mas prolijo.
    const {marca, anio, plan} = datos;

    if(marca === '' || anio === '' || plan === '') return null;

    return ( 
        <ContenedorResumen>
        <h2>Resumen de Cotizacion</h2>
        <ul>
            <li>Marca: {capitalizar(marca)}</li>
            <li>Plan: {capitalizar(plan)}</li>
            <li>Año del modelo: {anio}</li>
        </ul>
        </ContenedorResumen>
     );
}


Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;