<title>Login</title>
<?php
//$password = $_POST["password"];

	$data = file_get_contents("php://input");
    $objData = json_decode($data);

    $username = $objData->username;
    $password = $objData->password;


$username = 'jasonbryant';
$password = 'test';

try {
		include 'db.php';
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		$sth = $pdo->prepare('
		  SELECT
			hash
		  FROM patients
		  WHERE
			username = :username
		  LIMIT 1
		  ');
		
		$sth->bindParam(':username', $username);
		
		$sth->execute();
		
		$user = $sth->fetch(PDO::FETCH_OBJ);
		
		// Hashing the password with its hash as the salt returns the same hash
		if ( crypt($password, $user->hash) == $user->hash ) {
		  	// Ok!
			$queryStr = "SELECT * FROM patients WHERE username = :username";

			$stmt = $pdo->prepare($queryStr);
			$stmt->execute(array( ':username' => $username));

			$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$json = json_encode($result);
			echo  $json;
		}
		else
			echo "Wrong Password or Username";		

	} catch(PDOException $e) {
		echo 'ERROR: ' . $e->getMessage();
	}

?>