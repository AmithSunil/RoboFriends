import React from "react";
import './card.css'
import 'tachyons'


const Card=({name,email,id})=>{
    return(

    <div className="grow bg-light-green br3 pa3 ma2 shadow-4 bw2  ">
        <img className="robo-image" src={'https://robohash.org/'+id} alt="img-here" />
        <h4>{name}</h4>
        <h5>{email}</h5>
    </div>
    )

} 
export default Card;