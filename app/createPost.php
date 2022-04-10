<?php

require './login.php';
require './cors.php';

$title = $_SERVER[''];
$content = $_SERVER[''];
$idUser = $_SERVER[''];

$addpost = "INSERT INTO `post` (`idPost`, `title`, `content`, `idUser`) VALUES (NULL, {$title}; {$content}, {$idUser});";

if ($_SERVER[''] != "" && $_SERVER[''] != "") {
    try {
        mysqli_query($conn, $addpost);
    } catch (\Exception $e){
        die('MySQL Error : ' . $e->getMessage());
    }
}