<?php

// 1. Получить и разобрать внешние параметры
session_start();
$user = $_SESSION["user"];
if(!$_SESSION["user"])
	exit();
// 2. Соединиться с базой данных
require("connect.php");
// 3. Выполнить программную логику: изменить данные в базе и (или) получить данные из базы
$mysqli->query(sprintf(
	"INSERT INTO game_requests (user_id, created_at) VALUES ('%s', NOW())",
	$mysqli->real_escape_string($user)
));

$result = $mysqli->query(sprintf(
	"SELECT * FROM game_requests WHERE user_id = '%s'",
	$mysqli->real_escape_string($user)
));

echo $result->num_rows;

?>