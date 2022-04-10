<?php

require './login.php';
require './cors.php';

$getallUser = 'SELECT id, username, password, token FROM user;';

try {
    $query = mysqli_query($db, $getallUser);

    while($row = mysqli_fetch_array($query)) {
        $userList[] = $row;
    }
    echo json_encode($userList);

} catch(\Exception $e) {
    die('MySQL Error : ' . $e->getMessage());
}