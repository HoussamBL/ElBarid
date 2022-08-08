

<?php

 $connexion = new PDO('pgsql:host=localhost;port=5432;dbname=post;', 'post', '123');

 /** Préparation et exécution de la requête **/
 $sql = 'select * from client_final';
 $resultset = $connexion->prepare($sql);
 $resultset->execute();
 //Get Update id and status  
 if (isset($_GET['id']) && isset($_GET['status'])) {  
    $id=$_GET['id'];  
    echo $id;
    $status=$_GET['status'];  
    echo $status;
    pg_query(pg_connect("host=localhost port=5432 dbname=post user=post password=123"),"update client_final set status='$status' where clientf_num='$id'"); 

    header("location:home1.php");  
    die();  
}  
 


 

?>

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	
    <link rel="stylesheet" href="./css/css/all.css"></link>
    <link rel="stylesheet" href="./css/HeaderClient.css"></link>
    <link rel="stylesheet" href="./css/CardClient.css"></link>
    <link rel="stylesheet" href="./css/Client.css"></link>
   

</head>
<body>
<div id="clientf_header_react"></div>
<div className="bg-Client" >
   <div id="clientf_react"></div>

    
   
        <div class="grid-client">
     
         <?php while($row = $resultset->fetch(PDO::FETCH_ASSOC)) : ?>
    <a href="test.com" style="text-decoration: none;">
            <div class="cardClient">
     
                <div class="grid-card">
               
                     <div id="name" >
                   
                         <span><?=$row['clientf_nom']?></span>
                         <span> <?=$row['clientf_prenom']?></span>
                      </div>
                  
               
                      <div id="id">
                         <span><?=$row['clientf_num']?></span>
                      </div>
               
                      <div id="other"></div>
                      <div id="address">
                      <?=$row['clientf_adresse']?>
                 
                     </div> 
               
                      <div id="tel">
                      <?=$row['clientf_tel']?>
                      </div>
                   
                      <select id="reviewAction" onchange="status_update(this.options[this.selectedIndex].value,'<?php echo $row['clientf_num'] ?>')">
                     
                         <?php if($row['status']==2) {
                            echo "<option class='enCours' value='2'>En cours</option> ";
                            echo "<option class='noOrder'  value='1'>No order</option>";
                         }
                         else {
                            echo "<option  class='noOrder' value='1' >No order</option>";
                            echo "<option  class='enCours' value='2' >En cours</option> ";
                           
                         }
                            ?>
                      </select>
                   
               </div>
               
            </div>
     
      
         
        
      

           
    
    
    
    
    
                        </a>
         <?php endwhile; ?>
        </div>





    </div>
     <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
     <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>

    <script src="clientf_header.js"></script>
    <script src="clientf.js"></script>
    <script src="clientf_card.js"></script>
    <script type="text/javascript">  
      function status_update(value,id){  
        
           let url = "http://localhost/poste/ElBarid/home1.php";  
           window.location.href= url+"?id="+id+"&status="+value;  
      }  
 </script>  
</body>
</html>