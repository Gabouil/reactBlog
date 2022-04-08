<?php

require './login.php';

$getallposts = 'SELECT title, content, username FROM post LEFT JOIN user on post.idUser = user.id;';
$postList = [];


try {
    $query = mysqli_query($db, $getallposts);

    while($row = mysqli_fetch_array($query)) {
        $postList[] = $row;
    }

    var_dump($postList);
    echo json_encode($postList);
} catch(\Exception $e) {
    die('MySQL Error : ' . $e->getMessage());
}