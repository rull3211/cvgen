import React from 'react';

import InputComp from './InputComp'
const UtdanningEditor = (props)=>{
      
      const textStyle = {
            width: "100%",
            height: "30vh",
            resize: "none",
            border: "none",
            backgroundColor: "rgb(242, 245, 250)",
            fontSize : "15pt"
      }


      return (<div className = "OuterWrapper">
                  <div className = "InnerWrapper">
                        <div className = "InputWrapper">
                              <InputComp 
                                    id = "grad" 
                                    handler ={props.handler} 
                                    ph= {props.ph[0]} 
                                    cName ={props.cname}
                                    val = {props.val.grad}>
                              </InputComp>
                              <InputComp 
                                    id = "skole" 
                                    handler ={props.handler} 
                                    ph= {props.ph[1]} 
                                    cName ={props.cname}
                                    val = {props.val.skole}>
                              </InputComp>
                        </div>
                        <div className = "InputWrapper">
                              <InputComp 
                                    id = "start" 
                                    handler ={props.handler} 
                                    ph= {props.ph[2]} 
                                    cName ={props.cname}
                                    val = {props.val.start} >
                              </InputComp>
                              <InputComp 
                                    id = "slutt" 
                                    handler ={props.handler} 
                                    ph= {props.ph[3]} 
                                    cName ={props.cname}
                                    val = {props.val.slutt}>
                              </InputComp>
                        </div>
                        <div className = "InputWrapper">
                              <InputComp 
                                    handler = {props.handler} 
                                    id = "by" 
                                    ph= {props.ph[4]}
                                    cName ={props.cname}
                                    val = {props.val.by}>
                              </InputComp>
                        </div>
                        <p>Beskrivelse</p>
                        <textarea 
                              style = {textStyle} 
                              id = "beskrivelse" 
                              onChange ={props.handler} 
                              className ={props.cname}
                              value={props.val.beskrivelse}>
                        </textarea>
                  </div>
                        
                  </div>
                        
            )
      
}

export default UtdanningEditor