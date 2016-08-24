<?php

$link = mysql_connect('localhost','todo_items','root');

if(!$link){
	die('could not connect'.mysql_error());

}

$db_selected = mysql_select_db('todo_items', $link);

if (!$db_selected){
	die('could not connect'.mysql_error());
}
echo 'connected successfully';

$sql = "INSERT INTO todo_items (task) VALUES ('todoItem');

if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else {
    echo "ERROR: Could not able to execute $sql." . mysqli_error($link);
}

?>