// Getting which element in which to display the answer.
var fortuneDisplayElem = document.getElementById("fortuneDisplay");
var questions = document.getElementById("questions");
var bgMusic = document.getElementById("bgMusic");

var YourSister = document.getElementById("YourSister");
var occupationElem = document.getElementById("occupation");
var networthElem = document.getElementById("networth");
var nameElem = document.getElementById("name");
var birthyearElem = document.getElementById("birth year");
var movieElem = document.getElementById("movie");
var ssnElem = document.getElementById("ssn");

var genre = document.getElementById("gener");

function readFortune() {

  // Creating the "fortune" variable.
  var fortune;

  fortune = "enjoy the music!"
  
  // Combining our variables into a single message.
  
  if (genre.value == "Hiphop") {

    bgMusic.src = "post.mp3";
  }

  if (genre.value == "Trap") {

    bgMusic.src = "juice.mp3";
  }

  if (genre.value == "GRIME") {

    bgMusic.src = "stormzy.mp3";
  }

  if (genre.value == "R&B") {

    bgMusic.src = "weekend.mp3";
  }


  // You can check the user's input, and adjust variables accordingly.
  
  // Updating the html of our "fortuneDisplayElem" to show our fortune message.
  fortuneDisplayElem.innerHTML = fortune;
  
  // Hiding the element that holds all our questions.
  questions.style.display = "none";


  

  bgMusic.play();
    
}        