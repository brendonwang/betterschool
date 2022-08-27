<?php
//notice this will put WHATEVER is in json into file
$filename="coins.json";
if (isset($_POST["json"])) {
    file_put_contents($filename,$_POST["json"]);
}
?>