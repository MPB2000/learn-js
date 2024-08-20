// Write a function canRideRollerCoaster that takes two arguments: height (in cm)
// and age. A person can ride the roller coaster if they are taller than 140 cm and older
// than 10 years old. Return true if they can ride, false otherwise.
function canRideRollerCoaster(height, age) {
    return height > 140 && age > 10;
}
console.log(canRideRollerCoaster(150, 12)); // true
console.log(canRideRollerCoaster(130, 15)); // false
console.log(canRideRollerCoaster(160, 8)); // false