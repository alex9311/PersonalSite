<?php 

function connect_mysql(){
    $cred_array = parse_ini_file("../../credentials/mysql_creds.ini");
    print_r($cred_array);
    $servername = $cred_array["MYSQL_SERVERNAME"];
    $username = $cred_array["MYSQL_USERNAME"];
    $password = $cred_array["MYSQL_PASSWORD"];
    $dbname = $cred_array["MYSQL_DBNAME"];
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); } 
    return $conn;
}

connect_mysql();

?>
