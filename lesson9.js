// Write a function getStatus that takes a boolean isOnline and returns "Online" if
// isOnline is true, and "Offline" if it is false, using a ternary operator.
function getStatus(isOnline) {
    return isOnline? "Online" : "Offline";
}
console.log(getStatus(true)); // "Online"
console.log(getStatus(false)); // "Offline"
