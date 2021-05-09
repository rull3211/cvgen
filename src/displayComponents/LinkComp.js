import React from 'react';

const LinkComp = (props) =>{
      return (
            <div > 
                  <a  
                        id = {props.id} 
                        href = {props.link} >{props.text}
                  </a> 
            </div>)
      
}
export default LinkComp;