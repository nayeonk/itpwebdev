<?php 

$page = $_GET['page'];

$contents = file_get_contents('https://graph.facebook.com/' . $page);

echo $contents;