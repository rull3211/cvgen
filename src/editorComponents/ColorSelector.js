import React from 'react';
const color = props => {
    return(
        <div className ="ColorSelector" onClick={props.handler} style = {{"backgroundColor": props.color}}>
        </div>
    )
}
export default color