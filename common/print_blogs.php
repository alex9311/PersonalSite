<?php 

function connect_mysql(){
    $cred_array = parse_ini_file("../credentials/mysql_creds.ini");
    $servername = $cred_array["MYSQL_SERVERNAME"];
    $username = $cred_array["MYSQL_USERNAME"];
    $password = $cred_array["MYSQL_PASSWORD"];
    $dbname = $cred_array["MYSQL_DBNAME"];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }
    return $conn;
}

function get_blog($id){
    $conn = connect_mysql();
    $sql = 'SELECT * FROM blogs WHERE id = '.$id;
    $results = $conn->query($sql);
    $blog = $results->fetch_object();
    $conn->close();
    return $blog;
}

function print_blog_list($type){
    $conn = connect_mysql();

    $sql = 'SELECT * FROM blogs WHERE type = "'.$type.'" ORDER BY date DESC';
    $result = $conn->query($sql);

    while($row = $result->fetch_assoc()){
        echo '
        <div class="row">
            <div class="col-md-12">
                <h3> <a style="color:black;" href="blog_post.php?id='.$row['id'].'">'.$row['title'].'</a></h3>
                <p style="margin-bottom:1%;">'.date( 'F d, Y', strtotime($row['date'])).'</p>
                <a href="blog_post.php?id='.$row['id'].'">
                  <div class="wide-image-container">
                    <img class="wide-image" src="blogs/cover_images/'.$row['content_link'].'.jpg">
                  </div>
                </a>
                <hr style="border-top: 1px solid #000;">
            </div>
        </div>
        ';
    }
    $conn->close();
}
    
?>
