import React from 'react';
const Referanser = (props)=>{
      const style1 = {
            display: "flex",
            flexDirection: "column"
      }
   
      let dash = ""
      let comma = ""
     
      if (props.info[1] !== undefined){
            comma = ", "
      }
      if (props.info[3] !== undefined){
            dash = " | "
      }
      return(
            <div >
                  
                  <p className = "size5">
                        {props.info[0]}{comma}{props.info[1]} 
                  </p>
                  <p className = "size3" >
                        {props.info[2]}{dash}{props.info[3]} 
                  </p>
                  
            </div>
      )
}
export default Referanser