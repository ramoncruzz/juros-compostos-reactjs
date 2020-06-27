import React from 'react'
import PropTypes from 'prop-types';
import './index.css';
const Parcela =({key, numero, valor, juros, percentual, sentido}) =>{
    return (
    <div className="container" key={key}>
        <div className="container-numero">
            <span>{numero}</span>
        </div>
        <div className="container-valores">
            <span className={sentido ? "valor-positivo": "valor-negativo"}>{valor}</span>
            <span className={sentido ? "valor-positivo": "valor-negativo"}>{juros}</span>
            <span className={sentido ? "percentual-positivo": "percentual-negativo"}>{percentual}</span>
        </div>
    </div>
    )
}

Parcela.propTypes ={
    sentido: PropTypes.bool,
    numero: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
    valor: PropTypes.string.isRequired,
    percentual: PropTypes.string,
    key:  PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
}

Parcela.defaultProps = {
    numero: undefined,
    percentual: undefined,
    sentido: true, 
    key: null
}

export default Parcela;


