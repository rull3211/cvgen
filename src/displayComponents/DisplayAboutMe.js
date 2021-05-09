import React from 'react';
const DisplayAboutMe = (props)=>{
   
      return(
            <div className ="DisplayAboutMe">
                  <h1 
                        className="size1">{props.header}
                  </h1>
                  <p 
                        className="size3"> {props.content} 
                  </p>
            </div>
      )
}
export default DisplayAboutMe