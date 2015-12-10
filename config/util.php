<?php
start_session();
function start_session(){
    $a = session_id();
    if ($a == '') {
        session_start();
        setcookie(session_name(), session_id(), time() + 60 * 30, "/");
    }
}
