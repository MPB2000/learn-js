// Write a function isSameWord that takes two strings and returns true if they are the
// same (case-insensitive), and false otherwise.

function isSameWord(word1, word2) {
    // return word1.toUpperCase() == word2.toUpperCase();
    return word1.toLowerCase() == word2.toLowerCase();
}
console.log(isSameWord('Hello', 'hello')); // true
console.log(isSameWord('World', 'WORLD')); // true
console.log(isSameWord('JavaScript', 'Java')); // false