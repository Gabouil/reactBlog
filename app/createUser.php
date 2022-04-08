<?php

require './login.php';
require './cors.php';

$username = $_SERVER['PHP_AUTH_USER'];
$password = $_SERVER['PHP_AUTH_PW'];

$token = random_bytes(25);
$strToken = strval(bin2hex($token));
$adduser = "INSERT INTO `user` (`id`, `username`, `password`, `token`) VALUES (NULL , '{$username}' , '{$password}', '{$strToken}');";

if ($_SERVER['PHP_AUTH_USER'] != "" && $_SERVER['PHP_AUTH_PW'] != "") {
    try {
        mysqli_query($db, $adduser);
    } catch (\Exception $e) {
        die('MySQL Error : ' . $e->getMessage());
    }
}