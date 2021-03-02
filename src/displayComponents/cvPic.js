import React from 'react';
const cvPic = props => {
    return(
        <div>
            <img style = {props.style} alt ="cvbilde" className = "Picture" src = {props.img} ></img>
        </div>
    )
}
export default cvPic