import React from 'react';
import InputComp from './InputComp'

const LinkAdder = (props) => {
    
      return(
            <div  className = "OuterWrapper">
                  <div className = "InnerWrapper">
                         <div className = "InputWrapper">
                        <InputComp  
                              handler = {props.handler} 
                              id = {props.id1} 
                              cName = {props.cname} 
                              ph = {props.ph1} 
                              val = {props.val.språk}
                              >
                        </InputComp> 
                        <InputComp  
                              handler = {props.handler} 
                              id = {props.id2} 
                              cName = {props.cname} 
                              ph = {props.ph2}
                              val = {props.val.nivå}>
                                    
                        </InputComp>
                  </div>
                  </div>
                 
            </div>
            
      )
}



export default LinkAdder