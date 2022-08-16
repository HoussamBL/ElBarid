<!DOCTYPE html>


<?php

 $connexion = new PDO('pgsql:host=localhost;port=5432;dbname=post;', 'post', '123');

 /** Préparation et exécution de la requête **/
 $sql = 'select * from products';
 $resultset = $connexion->prepare($sql);
 $resultset->execute();

 


 

?>

<html>
<head>
	<title>Products</title>
	
    <link rel="stylesheet" href="./css/css/all.css"></link>
    <link rel="stylesheet" href="./css/HeaderProducts.css"></link>
    <link rel="stylesheet" href="./css/ProductCard.css"></link>
    <link rel="stylesheet" href="./css/Products.css"></link>
   

</head>
<body>
    <header>
<div id="products_header_react"></div>
</header>
<div class="bg-Client">
    
                        <div class="test">
                            <div>
                                <h1 id="gerer"> GENERER <b>LA COMMANDE </b></h1>
                                <h2 id="pour">Pour <b class="client">nomClient</b></h2>
                            </div>
                            <input type="text" class="searchProduit" placeholder="Search..">
                        </div>

                        <div class="grid-products">
                        <?php while($row = $resultset->fetch(PDO::FETCH_ASSOC)) : ?>
                            <div id="grid-item">
                                <div>
                                    <div class="grid-product">
                                        <div id="product1">  
                                            <img src= "<?=$row['product_img']?>" class="product2" width="200" height="208"> 
                                        </div>
                                        <div id="nameProduct"><b><?=$row['product_name']?></b> </div>
                                        <div id="qt">
                                            <input id="qte" type="number" min="0">
                                        </div>
                                        <div id="price"><?=$row['product_price']?>DH</div>
                                        <div id="button-add-cart">
                                            <input type="submit" id="button-add-cart" value="Ajouter au panier"> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php endwhile; ?>
                            
                        </div>




  
     <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
     <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>

    <script src="products_header.js"></script>
    <script src="products.js"></script>
  
    
  
</body>
</html>