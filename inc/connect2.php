<?php
$mysqli = new mysqli("localhost", "root", "", "redflagsdatabase");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT RedCardValue, CardType FROM redflags WHERE RedFlagID = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($ccard, $ctype);
$stmt->fetch();
$stmt->close();
echo $ccard;
?>