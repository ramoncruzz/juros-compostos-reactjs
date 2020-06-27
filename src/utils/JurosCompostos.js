import { valorFinanceiro, valorPercentual } from './formatacao';

const jurosCompostos = ( percent, tempo) =>{
    try {
        return Math.pow((1+percent), tempo);
    } catch (error) {
        return 0;
    }
}

const calculaPorcento = ( parcial, montante ) =>{
    try {
        const percent = (parcial/montante) * 100;
        return parseFloat(percent).toFixed(2);
    } catch (error) {
        return 0;
    }
}

const calculaSerieJuros = ( montanteInicial, taxaJuros, periodo, crescente ) =>{
    
    try {
        const resultado = [];
        for(let i = 1; i<=periodo;i = i+1){
            const parcela = {
                montanteAcumulado : '',
                valorParcela: '',
                percentual: ''
            }
            const acumulado = jurosCompostos(taxaJuros, i) * montanteInicial;
            const valorParcela = Math.abs(acumulado - montanteInicial);
            const percentualParcela = calculaPorcento(valorParcela, montanteInicial);
            
            if(crescente){
                parcela.montanteAcumulado = valorFinanceiro(acumulado);
                parcela.valorParcela = `+ ${valorFinanceiro(valorParcela)}`;
                parcela.percentual = valorPercentual(percentualParcela); 
            }else{
                parcela.montanteAcumulado = valorFinanceiro(acumulado);
                parcela.valorParcela = `- ${valorFinanceiro(valorParcela)}`;
                parcela.percentual = `- ${valorPercentual(percentualParcela)}`; 
            }
            resultado.push(parcela);
        }
        return resultado;
    } catch (error) {
        return [];
    }
}

export {
    jurosCompostos,
    calculaPorcento,
    calculaSerieJuros
}
