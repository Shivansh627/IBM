// Get the form elements
const form = document.querySelector('form');
const electricityInput = document.querySelector('#electricity');
const gasInput = document.querySelector('#gas');
const oilInput = document.querySelector('#oil');
const waterInput = document.querySelector('#water');
const wasteInput = document.querySelector('#waste');
const transportationInput = document.querySelector('#transportation');
const calculateButton = document.querySelector('#calculate');
const resultDiv = document.querySelector('#result');

// Define the calculation functions
function calculateElectricityCarbonFootprint(electricityConsumption) {
  // Assume 1 kWh of electricity generates 0.62 kg of CO2
  return electricityConsumption * 0.62;
}

function calculateGasCarbonFootprint(gasConsumption) {
  // Assume 1 therm of gas generates 5.3 kg of CO2
  return gasConsumption * 5.3;
}

function calculateOilCarbonFootprint(oilConsumption) {
  // Assume 1 gallon of oil generates 10.2 kg of CO2
  return oilConsumption * 10.2;
}

function calculateWaterCarbonFootprint(waterConsumption) {
  // Assume 1 gallon of water generates 0.24 kg of CO2
  return waterConsumption * 0.24;
}

function calculateWasteCarbonFootprint(wasteGeneration) {
  // Assume 1 pound of waste generates 0.82 kg of CO2
  return wasteGeneration * 0.82;
}

function calculateTransportationCarbonFootprint(transportationMiles) {
  // Assume 1 mile of driving generates 0.41 kg of CO2
  return transportationMiles * 0.41;
}

// Define the main calculation function
function calculateCarbonFootprint(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const electricityConsumption = parseFloat(electricityInput.value);
  const gasConsumption = parseFloat(gasInput.value);
  const oilConsumption = parseFloat(oilInput.value);
  const waterConsumption = parseFloat(waterInput.value);
  const wasteGeneration = parseFloat(wasteInput.value);
  const transportationMiles = parseFloat(transportationInput.value);

  const electricityCarbonFootprint = calculateElectricityCarbonFootprint(electricityConsumption);
  const gasCarbonFootprint = calculateGasCarbonFootprint(gasConsumption);
  const oilCarbonFootprint = calculateOilCarbonFootprint(oilConsumption);
  const waterCarbonFootprint = calculateWaterCarbonFootprint(waterConsumption);
  const wasteCarbonFootprint = calculateWasteCarbonFootprint(wasteGeneration);
  const transportationCarbonFootprint = calculateTransportationCarbonFootprint(transportationMiles);

  const totalCarbonFootprint = electricityCarbonFootprint + gasCarbonFootprint + oilCarbonFootprint + waterCarbonFootprint + wasteCarbonFootprint + transportationCarbonFootprint;

  // Display the result
  resultDiv.innerHTML = `
    <h2>Your Carbon Footprint:</h2>
    <p>Total: ${totalCarbonFootprint.toFixed(2)} kg CO2</p>
    <p>Electricity: ${electricityCarbonFootprint.toFixed(2)} kg CO2</p>
    <p>Gas: ${gasCarbonFootprint.toFixed(2)} kg CO2</p>
    <p>Oil: ${oilCarbonFootprint.toFixed(2)} kg CO2</p>
    <p>Water: ${waterCarbonFootprint.toFixed(2)} kg CO2</p>
    <p>Waste: ${wasteCarbonFootprint.toFixed(2)} kg CO2</p>
    <p>Transportation: ${transportationCarbonFootprint.toFixed(2)} kg CO2</p>
  `;
}
function handle(){
  document.querySelector("#result").classList.toggle("none")
}
// Add event listener to the form submission event
form.addEventListener('submit', calculateCarbonFootprint);

sub=document.getElementById("calculate")
sub.addEventListener("click",handle)