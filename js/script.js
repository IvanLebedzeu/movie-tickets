//Business Logic for ticket
function Ticket(userAge, userTime, userMovie){
    this.userAge = userAge;
    this.userTime = userTime;
    this.userMovie = userMovie;
    
}

Ticket.prototype.ticketCost = function() {
  var price = 0;

  if (this.userAge === "mantiee" && this.userTime === "am") {
    price += 20;
    console.log(price);

  } else if ((this.userAge === "senior" || this.userAge === "kids") && this.userTime === "am"){
    price += 10;

  } else if (this.userAge === "mantiee" && this.userTime === "pm") {
    price += 25;
  } else if ((this.this.userAge === "senior" || this.userAge === "kids") && this.userTime === "pm") {
    price += 15;
  }
  
  
return ("At " + this.Time + "you gonna see " + this.Movie + "." + "Your ticket cost is: " + price);

 
}





















//User Interface Logic

$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userTime = $("#time").val();
    var userAge = $("#age").val();
    var userMovie = $("#movie").val();
    console.log(userTime, userAge, userMovie);
    
    //empty fields after submission
    $("#time").val('');
    $("#age").val('');
    $("#movie").val('');

    var userTicket = new Ticket (userTime, userAge, userMovie);

  })
    











})