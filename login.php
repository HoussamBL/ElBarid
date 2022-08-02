<?php 
session_start(); 


$conn =pg_connect("host=localhost port=5432 dbname=post user=post password=123");

if (!$conn) {
	echo "Connection failed!";
}

if (isset($_POST['username']) && isset($_POST['password'])) {

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$uname = validate($_POST['username']);
	$pass = validate($_POST['password']);

	if (empty($uname)) {
		header("Location: index.php?error=User Name is required");
	    exit();
	}else if(empty($pass)){
        header("Location: index.php?error=Password is required");
	    exit();
	}else{
		$sql = "SELECT * FROM client WHERE client_username='$uname' AND client_mdp='$pass'";

		$result = pg_query($conn, $sql);

		if (pg_num_rows($result) === 1) {
			$row = pg_fetch_assoc($result);
            if ($row['client_username'] === $uname && $row['client_mdp'] === $pass) {
 
            	header("Location: valider.php");
		        exit();
            }else{
				header("Location: index.php?error=Incorect User name or password");
		        exit();
			}
		}else{
			header("Location: index.php?error=Incorect User name or password");
	        exit();
		}
	}
	
}else{
	header("Location: index.php");
	exit();}
?>