import InputComp from './InputComp';
import React from 'react';


const ReferaneComp = (props)=>{
      
      return (
            <div className = "OuterWrapper">
                  <div className = "InnerWrapper">
                        <div className = "InputWrapper">
                        <InputComp 
                              id = "navn" 
                              handler = {props.handler} 
                              cName = "infoInput"
                              ph = "Referentens Navn"
                              val = {props.val.navn}>
                        </InputComp>
                        <InputComp 
                              id = "org" 
                              handler = {props.handler} 
                              cName = "infoInput"
                              ph = "Organisasjon/stilling"
                              val = {props.val.org}>
                        </InputComp>
                  </div>
                  <div className = "InputWrapper">
                        <InputComp 
                              id = "tlf" 
                              handler = {props.handler} 
                              cName = "infoInput"
                              ph ="Telefonnummer"
                              val = {props.val.tlf}>
                        </InputComp>
                        <InputComp 
                              id = "email" 
                              handler = {props.handler} 
                              cName = "infoInput"
                              ph ="Email"
                              val = {props.val.email}>
                        </InputComp>
                  </div>
                  </div>
                  
            </div>
      )
}

export default ReferaneComp