// Write a function isEligibleForDiscount that takes a boolean isMember and a
// number amountSpent as arguments. Return true if the person is eligible for a
// discount. The person is eligible if they are a member or if they have spent more than
// $100.
function isEligibleForDiscount(isMember, amountSpent) {
    // if (isMember == true || amountSpent > 100)
    //     return true;
    // else 
    //     return false;
    return isMember || amountSpent > 100

}
console.log(isEligibleForDiscount(true, 50)); // true
console.log(isEligibleForDiscount(false, 150)); // true
console.log(isEligibleForDiscount(false, 80)); // false
