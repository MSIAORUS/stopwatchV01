import React from "react";
import Digit from './Digit/digit';

const countdown = (props) =>{
    return(
        <div>
            <td className="min-td"><Digit color="green" value = {props.time.min}/></td>
            <td className="sec-td"><Digit color="orange" value = {props.time.sec}/></td>
            <td className="milli-td"><Digit color="skyBlue" value = {props.time.milli}/></td>
        </div>
    )
}

export default countdown;



