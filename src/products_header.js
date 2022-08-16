class Productsh extends React.Component{
    render (){
  return (
  
      
     
      <div className="bgHeader">
           <img src="./img/Logo2.png" class="Logo2" ></img>
        
           <a href="logout.php">  <i class="fa-solid fa-arrow-right-from-bracket fa-2xl logout"></i></a>
           <a><i class="fa-solid fa-cart-shopping fa-2xl cart"></i></a>

    
        </div>


       
      

     
   
   )
 }
}


const domContainer = document.querySelector("#products_header_react");
ReactDOM.render(<Productsh />, domContainer);