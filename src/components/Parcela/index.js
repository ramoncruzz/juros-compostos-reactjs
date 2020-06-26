import React from 'react'
import PropTypes from 'prop-types';
import './index.css';
const Parcela =({numero, valor, juros, percentual, sentido}) =>{
    return (
    <div className="container">
        <div className="container-numero">
            <span>{numero}</span>
        </div>
        <div className="container-valores">
            <span> {valor}</span>
            <span> {juros}</span>
            <span> {percentual} </span>
        </div>
    </div>
    )
}

Parcela.propTypes ={
    sentido: PropTypes.bool,
    numero: PropTypes.string,
    valor: PropTypes.string.isRequired,
    percentual: PropTypes.string,
}

Parcela.defaultProps = {
    numero: undefined,
    percentual: undefined,
    sentido: true
}

export default Parcela;


