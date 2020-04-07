//Business Logic for ticket

function Ticket(age, time, movie){
    this.age = age;
    this.time = time;
    this.movie = movie;
    
}

Ticket.prototype.ticketCost = function() {
  var price = 0;

  if (this.age === "mantiee" && this.time === "am") {
    price = 20;
    console.log("wow");

  } else if ((this.age === "senior" || this.age === "kids") && this.time === "am"){
    price = 10;

  } else if (this.age === "mantiee" && this.time === "pm") {
    price = 25;
  } else if ((this.age === "senior" || this.age === "kids") && this.time === "pm") {
    price = 15;
  } 

  // if (this.userAge == "mantiee"){
  //   console.log("bow");
  // }
  
return ("In " + this.time + " you gonna see " + this.movie + "." + "Your ticket cost is: " + price);


 
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

    var userTicket = new Ticket (userAge, userTime, userMovie);
    console.log(userTicket.ticketCost());
    
    $("#ticket").append(userTicket.ticketCost());
    $("#ticket").show();

  })
    



})