import React from 'react'
import './CardClient.css';

const CardClient = () => {
  return (
    <div>

<div className="cardClient">
  <div className="grid-card">

    <div id="name">
    BENNAN manal 
    </div>

  <div id="id">
  <span>12345665</span>
    </div>

<div id="other"></div>
    < div id="address">
    address
     </div> 

    <div id="tel">
    tel
    </div>
    
      <select id="reviewAction">
    <option className="noOrder">No order</option>
   <option className='orderDone'>Order done</option>
  <option className='enCours'>En cours</option>
  
      </select>
    
</div>
</div>

    </div>
  )
}

export default CardClient;
