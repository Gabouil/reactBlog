<?php

require './login.php';
require './cors.php';

$username = $_SERVER['PHP_AUTH_USER'];
$password = $_SERVER['PHP_AUTH_PW'];

$token = strval(bin2hex(random_bytes(25)));
$adduser = "INSERT INTO `user` (`id`, `username`, `password`, `token`) VALUES (NULL , '{$username}' , '{$password}', '{$token}');";

if ($_SERVER['PHP_AUTH_USER'] != "" && $_SERVER['PHP_AUTH_PW'] != "") {
    try {
        mysqli_query($db, $adduser);
    } catch (\Exception $e) {
        die('MySQL Error : ' . $e->getMessage());
    }
}