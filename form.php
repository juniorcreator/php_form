<?php

$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);
$dt = date('Y-m H:i:s');

if($email == '' || $phone == '' || $name == '') {
  echo 'Enter all the fields';
}
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo 'Enter correct email address';
}
else{
  file_put_contents(apps.txt, "$dt $email $phone $name \n", FILE_APPEND);
  echo '1';
}
