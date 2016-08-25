<html>
<body>
  <?php

  $user = 'root';
  $password = 'root';
  $db = 'Tasks';
  $host = 'localhost';
  $port = 8889;

  $link = mysql_connect(
     "$host:$port", 
     $user, 
     $password
  );
  $db_selected = mysql_select_db(
     $db, 
     $link
  );

  if (!$link)
    {
    die('Could not connect: ' . mysql_error());
    }
   
  mysql_select_db($db_selected);
   
  $sql="INSERT INTO Tasks (todo_items)
  VALUES
  ('$_POST['todoItem']')";
   
  if (!mysql_query($sql,$link))
    {
    die('Error: ' . mysql_error());
    }
  echo "1 record added";
   
  mysql_close($link);
  


?>
</body>
</html>