import React from 'react'

let myStyle = {
    height: "50px",
    width: "100px",
    backgroundColor: "green"
}


let Color = (props)=>{
    return (
        <div>
            <span>{props.color}</span>
            <div style={myStyle}></div>
        </div>
    )
};

 export default Color