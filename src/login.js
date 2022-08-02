class Login extends React.Component{
    render (){
       
        return(
            <div >
        <link rel="stylesheet" href="./css/login.css"></link>
        <link rel="stylesheet" href="./css/headerLogin.css"></link>
        <div className="bgHeader">
           <img src="img/Logo2.png" class="Logo2" ></img>
          
        </div>
    
                    <div className="bg-Form"> </div>
            <img src="img/Logo1.png" class="Logo1" ></img>
                    <p class="welcome">BIENVENUE CHEZ BARID AL-MAGHRIB DISTRIBUTION  ! <b class="login">CONNECTER-VOUS</b> </p>
            
                    <div class="vl"></div>
            
                   <form action="login.php" method="post">
                    <label class="fuser">Nom d'utilisateur :</label><br/>
          
                    <input type="text" id="fuser" name="username" ></input><br/>
          
                    <label class="fmdp">Mot de passe :</label><br/>
                    <input type="password" id="fmdp" name="password" ></input><br/>
                    <input type="submit" onclick="myFunction()" id="button-login" value ="Se connecter" ></input>
                   
                </form>
                </div>

        )


    }
      
 }
     
    

  const domContainer = document.querySelector("#login_react");
  ReactDOM.render(<Login />, domContainer);