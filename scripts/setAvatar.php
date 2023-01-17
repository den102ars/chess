<?php

// 1. Получить и разобрать внешние параметры
//$name = $_POST["name"];
session_start();
$avatar = $_POST["avatar"];
$user=$_SESSION["user"];

// 2. Соединиться с базой данных
require("connect.php");

// 3. Выполнить программную логику: изменить данные в базе и (или) получить данные из базы

//$create1 = $mysqli->query("UPDATE users SET Osebe = '{$osebe}' WHERE Osebe = '?'")
$mysqli->query(sprintf(
	"UPDATE users SET avatar = '%s' WHERE id = '%s'",
	$mysqli->real_escape_string($avatar),
	$mysqli->real_escape_string($user)
));
//$myrow = $CheckNick->fetch_array(MYSQLI_ASSOC);

// 4. Вернуть результат (итоговые данные) клиенту

?>