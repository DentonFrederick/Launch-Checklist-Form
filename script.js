// Write your JavaScript code here!
window.addEventListener("load", function(){
   let launchForm = document.querySelector("launchForm");
   form.addEventListener("submit", function(){
      let pilotName = document.querySelector("input[name=pilot]");
      let copilotName = document.querySelector("input[name=copilot]")
      let fuelLevel = document.querySelector("input[name=fuelLelvel]")
      let cargoMass = document.querySelector("input[name=cargoMass]")
      if(pilotName === "Chris" && copilotName === "Blake" || isNaN(fuelLevel) || isNaN(cargoMass)){
         alert("INCORRECT SUBMISSION");
         event.preventDefault();
      }

   });
   if(pilotName !== "Chris"){
      console.log("Not the right captain")
   }else if(pilotName === "Chris"){
      console.log("pilot ready")
   }
   if(copilotName !== "Blake"){
      console.log("wrong copilot")
   } else if(copilotName === "Blake"){
      console.log("copilot ready")
   }

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
