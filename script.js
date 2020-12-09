// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){
   //alert("All fields are required");
   init();
});

function init(){

let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");
let faultyItems = document.getElementById("faultyItems");
let launchStatus = document.getElementById("launchStatus");
let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");
      event.preventDefault();
      
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === ""){
         alert("All fields ar required");
      } else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)){
         alert("Pilot and Copilot Names should be only alphabetical characters");         
      } else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)){
         alert("Fuel Level and Cargo Mass should be numeric characters");
      }

      pilotStatus.innerHTML = `Pilot ${pilotInput.value} Ready`;
      copilotStatus.innerHTML = `Copilot ${copilotInput.value} Ready`;
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";

      if (cargoInput.value > 10000){
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else if (fuelInput.value < 10000){
         fuelStatus.innerHTML = "There is not enough fuel for the journey";
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
      }
   });

}