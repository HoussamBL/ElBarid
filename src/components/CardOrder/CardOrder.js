import React from 'react'
import "./CardOrder.css";
import { AiOutlineDelete } from "react-icons/ai";


const CardOrder = () => {
  return (
   
      <div className='grid-order-container'>
        <div id="img"> <img src="./orderImg.png"></img></div>
        <div id="nom-description"> CocaCola zero
        <div id="descrpition">25cl</div> 
        </div>
        
        <div id="qtee"><input id="qtee" type="number" min="0"  max="100" ></input></div>
        <div id="delete"><AiOutlineDelete/></div>
       

        <div id="prix">40dh</div>
        </div>
    
         
    
    
  )
}

export default CardOrder
