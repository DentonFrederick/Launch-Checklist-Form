// Write your JavaScript code here!
window.addEventListener("load", function(){
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotSatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let fuelAndCargo = [fuelLevel, cargoMass];
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
       if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value ===""){
          window.alert("ALL FIELDS REQUIRED");
       } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
          window.alert("ENTER VALID INPUTS");
       } else {
          if(fuelLevel.value < 10000 || cargoMass > 10000){
             launchStatus.innerHTML = 'Shuttle not ready for launch';
             launchStatus.style.color = "red";
             pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
             copilotStatus.innerHTML =   `Co-Pilot ${copilotName.value} is ready for launch`;
             for(let i=0;i<fuelAndCargo.length; i++){
                if(fuelLevel.value < 10000){
                   fuelStatus.innerHTML= `NOT ENOUGH FUEL`;
                  } else {
                     fuelStatus.innerHTML= `Fuel level high enough for launch`;
                  }
                  if(cargoMass.value > 10000){
                     cargoStatus.innerHTML= `TOO MUCH CARGO`;
                  } else{;
                     cargoStatus.innerHTML= `Cargo mass low enough for launch`;
                  }
             }
             faultyItems.style.visibility= "visible";
          } else {
             launchStatus.innerHTML= `Shuttle is ready`;
             launchStatus.style.color= "green";
             faultyItems.style.visibility= "hidden";
          }
       }
   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById("missionTarget");
         let randomSelection = Math.floor(Math.random() * json.length);
         let mission = json[randomSelection];
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${mission.name}</li>
               <li>Diameter: ${mission.diameter}</li>
               <li>Star: ${mission.star}</li>
               <li>Distance from Earth: ${mission.distance}</li>
               <li>Number of Moons: ${mission.moons}</li>
            </ol>
            <img src="${mission.image}">
         `;
      });
   });
});

