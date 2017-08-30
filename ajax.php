<?php
 
//Include Database configuration file
 
include "db.php";
 
//Determine if "search" variable is set. Getting value of "search" from "script.js"
 
if (isset($_POST['search'])) {
 
//Search box value assigning to $genre variable
 
   $genre = $_POST['search'];
 
//Select data from "band", and "image" columns in "band_genre_song" table to search based off of matching genre search with "genre" column.
 
   $Query = "SELECT band, image FROM band_genre_song WHERE genre LIKE '%$genre%' LIMIT 50";
 
// Execute Query
 
   $ExecQuery = MySQLi_query($con, $Query);
 
//Create ul to display results
 
   echo '<ul>';
 
   //Fetch result from database
 
   while ($Result = MySQLi_fetch_array($ExecQuery)) {
 
       ?>
 
   <!-- Creating unordered list items

        Calling javascript function called "fill" from "script.js" file by passing fetched result as argument. Activated on item click

        -->
 
  <li onclick='fill("<?php echo $Result['image']; ?>")'>
 
    <a>
 
  <!-- Assign table data from searched genre's "band" column to anchor in "search.html" file -->
 
       <?php echo $Result['band']; ?>

    </a>

  </li>
 
   <?php
 
}}
 
 
?>
 
</ul>