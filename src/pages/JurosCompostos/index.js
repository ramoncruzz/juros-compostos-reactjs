import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Parcela } from '../../components';
import { calculaSerieJuros, jurosCompostos } from '../../utils/JurosCompostos';
import { valorPercentual } from '../../utils/formatacao';
import "./index.style.css"
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
<div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex',flexDirection: 'column', flex: 1}}>
        <h1 style={{alignSelf: 'center'}}>Juros Compostos</h1>
        <span style={{alignSelf: 'center'}}>Juros totais { valorPercentual( (jurosCompostos( taxaJurosMensal / 100, periodo)-1)*100 ) }</span>
        <div>
            <form style={{display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-around', width: '50%'}} >
                <TextField id="mInicial" label="Montante Inicial"  value={montanteInicial} onChange= { (event) => setMontanteInicial(event.target.value)} />
                <TextField id="mInicial" label="Taxa de juros mensal" defaultValue={0} value = { taxaJurosMensal } onChange= { (event) => setTaxaJurosMensal(event.target.value) } />
                <TextField id="mInicial" label="Período (mensal)" type="number" defaultValue={0} value = { periodo } onChange= { (event) => setPeriodo(event.target.value) } />
            </form>
            <div style={{display: 'flex', flexDirection: 'row', margin: '30px', padding: '15px', flexWrap: 'wrap'}}>
                {
                    parcelas.map((item, index)=><Parcela juros={item.valorParcela} numero={index+1} percentual={item.percentual} valor={item.montanteAcumulado}/>)
                } 
            </div>
        </div>
    </div>
</div>

);

}

export default Page