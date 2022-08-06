

<?php

 $connexion = new PDO('pgsql:host=localhost;port=5432;dbname=post;', 'post', '123');

 /** Préparation et exécution de la requête **/
 $sql = 'select * from client_final';
 $resultset = $connexion->prepare($sql);
 $resultset->execute();
 $clientf=$resultset->fetchAll(PDO::FETCH_ASSOC);
 $resultset->closeCursor();
 $clientf_j=json_encode($clientf);
 


 

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
         <div id="clientf_card_react" > 
         
            <?= $clientf_j;   ?>
         
        </div>
    </div>
     <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
     <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>

    <script src="clientf_header.js"></script>
    <script src="clientf.js"></script>
    <script src="clientf_card.js"></script>
</body>
</html>