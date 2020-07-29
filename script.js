// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(){
      let pilotName = document.querySelector("input[name=pilot]");
      let copilot = document.querySelector("input[name=copilot]")
      let fuelLevel = document.querySelector("input[name=fuelLelvel]")
      let cargoMass = document.querySelector("input[name=cargoMass]")
      if(pilotName === "" || copilotName === "" || fuelLevel >= 0 || cargoMass >= 0){
         alert("ALL FIELDS REQUIRED!!");
         event.preventDefault();
      }

   });
});
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
