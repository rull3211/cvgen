import InputComp from './InputComp';
import React from 'react';
const SkillComp = props => {
  
      return (
            <div className = "OuterWrapper" >
                  <div className = "InnerWrapper">
                        <InputComp 
                              id = "skill" 
                              cName = "skillAdders" 
                              handler = {props.handler}
                              ph = "Ferdighet"
                              val = {props.val}>
                        </InputComp>
                  </div>
                 
            </div>
            
      )

}


export default SkillComp