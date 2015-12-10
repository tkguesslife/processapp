<?php
require_once("../config/parameters.php");


if ($_POST) {
    $service_url = API_HOST."/login_check";

    $curl = curl_init($service_url);
    $curl_post_data = $_POST;
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $curl_post_data);
    $curl_response = curl_exec($curl);

    if ($curl_response === false) {
        $info = curl_getinfo($curl);
        curl_close($curl);
        die('error occured during curl exec. Additional info: ' . var_export($info));
    }
    curl_close($curl);
    $decoded = json_decode($curl_response, true);

    if (isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
        die('error occured: ' . $decoded->response->errormessage);
    }


    if (isset($decoded['token'])) {
//        $_SESSION['SYSUSER'] = $decoded['user'];
        $_SESSION['token'] = $decoded['token'];
        unset($_SESSION['login_error']);
    } else {
        $_SESSION['login_error'] = $decoded['message'];
    }


}
header('Location: index.php');
