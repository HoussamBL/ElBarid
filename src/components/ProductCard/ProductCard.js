import React from 'react';
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div>
      <div class="grid-product">
        <div id="product1">  <img src="/product1.webp" class="product1" ></img> </div>
        <div id="nameProduct"><b>COCA COLA ZERO</b> <div id="descriptionProduct"><b>25cl</b></div></div>
        <div id="qte"><input id="qte" type="number" min="0"  max="100" ></input></div>
       
        <div id="price">4.49 DH</div>
        <div id="button-add-cart"><input type="submit" onclick="myFunction()" id="button-add-cart" value ="Ajouter au panier" ></input> </div>
    
      </div>
    </div>
  )
}

export default ProductCard;
