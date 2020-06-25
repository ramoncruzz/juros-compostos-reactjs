import React from 'react';
import { TextField } from '@material-ui/core';
import {Parcela} from '../../components'
import "./index.style.css"
const Page = ()=>{

return (
<div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex',flexDirection: 'column', flex: 1}}>
        <h1>Juros Compostos</h1>
        <div>
            <form style={{display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-around', width: '50%'}}>
                <TextField id="mInicial" label="Montante Inicial" type="number" defaultValue={0} />
                <TextField id="mInicial" label="Taxa de juros mensal" type="number" defaultValue={0} />
                <TextField id="mInicial" label="Período (mensal)" type="number" defaultValue={0} />
            </form>

            <div style={{display: 'flex', flexDirection: 'row', margin: '30px', padding: '15px', flexWrap: 'wrap'}}>
                <Parcela juros={300} numero={1} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={2} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={3} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={4} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={1} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={2} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={3} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={4} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={1} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={2} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={3} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={4} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={1} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={2} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={3} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={4} percentual={1} valor={3000}/>
                <Parcela juros={300} numero={4} percentual={1} valor={3000}/>
                
            </div>
        </div>
    </div>
</div>

);

}

export default Page