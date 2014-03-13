<title>Dashboard</title>
<?php
// Create connection
include 'db.php';

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$queryStr = "SELECT * FROM patients";
$query = mysqli_query($con, $queryStr);
$values = array();
$i = 0;
while($row = mysqli_fetch_array($query)) {
	$values[$i]["user_id"] = $row["user_id"];
	$values[$i]["username"] = $row["username"];
	$values[$i]["hash"] = $row["hash"];
	$values[$i]["firstname"] = $row["firstname"];
	$values[$i]["lastname"] = $row["lastname"];
	$values[$i]["email"] = $row["email"];
	$values[$i]["age"] = $row["age"];
	$values[$i]["height"] = $row["height"];
	$values[$i]["weight"] = $row["weight"];
	$values[$i]["gender"] = $row["gender"];
	$values[$i]["birthdate"] = $row["birthdate"];
	$values[$i]["photoURL"] = $row["photoURL"];
	$i++;
}

$jsn = json_encode($values);
print_r($jsn);
?>