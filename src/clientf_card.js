

class Clientf_card extends React.Component{
    render (){
      const clientf_j= JSON.parse(this.props.propsClientf_j) ;
      console.log(clientf_j);
      
  return (
    <div class="grid-client">
     
        
{
    clientf_j.map(clientf_jj=>{

        return(
            <div className="cardClient">

             <div className="grid-card">
          
              <div id="name" >
              
              <span>{clientf_jj.clientf_nom}</span>
              <span> {clientf_jj.clientf_prenom} </span>
              </div>
             
          
            <div id="id">
            <span>{clientf_jj.clientf_num}</span>
              </div>
          
          <div id="other"></div>
              < div id="address">
              {clientf_jj.clientf_adresse}
               </div> 
          
              <div id="tel">
              {clientf_jj.clientf_tel}
              </div>
              
                <select id="reviewAction">
              <option className="noOrder">No order</option>
            <option className='enCours'>En cours</option>
            
                </select>
              
          </div>
          </div>

        )

    })
    
    }
    </div>
       


       
      

     
   
   )
 }
}


const domContainer = document.querySelector("#clientf_card_react");
const clientf_j = domContainer.innerHTML;


  ReactDOM.render(<Clientf_card propsClientf_j={clientf_j} />, domContainer);