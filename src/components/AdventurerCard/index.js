import React from "react";
import "./style.css"

function AdventurerCard(props) {
    return (
       
            <img className="images col-2" onClick={() => props.imgClick(props.id)}  key={props.id} id={props.id} src={props.url} alt="..." />
     
           
            )
        
     }
        
export default AdventurerCard