import React from 'react';
const AboutMeComp = (props)=> {
      const textStyle = {
            width: "100%",
            height: "30vh",
            resize: "none",
            border: "none",
            backgroundColor: "rgb(242, 245, 250)",
            fontSize : "15pt"
      }

      return(
            <div className ="About">
                  
                  <textarea style = {textStyle} 
                        id = "aboutMe" 
                        onChange = {props.handler}
                        value= {props.val}>
                  </textarea>
            </div>
      )
}
export default AboutMeComp