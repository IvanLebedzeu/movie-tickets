//Business Logic
function MovieTicket(){
    
}





















//User Interface Logic

$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userTime = $("#time").val();
    var userAge = $("#age").val();
    var userMovie = $("#movie").val();
    console.log(userTime, userAge, userMovie);
  })
    











})