
function getDimension(){
    const { innerHeight: height, innerWidth: width }= window;
    return {height,width};
}

const Styles = {
    mainContainer: {display: 'flex',flex: 1, flexDirection: 'column',background:'#e5e5e5', height: getDimension().height, width: getDimension().width, marginLeft:'-5px', marginTop:'-10px'},
    containerJuros: {display: 'flex',flexDirection: 'column', background:'#fff', margin: '20px', borderRadius: '5px', paddingTop: '25px'},
    titulo: {alignSelf: 'center', fontFamily: 'Courier New, Courier, monospace', fontSize: '3rem', marginBottom: '20px'},
    subtitulo: {alignSelf: 'center', marginBottom: '55px'},
    formulario: {display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', width: '90%'}
}

export default Styles;