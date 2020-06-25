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
            <span> +R$ {juros}</span>
            <span> {percentual} %</span>
        </div>
    </div>
    )
}

Parcela.propTypes ={
    sentido: PropTypes.bool,
    numero: PropTypes.number,
    valor: PropTypes.number.isRequired,
    percentual: PropTypes.number,
}

Parcela.defaultProps = {
    numero: 0,
    percentual: 0,
    sentido: true
}

export default Parcela;


