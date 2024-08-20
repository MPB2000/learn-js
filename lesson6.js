// Write a function checkTemperature that takes a temperature in Celsius as an
// argument and returns "Cold" if the temperature is below 10, "Warm" if it’s between 10
// and 25, and "Hot" if it’s above 25.
function checkTemperature(temp) {

    if (temp <10) 
        return "Cold";
    else if (temp >=10 & temp <= 25) 
        return "Warm";
    else (temp >25) 
        return "Hot";
}
console.log(checkTemperature(5)); // "Cold"
console.log(checkTemperature(15)); // "Warm"
console.log(checkTemperature(30)); // "Hot"
