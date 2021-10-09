const vehicleAvg = document.querySelector('#vehicle-avg')
const totalDistance = document.querySelector('#total-dist')
const totalPersons = document.querySelector('#total-persons')
const fuelPerLitre = document.querySelector('#fuel-per-litre')
const checkControBtn = document.querySelector('.checkContro-btn')
const totalFuelMsg = document.querySelector('.totalFuel-msg')
const totalFuelCostMsg = document.querySelector('.totalFuelCost-msg')
const controMoneyMsg = document.querySelector('.controMoney-msg')


checkControBtn.addEventListener('click', checkContribution)


function checkContribution(){
    if (vehicleAvg.value < 0 || vehicleAvg.value === "" ||
    totalDistance.value < 0 || totalDistance.value === "" || totalPersons.value < 0 || totalPersons.value === "" || fuelPerLitre.value < 0 || fuelPerLitre.value === ""){
        outputMsg.innerText = "Check all values"
    }
    else {
        const fuelRequiredInLitres = totalDistance.value/vehicleAvg.value;

        totalFuelMsg.innerText = `Total Fuel Required : ${fuelRequiredInLitres.toFixed(2)} L`

        const costForFuel = fuelPerLitre.value * fuelRequiredInLitres;

        totalFuelCostMsg.innerText = `Total Cost for Fuel Required : ${costForFuel.toFixed(2)}/-`

        // console.log('total cost of fuel - ',costForFuel)

        const perPersonContro = costForFuel / totalPersons.value;

        // console.log('Per person contro - ',perPersonContro)

        controMoneyMsg.innerText = `Each person contro will be : ${perPersonContro.toFixed(3)}/-`
    }
}