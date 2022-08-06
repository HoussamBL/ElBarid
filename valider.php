<?php  
 //Database connectivity  
 $con=pg_connect("host=localhost port=5432 dbname=post user=post password=123"); 
 //Fetch data from database  
 $sql=pg_query($con,"select * from client_final");  
 //Get Update id and status  
 if (isset($_GET['id']) && isset($_GET['status'])) {  
      $id=$_GET['id'];  
      $status=$_GET['status'];  
      pg_query($con,"update client_final set status='$status' where clientf_num='$id'"); 

      header("location:valider.php");  
      die();  
 }  
 ?>  
 <!DOCTYPE html>  
 <html>  
 <head>  
      <meta charset="utf-8">  
      <meta name="viewport" content="width=device-width, initial-scale=1">  
      <title>Valider</title> 
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>  
   
 </head>  
 <body>  
     <div>
     <table class="table">
  
  <thead>
    <tr>
       <th scope="col">No.</th>  
       <th scope="col">Nom</th>  
       <th scope="col">Prenom</th>  
       <th scope="col">Adresse</th>  
       <th scope="col">Tel</th>  
       <th scope="col">Status</th>
       <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     <?php  
           $i=1;  
           if (pg_num_rows($sql)>0) {  
                 while ($row=pg_fetch_assoc($sql)) { ?>  
                 <tr>  
                      <td scope="row"><?php echo $row['clientf_num'] ?></td>  
                      <td><?php echo $row['clientf_nom'] ?></td>  
                      <td><?php echo $row['clientf_prenom'] ?></td> 
                      <td><?php echo $row['clientf_adresse'] ?></td>  
                      <td><?php echo $row['clientf_tel'] ?></td> 
                      <td>  
                           <?php  
                           if ($row['status']==1) {  
                                echo "pas de commande";  
                           }if ($row['status']==2) {  
                                echo "commande";  
                           } 
                           ?>  
                      </td>  
                      <td>  
                           <select onchange="status_update(this.options[this.selectedIndex].value,'<?php echo $row['clientf_num'] ?>')">  
                                <option value="">Changer status</option>  
                                <option value="1">pas de commande</option>  
                                <option value="2">commande</option>  
                                
                           </select>  
                      </td>  
                 </tr>       
           <?php      }  
            } ?>  
  </tbody>
</table>


</div>
 <script type="text/javascript">  
      function status_update(value,id){  
        
           let url = "http://localhost/poste/ElBarid/valider.php";  
           window.location.href= url+"?id="+id+"&status="+value;  
      }  
 </script>   

 </body>  
  <div class=" bottom-0 end-0">
 <a href="logout.php" ><img src="logout.png" /></a>
</div>
 </html>  
 