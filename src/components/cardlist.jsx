import React from "react";
import Card from "./card";
import './cardlist.css'
//import { robot_list } from "./robots";

const Cardlist=({robots})=>{
    return(
        <div className="main-body">    
        {
            robots.map((user,i)=>{
                return( 
                    
                    <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name}  
                    email={robots[i].email} 
                    />
                )
            }
        
             )
        }    
        </div>
    )

}

export default Cardlist;