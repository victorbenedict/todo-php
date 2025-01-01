<?php
// Import dbConnection function
include('dbConnection.php');
$tablename = "todos";
$connection = createDatabaseConnection();

// Get form data
$todo = $_POST['todo'];

// Create query
$sql = "INSERT INTO $tablename (todo) VALUES ('$todo')";

// Execute query
$connection->query($sql);

// Close connection
$connection->close();

// Redirect to index.html
header("Location: index.html");

// Stop further script execution
exit();
