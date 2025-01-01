<?php
function createDatabaseConnection($servername = "localhost:3306", $username = "root", $password = "password123", $dbname = "mydatabase")
{
  // Create connection
  $client = new mysqli($servername, $username, $password);

  // Check connection
  if ($client->connect_error) {
    die("Connection failed: " . $client->connect_error);
  }

  // Select database
  $client->select_db($dbname);

  return $client;
}
