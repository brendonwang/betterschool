<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);
?>
<?php 
$file = fopen("login.txt", "r");
echo $_GET["uname"]; ?>