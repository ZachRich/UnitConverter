
let numToConvert = document.getElementById('conversionNum')
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

    convertLength()
    convertMass()
    convertVolume()

function convertLength() {
    //Take num from id="convertNum" and convert to meters and feet
    let num = numToConvert.textContent
    console.log(num)

    //Meter To Feet Conversion Factor
    let meterToFeet = num * 3.28084

    //Feet To Meters
    let feetToMeter = num * 0.3048

    //Formatted Output String
    let str = num + " meters = " + meterToFeet.toFixed(3) + " | " + num + " feet = " + feetToMeter.toFixed(3)
    
    //Make changes in HTML
    length.textContent = str
}

function convertVolume() {
    //Take num from id="convertNum" and convert to Liters and Gallons
    let num = numToConvert.textContent

    //Litre to Gallon Conversion
    let litreToGallon = num * 0.2641722

    //Gallon to Litre Conversion
    let gallonToLitre = num * 3.78541

    //Formatted Output String 
    let str = num + " litre = " + litreToGallon.toFixed(3) + " | " + num + " gallon = " + gallonToLitre.toFixed(3)

    //Make changes in HTML
    volume.textContent = str
}

function convertMass() {
    //Take num from id="convertNum" and convert to Kilograms and Pounds
    let num = numToConvert.textContent

    //Kilo to Pound Conversion
    let kiloToPound = num * 2.20462

    //Pound to Kilo Conversion
    let poundToKilo = num * 0.453592

    //Formatted Output String
    let str = num + " kilo = " + kiloToPound.toFixed(3) + " | " + num + " pound = " + poundToKilo.toFixed(3)

    //Make changes in HTML
    mass.textContent = str
}