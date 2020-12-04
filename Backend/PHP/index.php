<?php
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Headers: *');
  error_reporting(0);
  require "Routes.php";

function pr($data) {
  echo '<pre>';
    print_r($data);
  echo '</pre>';
}