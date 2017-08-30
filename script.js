//Getting value from "ajax.php"
 
function fill(Value) {
 
   //Assigning data from selected band's "image" column to "band-image" element's source attribute in "search.html" file
 
   $('#band-image').attr('src', 'images/'+Value);
 
}
 
$(document).ready(function() {
 
   //Upon pressing a key in "search box" in "search.html" file, this function will be called
 
   $("#search").keyup(function() {
 
       //Assigning search box value to javascript variable named as "name"
 
       var input = $('#search').val();
 
       //If "input" is empty
 
       if (input == "") {
 
           //Assign empty value to "display" div in "search.html" file
 
           $("#display").html("");
          
          //Could clear image if needed based on cleared input
       
       }
 
       //If input is not empty
 
       else {
 
           //Call up AJAX
 
           $.ajax({
 
               //AJAX type is "Post"
 
               type: "POST",
 
               //Data will be sent to "ajax.php"
 
               url: "ajax.php",
 
               //Data that will be sent to "ajax.php"
 
               data: {
 
                   //Assigning value of "input" into "search" variable in "ajax.php"
 
                   search: input
 
               },
 
               //If result found, this funtion will be called
 
               success: function() {
 
                   //Assigning result to "display" div in "search.html" file
 
                   $("#display").html(html).show();
 
               }
 
           });
 
       }
 
   });
 
});