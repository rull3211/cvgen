import React from 'react';
const inputComp = (props)=>{
 
      return(
            <input  
                  onChange = {props.handler} 
                  id = {props.id} 
                  className = {props.cName} 
                  value = {props.val} 
                  placeholder = {props.ph}
                  n = {props.n}
                  >
            </input>
      )
}

export default inputComp