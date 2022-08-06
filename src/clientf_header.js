

class Clientfh extends React.Component{
    render (){
  return (
    <div>
      
     
     <div className="bgHeader">
           <img src="./img/Logo2.png" class="Logo2" ></img>
          
          
           <a href="logout.php">  <i class="fa-solid fa-arrow-right-from-bracket fa-2xl logout"></i></a>
     </div>
    
</div>


       
      

     
   
   )
 }
}


const domContainer = document.querySelector("#clientf_header_react");
  ReactDOM.render(<Clientfh />, domContainer);