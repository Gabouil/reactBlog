<?php

require './login.php';
$addpost = "INSERT INTO `post` (`idPost`, `title`, `content`, `idUser`) VALUES (NULL, 'titre', 'content', 1);";

// try {
//     mysqli_query($conn, $addpost);
// } catch (\Exception $e){
//     die('MySQL Error : ' . $e->getMessage());
// }