import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Parcela, Container } from '../../components';
import { calculaSerieJuros, jurosCompostos } from '../../utils/JurosCompostos';
import { valorPercentual } from '../../utils/formatacao';
import Styles from './index.syles';

const Page = ()=>{

    const [ montanteInicial, setMontanteInicial ] = useState(0);
    const [ taxaJurosMensal, setTaxaJurosMensal ] = useState(0);
    const [ periodo, setPeriodo ] = useState(0);
    const [ parcelas, setParcelas ] = useState([]);
    
    useEffect(()=>{
        const arrayParcelas = calculaSerieJuros(montanteInicial,taxaJurosMensal/100,periodo, parseFloat(taxaJurosMensal) > 0);
        setParcelas(arrayParcelas);
    }, [ montanteInicial, taxaJurosMensal, periodo]);


return (
<div style={Styles.mainContainer}>
    <div style={Styles.containerJuros}>
        <strong style={Styles.titulo}>Juros Compostos</strong>
        <span style={Styles.subtitulo}>Juros totais { valorPercentual( (jurosCompostos( taxaJurosMensal / 100, periodo)-1)*100 ) }</span>
        <div>
            <form style={Styles.formulario} >
                <TextField id="mInicial" label="Montante Inicial" type="number"  value={montanteInicial} onChange= { (event) => setMontanteInicial(event.target.value)} />
                <TextField id="mInicial" label="Taxa de juros mensal" defaultValue={0} value = { taxaJurosMensal } onChange= { (event) => setTaxaJurosMensal(event.target.value) } />
                <TextField id="mInicial" label="Período (mensal)" type="number" defaultValue={0} value = { periodo } onChange= { (event) => setPeriodo(event.target.value) } />
            </form>
            <Container>
                {
                    parcelas.map((item, index)=><Parcela key={index} juros={item.valorParcela} numero={index+1} percentual={item.percentual} valor={item.montanteAcumulado} sentido={parseFloat(taxaJurosMensal) > 0}/>)
                }
            </Container>
        </div>
    </div>
</div>

);

}

export default Page