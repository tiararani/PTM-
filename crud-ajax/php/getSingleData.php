<?php 
    include 'connection.php';
    $id = $_POST['id'];
    $sql = mysqli_query($connection, "SELECT * FROM tbldata WHERE id = '$id' ");
    $result = mysqli_fetch_array($sql);
    echo json_encode($result);
?>