<?php
$title = $_POST['title'];
$data = $_POST['data'];
file_put_contents("../quizzes/" . $title . "quiz.txt", $data);
echo "Quiz saved as '$title'";
?>
