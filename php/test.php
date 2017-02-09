<?php
$myfile = fopen("https://jkhorngui.github.io/calendar/user/test.json", "w");
fwrite($myfile, "hello");

fclose($myfile);

?>