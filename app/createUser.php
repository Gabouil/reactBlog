<?php

require './login.php';
$adduser = "INSERT INTO `user` (`idUser`, `username`, `password`) VALUES (NULL, 'viveLaFrance', '12345');";

// try {
//     mysqli_query($conn, $adduser);
// } catch (\Exception $e){
//     die('MySQL Error : ' . $e->getMessage());
// }