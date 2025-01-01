<?php
// Import dbConnection function
include('dbConnection.php');
$tablename = "todos";

// Execute database connection
$connection = createDatabaseConnection();

// Query the database
$sql = "SELECT * FROM $tablename";

// Collect query data
$result = $connection->query($sql);

// Parse data to an array
$todos = [];
if ($result->num_rows > 0) {
  // Fetch all rows
  while ($row = $result->fetch_assoc()) {
    $todos[] = $row;
  }
} else {
  $todos = [];
}

// Close database connection
$connection->close();

// Return the todos array as JSON
echo json_encode($todos);
