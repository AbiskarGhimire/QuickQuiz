<?php
$title = $_GET['title'];
$path = "/quizzes" . $title . ".txt";
if (file_exists($path)) {
  echo file_get_contents($path);
} else {
  echo "Quiz not found.";
}
?>
