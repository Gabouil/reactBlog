<?php

require './login.php';
require './cors.php';

$title = $_POST['titleData'];
$content = $_POST['contentData'];
$idUser = $_POST['userIdData'];

$addpost = "INSERT INTO `post` (`idPost`, `title`, `content`, `idUser`) VALUES (NULL, {$title}; {$content}, {$idUser});";

if ($_POST['titleData'] != "" && $_POST['contentData'] != "" && $_POST['userIdData'] != "") {
    try {
        mysqli_query($db, $addpost);
    } catch (\Exception $e){
        die('MySQL Error : ' . $e->getMessage());
    }
}