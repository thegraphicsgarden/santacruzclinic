<?php
$table = "patients";
$user_id = "1";
$user_id = $_GET["id"];

// Create connection
include 'db.php';

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$queryStr = "SELECT * FROM " . $table . " WHERE user_id=" . $user_id;
$query = mysqli_query($con, $queryStr);
$values = array();
while($row = mysqli_fetch_array($query)) {
	$values = $row; 
}

$jsn = json_encode($values);
print_r($jsn);
?>