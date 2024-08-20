// Write a function canVote that takes an age as an argument and returns true if the
// person is eligible to vote (age 18 or older) and false otherwise.
function canVote(age) {
    return age >= 18;
}
console.log(canVote(20)); // true
console.log(canVote(16)); // false
console.log(canVote(18)); // true