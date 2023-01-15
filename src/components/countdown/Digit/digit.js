import React from "react";
import './digit.css';

const Digit = (props) => {
    return(
        <div className="borderDiv" style={{borderColor: props.color}}>
            
            <h1 className="heading" style={{color: props.color}}>
            {props.value < 10 ? `0${props.value}` : props.value}
            {/* {props.value} */}
            </h1>
        </div>
    )
}

export default Digit;



