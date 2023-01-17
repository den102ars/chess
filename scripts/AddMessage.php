<?php

// 1. Получить и разобрать внешние параметры
//$name = $_POST["name"];
session_start();
$mes = $_POST["mes"];
$user=$_SESSION["user"];
// 2. Соединиться с базой данных
require("connect.php");

// 3. Выполнить программную логику: изменить данные в базе и (или) получить данные из базы


$Result1 = $mysqli->query(sprintf(
	"INSERT INTO messages (message,date,userID) VALUES ('%s', CURRENT_DATE(), '%s')",
	$mysqli->real_escape_string($mes),
	$mysqli->real_escape_string($user)
));
if ($Result1){
    echo json_encode($Result1);
}
else {
    echo 'failed';
}
?>