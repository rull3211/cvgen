import React from 'react';
const pictureAdder = (props) => {

    return (
        <div className = "fileWrapper">
            <label className = "FileLable" htmlFor="files" >Select Image</label>
            <input style={{"visibility" : "hidden"}} id = "files" onChange = {props.handler} type = "file">
            </input>
        </div>
    )
}
export default pictureAdder