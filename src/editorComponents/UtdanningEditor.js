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


      return (<div className = "FivePointWrapper">
                  <div className = "RowWrapper">
                        <div className = "InputWrapper">
                              <InputComp 
                                    id = "Grad" 
                                    handler ={props.handler} 
                                    ph= {props.ph[0]} 
                                    cName ={props.cname}>
                              </InputComp>
                              <InputComp 
                                    id = "Skole" 
                                    handler ={props.handler} 
                                    ph= {props.ph[1]} 
                                    cName ={props.cname}>
                              </InputComp>
                        </div>
                        <div className = "RowWrapper">
                              <div className = "InputWrapper">
                                    <InputComp 
                                          id = "Start" 
                                          handler ={props.handler} 
                                          ph= {props.ph[2]} 
                                          cName ={props.cname} >
                                    </InputComp>
                                    <InputComp 
                                          id = "Slutt" 
                                          handler ={props.handler} 
                                          ph= {props.ph[3]} 
                                          cName ={props.cname}>
                                    </InputComp>
                              </div>
                        </div>
                        <div className = "InputWrapper">
                              <InputComp 
                                    handler = {props.handler} 
                                    id = "By" 
                                    ph= {props.ph[4]}
                                    cName ={props.cname}>
                              </InputComp>
                        </div>
                        <div className = "InputWrapper">
                        <div className = "RowWrapper">
                              <p>Beskrivelse</p>
                              <textarea 
                                    style = {textStyle} 
                                    id = "Beskrivelse" 
                                    onChange ={props.handler} 
                                    className ={props.cname}>
                              </textarea>
                              </div>
                        </div>
                  </div>
            </div>)
      
}

export default UtdanningEditor