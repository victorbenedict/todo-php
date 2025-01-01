<?php
// Import dbConnection function
include('dbConnection.php');
$tablename = "todos";
$connection = createDatabaseConnection();

// Get form data
$id = $_POST['id'];

// Create query
$sql = "UPDATE $tablename SET status = NOT status WHERE id=$id";

// Execute query
$connection->query($sql);

// Close connection
$connection->close();
