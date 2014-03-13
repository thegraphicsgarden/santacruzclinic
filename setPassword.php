<title>Set Password</title>
<?php
	$username = 'Jon';
	$password = 'Stewart';
	
	// A higher "cost" is more secure but consumes more processing power
	$cost = 10;
	
	// Create a random salt
	$salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');
	
	// Prefix information about the hash so PHP knows how to verify it later.
	// "$2a$" Means we're using the Blowfish algorithm. The following two digits are the cost parameter.
	$salt = sprintf("$2a$%02d$", $cost) . $salt;
	
	// Hash the password with the salt
	$hash = crypt($password, $salt);
	
	echo "<p>Here: " . $hash . "</p>";
	
	try {
		include 'db.php';
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		
		$stmt = $pdo->prepare('UPDATE patients SET hash = :hash WHERE username = :username');
		$stmt->execute(array(
			':hash'   => $hash,
			':username' => $username
		));
	} catch(PDOException $e) {
		echo 'ERROR: ' . $e->getMessage();
	}
?>