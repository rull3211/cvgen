import React from 'react';
const DisplayAboutMe = (props)=>{
   
      return(
            <div className ="DisplayAboutMe">
                  <p 
                        className="size3"> {props.content} 
                  </p>
            </div>
      )
}
export default DisplayAboutMe