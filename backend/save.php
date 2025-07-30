<?php
$title = $_POST['title'];
$data = $_POST['data'];
file_put_contents("../quizzes/" . $title . ".txt", $data);
echo "Quiz saved as '$title'";
?>
