import React from 'react';
const LangComp = props =>{
      let dash = "";
      if(props.nivå !== undefined){
            dash = " - "
      }
  
      return(
   
            <p className = "size4">
                  {props.språk}{dash}{props.nivå}
            </p>
      
      )
}

export default LangComp