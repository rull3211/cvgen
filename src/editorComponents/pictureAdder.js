import React from 'react';
const pictureAdder = (props) => {

    return (
        <div>
            <label className = "FileLable" for="files" >Select Image</label>
            <input style={{"visibility" : "hidden"}} id = "files" onChange = {props.handler} type = "file">
        </input>
        </div>
    )
}
export default pictureAdder