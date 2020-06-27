import React from 'react';

const Style ={
    display: 'flex', flexDirection: 'row', margin: '30px', padding: '15px', flexWrap: 'wrap'
}

const Container =(props)=>{
    return(
    <div style={Style}>
        {props.children}
    </div>
)
}

export default Container;
