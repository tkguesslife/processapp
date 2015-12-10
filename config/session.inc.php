<?php
function debugCheck($var1, $var2 = null) {

	echo '<pre>';
	if (!$var2) {
		exit(print_r($var1, 1));
	}else{
		echo print_r($var1, 1);
		echo "\n";
		echo '<pre>';
		echo print_r($var2, 1);
		exit();
	}

}

$a = session_id();
if ($a == '') {
	session_start();
	setcookie(session_name(), session_id(), time()+60*30, "/");

} 