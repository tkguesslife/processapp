<?php
require_once("../config/parameters.php");

$parameters = array(
    'API_HOST' => API_HOST,
    "token" => $_SESSION['token']

);

echo json_encode($parameters);
die();