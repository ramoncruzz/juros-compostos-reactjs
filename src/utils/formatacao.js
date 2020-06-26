const valorFinanceiro = (valor) =>{
   const formatado =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
   return formatado;
}

const valorPercentual = (valor) =>{
    const formatado = String(`${ parseFloat(String(valor)).toFixed(2) }%`);
    return formatado.replace('.',',');
}

export {
    valorFinanceiro,
    valorPercentual
}