import React from 'react';
const FivePointComp = props => {
      let dash = ""
      let comma = ""
      let comma2 = ""
      if (props.info[1] !== undefined){
            comma = ", "
      }
      if (props.info[2] !== undefined){
            comma2 = ", "
      }
      if (props.info[4] !== undefined){
            dash = " - "
      }
 
      return (
            <div>
                  <div >
                        <p className = "size5"> 
                              {props.info[0]}{comma}{props.info[1]}{comma2}{props.info[2]}  
                        </p>
                  </div>
                  <div >
                        <p className = "size4">
                              {props.info[3]}{dash}{props.info[4]} 
                        </p>
                  </div>
                  <div >
                        <p className = "size3">
                              {props.info[5]} 
                        </p>
                  </div>
                  
                  
                  
            </div>
      )
            
}



export default FivePointComp